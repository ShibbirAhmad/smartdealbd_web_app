<?php

namespace App\Http\Controllers\Admin;

use Picqer;
use Carbon\Carbon;
use App\Models\City;
use App\Models\Sale;
use App\Models\Order;
use App\Models\Credit;
use App\Models\Courier;
use App\Models\Product;
use App\Models\SubCity;
use App\Models\Customer;
use App\Models\OrderItem;
use App\Models\OrderNote;
use App\Models\CustomerDue;
use App\Models\OrderBarcode;
use Illuminate\Http\Request;
use App\Models\BalanceInsertAdmin;
use Barryvdh\DomPDF\Facade as PDF;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Models\ResellerOrderDetails;
use Illuminate\Support\Facades\Response;



class OrderController extends Controller
{
    public function __contruct(Request $request){

      $this->middleware('admin');
      if($request->ajax()){
        abort(404);
      }

     }
    public function index(Request $request)
    {
        //return "hello";
        //get all order with order filtaring
        //firstly order separate in condtinaly
        // here is make firrstly 4 condition
        //1 is when no $request data
        //2 is when only $request start date
        //3 is when filtaring with start and end date
        //4 is when order filtaring with courier

        // when no $request data
        if(empty($request->start_date) && empty($request->end_date) && empty($request->courier_id)){

           // return "ho";
           return Order::ordersAll($request);

        }
        // when only $request start date
        if(!empty($request->start_date) && empty($request->end_date) && empty($request->courier_id)){
            return Order::orderFilterWithStartDate($request);
        }

        // when  $request start date and end date
        if(!empty($request->start_date) && !empty($request->end_date) && empty($request->courier_id)){
            return Order::orderFilterWithStartAndEndDate($request);
         }

         //filtering with courier

         if(!empty($request->courier_id)){
            return Order::orderFilterWithCourier($request);
         }
      }





    public function store(Request $request)
    {
    //    return $request ;
        $validatedData = $request->validate([
            'customer_mobile' => 'required|digits:11 ',
            'customer_name' => 'required ',
            'customer_address' => 'required ',
            'city' => 'required',
            'courier' => 'required',
            'shipping_cost' => 'required',
            'paid_by'=>'required',
        ]);

        DB::transaction(function() use($request){
        //save the order
        $max_id = Order::max('id') ?? 0;
        $invoice = 1 + $max_id;
        $order=new Order();
        $order->host_name=$request->getHttpHost();
        $order->invoice_no=$invoice;
        $order->order_type=$request->order_type;
        $order->customer_name=$request->customer_name;
        $order->customer_phone=$request->customer_mobile;
        $order->customer_address=$request->customer_address;
        $order->note=$request->note ;
        $order->city_id=$request->city;
        $order->courier_id=$request->courier;
        $order->shipping_cost=$request->shipping_cost ?? 0;
        $order->discount=$request->discount ?? 0;
        $order->paid=$request->paid??0;
        $order->total=$request->total;
        $order->status=$request->status;
        $order->create_admin_id=session()->get('admin')['id'];
        $order->paid_by=$request->paid_by;

        //store who is approved
        if($request->status==3){
            $order->approved_admin_id=session()->get('admin')['id'];
            $order->approved_date=Carbon::now();
        }
        //store who is update
        if($request->status==2){
             $order->pending_admin_id=session()->get('admin')['id'];
            $order->pending_date=Carbon::now();
        }
        $order->save();
        //if order save then save the order details
            foreach($request->products as $product){
                //update product stock
                // $product_stock=Product::where('id',$product['id'])->first();
                // $product_stock->stock=$product_stock->stock-$product['quantity'];
                // $product_stock->save();

                $details=new OrderItem();
                $details->order_id=$order->id;
                $details->product_id=$product['id'];
                $details->price=$product['price'];
                $details->quantity=$product['quantity'];
                $details->total=$product['quantity']*$product['price'];
                $details->attribute_id=$product['attribute_id'] ?? null;
                $details->variant_id=$product['variant_id'] ?? null;
                $details->save();
                }
                $phone=$order->customer_phone;
                $name=$request->name;
                $invoice=$order->invoice_no;
                 Order::SendMessageCustomer($phone,$name,$invoice);
              //create a credit
              if($order->paid>0){
                $credit = new Credit();
                $credit->purpose = "Order Paid Amount";
                $credit->amount = $order->paid;
                $credit->balance_id=$order->paid_by;
                $credit->comment ="Order Paid Amount '$order->paid' Paid by '$order->paid_by'. Order Invoie Number '$order->invoice_no";
                $credit->date = date('Y-m-d');
                $credit->insert_admin_id=session()->get('admin')['id'];
                $credit->save();
                //inserting balance add history
                $balance_insert = new BalanceInsertAdmin();
                $balance_insert->admin_id= session()->get('admin')['id'];
                $balance_insert->balance_id= $order->paid_by;
                $balance_insert->order_id= $order->id;
                $balance_insert->amount= $order->paid;
                $balance_insert->save();

              }


        });
        return response()->json([
                'status'=>'SUCCESS',
                'message'=>'Order created successfully'
            ]);
    }





   public function update(Request $request, $id){
        //  return $request->all();
        $validatedData = $request->validate([
            'customer_mobile' => 'required|digits:11 ',
            'customer_name' => 'required ',
            'customer_address' => 'required ',
            'city' => 'required',
            'courier' => 'required',
            'shipping_cost' => 'required',
            'status' => 'required',
        ]);

        $order=Order::findOrFail($id);
        if($order->status!=1 && $order->status!=2){
            return \response()->json('Order New Or Pending not now');
        }
        DB::transaction(function() use($request,$order){
      // return $customer->name;
        $paid= $request->paid - $order->paid;
        $order->customer_name=$request->customer_name;
        $order->customer_address=$request->customer_address;
        $order->customer_phone=$request->customer_mobile;
        $order->city_id=$request->city;
        $order->note=$request->note ;
        $order->status=$request->status;
        $order->courier_id=$request->courier;
        $order->shipping_cost=$request->shipping_cost ?? 0;
        $order->discount=$request->discount ?? 0;
        $order->paid=$request->paid??0;
        $order->total=$request->total;
        $order->save() ;
            //update credit
            if( $paid > 0){
                $credit = new Credit();
                $credit->purpose = "Order Paid Amount(From Order Update)";
                $credit->amount = $paid;
                $credit->balance_id=$request->paid_by;
                $credit->comment ="Order Paid Amount '$order->paid' Paid by '$request->paid_by'. Order Invoie Number '$order->invoice_no";
                $credit->date = date('Y-m-d');
                $credit->insert_admin_id=session()->get('admin')['id'];
                $credit->save();

                //inserting balance add history
                $exit_balance = BalanceInsertAdmin::where('order_id',$order->id)->where('balance_id',$credit->balance_id)->first();
                if(!empty($exit_balance)){
                    $exit_balance->amount=$order->paid;
                    $exit_balance->save();
                }else {
                    $balance_insert = new BalanceInsertAdmin();
                    $balance_insert->admin_id= session()->get('admin')['id'];
                    $balance_insert->balance_id= $request->paid_by;
                    $balance_insert->order_id= $order->id;
                    $balance_insert->amount= $order->paid;
                    $balance_insert->save();
                 }
              }

            $order_items=OrderItem::where('order_id',$order->id)->get();
            foreach($order_items as $order_item){
            //update product stock befere delete items
               $order_item->delete();
            }

            foreach($request->products as $product){

                $details=new OrderItem();
                $details->order_id=$order->id;
                $details->product_id=$product['product_id'];
                $details->price=$product['price'];
                $details->quantity=$product['quantity'];
                $details->total=$product['quantity'] * $product['price'];
                $details->attribute_id=$product['attribute_id'] ?? null;
                $details->variant_id=$product['variant_id'] ?? null;
                $details->save();
                }

            });

            return response()->json([
                'status'=>'SUCCESS',
                'message'=>'Order was updated successfully'
             ]);

    }



    public function approved($id){

        $order=Order::find($id);
        if($order){

          $order_items=OrderItem::where('order_id',$order->id)->get();
            //check product srock before order approved
            foreach($order_items as $order_item){
              $product=Product::where('id', $order_item->product_id)->first();
                if($product->stock<=0){
                    return \response()->json($product->product_code.'- Stock out');
                }
                else if($product->stock < $order_item->quantity){
                    return \response()->json("this product ".$product->product_code.' Stock Available-'.$product->stock.'. But created quantity ' .$order_item->quantity);
                }
                else{
                    $product->stock=$product->stock - $order_item->quantity;
                    $product->save();
                }

            }
            $order->status=3;
            $order->approved_admin_id=session()->get('admin')['id'];
            $order->approved_date=Carbon::now();

            if($order->save()){
                return \response()->json([
                    'status'=>'SUCCESS',
                    'message'=>'Order was approved  successfully'
                ]);
            }
        }
    }
    public function pending($id){

        $order=Order::find($id);
        if($order){
            $order->status=2;
            $order->pending_admin_id=session()->get('admin')['id'];
            $order->pending_date=Carbon::now();

            if($order->save()){
                return \response()->json([
                    'status'=>'SUCCESS',
                    'message'=>'Order was pending  successfully'
                ]);
            }
        }
    }

    public function delivered(Request $request,$id){

        //  return $request->all();
        $order=Order::findOrFail($id);
        if($order->status!=4){
            return response()->json("order not shipment");
        }

        DB::transaction(function() use($request,$order){
            $order->status=5;
            $order->delivered_admin_id=session()->get('admin')['id'];
            $order->delivery_date=Carbon::now();
            $order->save();
            //when order delievered,then order amount is created at a new credit.....
            $total=$order->total - ($order->paid+$order->discount) + $order->shipping_cost;
            if($total > 0){
                $comment='Delievred Order. Order Amount BDT '.$total.' Order Invoice number is '.$order->invoice_no;
                $credit = new Credit();
                $credit->purpose = "Delievred Order";
                $credit->amount =( $order->total+$order->shipping_cost)-($order->paid+$order->discount);
                $credit->comment =$comment;
                $credit->date = date('Y-m-d');
                $credit->insert_admin_id=session()->get('admin')['id'];
                $credit->balance_id=$request->credit_in;
                $credit->save();

                //inserting balance add history
                $balance_is_exist = BalanceInsertAdmin::where('order_id',$order->id)->where('balance_id',$request->credit_in)->first();
                if(!empty($balance_is_exist)){
                    $balance_is_exist->amount= $balance_is_exist->amount +  $credit->amount;
                    $balance_is_exist->save();
                }else {
                    $balance_insert = new BalanceInsertAdmin();
                    $balance_insert->admin_id= session()->get('admin')['id'];
                    $balance_insert->balance_id= $request->credit_in;
                    $balance_insert->order_id= $order->id;
                    $balance_insert->amount= $credit->amount;
                    $balance_insert->save();
                 }
            }

        });

         return response()->json([
                      'status'=>'SUCCESS',
                     'message'=>'Order was delivered successfully'
                ]);

    }

       public function shipment($id){

            $order=Order::findOrFail($id);
            $order->status=4;
            $order->shipment_admin_id=session()->get('admin')['id'];
            $order->shippment_date=Carbon::now();
            $order->save();
             Order::sendShipmentMenssage($order);
             return \response()->json([
                    'status'=>'SUCCESS',
                    'message'=>'Order was shiped successfully'
                ]);
    }

    public function return($id){

        $order=Order::find($id);
        if($order){
            $details=OrderItem::where('order_id',$order->id)->get();
           if(count($details) > 0){
                foreach($details as $detail){
                $product=Product::where('id',$detail->product_id)->first();
                $product->stock=$product->stock+$detail->quantity;
                $product->save();
            }
           }

            $order->status=7;
            $order->return_admin_id=session()->get('admin')['id'];
            $order->return_date=Carbon::now();

            if($order->save()){

                $due=CustomerDue::where('sale_id',$order->invoice_no)->first();
                    if($due){
                        $due->status=1;
                        $due->save();
                }
                return \response()->json([
                'status'=>'SUCCESS',
                'message'=>'Order was return successfully'
            ]);
            }
        }
    }

    public function cancel($id){

        $order=Order::find($id);
        if($order){
            $details=OrderItem::where('order_id',$order->id)->get();
           if($order->status !=1 &&  $order->status!=2){
               foreach($details as $detail){
                $product=Product::where('id',$detail->product_id)->first();
                $product->stock=$product->stock+$detail->quantity;
                $product->save();
            }
           }

            $order->status=6;
            $order->cancel_admin_id=session()->get('admin')['id'];
            $order->cancel_date=Carbon::now();

            if($order->save()){
                return \response()->json([
                    'status'=>'SUCCESS',
                    'message'=>'Order was cancel successfully'
                ]);
            }
        }
    }

    public function OrderCoutierUpdate(Request $request,$id){

        $order=Order::find($id);
      //  return $request->all();
        if($order){
            $order->courier_id=$request->courier_id;
            $order->memo_no=$request->memo_no;
            if($order->save()){
                $courier=Courier::where('id',$order->courier_id)->first();
                return response()->json([
                    'status'=>'SUCCESS',
                    'message'=>'Courier Update Was Successfully',
                    'order'=>$order,
                    'courier'=>$courier
                ]);

            }

        }
    }


    public function OrderFilter(Request $request){

      // return $request->all();

        $orders='';
        $paginate=$request->item??10;
        if(!empty($request->start_date) && empty($request->end_date)){

            if($request->status!='all'){
                $orders=Order::whereDate('created_at','=',$request->start_date)
                               ->where('status',$request->status)
                              ->with(['customer','createAdmin','courier','reseller','OrderNote'])
                              ->paginate($paginate);
            }else{
                $orders=Order::whereDate('created_at','=',$request->start_date)
                              ->with(['customer','createAdmin','courier','reseller','OrderNote'])
                             ->paginate($paginate);
            }

        }
        if(!empty($request->end_date) && !empty($request->start_date)){

            if($request->status!='all'){
                $orders=Order::whereDate('created_at', '>=', $request->start_date)
                                ->whereDate('created_at', '<=', $request->end_date)
                                ->where('status',$request->status)
                                ->with(['customer','createAdmin','courier','reseller','OrderNote'])
                                ->paginate($paginate);
            }else{
                $orders=Order::whereDate('created_at', '>=', $request->start_date)
                                ->whereDate('created_at', '<=', $request->end_date)
                                ->with(['customer','createAdmin','courier','reseller','OrderNote'])
                                ->paginate($paginate);
            }

         }

        return response()->json([
            'status'=>'SUCCESS',
            'orders'=>$orders
        ]);

    }

    public function OrderStatusWise(Request $request){

      //  return $request->all();

        $paginate=$request->item ?? 20;
        $orders=Order::orderBy('id','DESC')->where('status',$request->status)->with(['customer','createAdmin','courier','OrderNote'])->paginate($paginate);

        return \response()->json([
            'status'=>'SUCCESS',
            'orders'=>$orders
        ]);

    }


    public function orderSearchStatusWise(Request $request,$search){


   //  return $request->all();

   if(strlen($search)==11){

    $orders = Order::where('customer_phone','like', '%' . $search . '%')
                    ->where('status',$request->status)
                    ->orderBy('id', 'DESC')
                    ->with(['customer','createAdmin','courier','reseller','OrderNote'])
                    ->paginate(30);

   }else{

    $orders = Order::where('invoice_no', 'like', '%' . $search . '%')
                    ->where('status',$request->status)
                    ->orderBy('id', 'DESC')
                   ->with(['customer','createAdmin','courier','reseller','OrderNote'])
                    ->paginate(30);

   }


        return response()->json([
                'status'=>'SUCCESS',
                'orders'=>$orders,
                'order_count'=> Order::orderCount(),
        ]);
    }
    public function orderSearch($search){

        $orders = Order::where('invoice_no', 'like', '%' . $search . '%')
                            ->orWhere('customer_phone','like', '%' . $search . '%')
                            ->orWhere('customer_name','like', '%' . $search . '%')
                            ->orderBy('id', 'DESC')
                            ->with(['customer','createAdmin','courier','OrderNote','orderItem.product'])
                            ->paginate(10);

              return response()->json([
                    'status'=>'SUCCESS',
                    'orders'=>$orders,
                    'order_count'=> Order::orderCount(),
                ]);
    }

    public function OrderFilterStatusWise(Request $request){

        $orders='';
        if(!empty($request->start_date) && empty($request->end_date)){

        $orders=Order::whereDate('created_at','=',$request->start_date)
                  ->with(['customer','createAdmin','courier','reseller'])
                  ->where('status',$request->status)->paginate(30);
        }
        if(!empty($request->end_date) && !empty($request->start_date)){
            $orders=Order::whereDate('created_at', '>=', $request->start_date)
                             ->whereDate('created_at', '<=', $request->end_date)
                            ->where('status',$request->status)
                            ->with(['customer','createAdmin','courier','reseller','OrderNote'])
                            ->paginate(30);
         }

        return response()->json([
            'status'=>'SUCCESS',
            'orders'=>$orders
        ]);

    }

    public function orderView($id){
        $order=Order::where('id',$id)->with(['customer','courier','approvedBy','orderBarcode','resellerOrderDetails'])->first();
        $order_items=OrderItem::where('order_id',$order->id)->with(['product.productVariant.variant.attribute','attribute','variant','product.productImage'])->get();

        return response()->json([
                 'status'=>'SUCCESS',
                 'order'=>$order,
                 'items'=>$order_items
         ]);
    }




    public function labelPrint($id){

      $order_id=explode(',',$id);
      $orders=Order::whereIn('id',$order_id)->get();
      return view('admin.pdf.print.labelPrint', \compact('orders'));

    }

    public function approvedAll($id){
         $order_id=explode(',',$id);
        $orders=Order::whereIn('id',$order_id)->get();
         foreach($orders as $order){


          $order_items=OrderItem::where('order_id',$order->id)->get();

            //check product srock before order approved
            foreach($order_items as $order_item){
              $product=Product::where('id', $order_item->product_id)->first();
                if($product->stock<=0){
                    return \response()->json($product->code.'- Stock out');
                }
                else if($product->stock < $order_item->quantity){
                    return \response()->json("this product ".$product->product_code.' Stock Available-'.$product->stock.'. But created quantity ' .$order_item->quantity);
                }else{
                    $product->stock=$product->stock-$order_item->quantity;
                    $product->save();
                }

            }


            $order->status=3;
            $order->approved_admin_id=session()->get('admin')['id'];
            $order->approved_date=Carbon::now();
            $order->save();

            return \response()->json([
                'status'=>"OK",

            ]);
        }

        return \response()->json('Order successfully approved');
    }

     public function pendingAll($id){
         $order_id=explode(',',$id);
        $orders=Order::whereIn('id',$order_id)->get();
        foreach($orders as $order){
            $order->status=2;
            $order->pending_admin_id=session()->get('admin')['id'];
            $order->pending_date=Carbon::now();
            $order->save();
        }

        return \response()->json('Order successfully pending');
    }

     public function shipmentAll($id){
         $order_id=explode(',',$id);
        $orders=Order::whereIn('id',$order_id)->get();
         foreach($orders as $order){

         if(!empty($order->courier_id) && !empty($order->memo_no)){
                $order->status=4;
                $order->shipment_admin_id=session()->get('admin')['id'];
                $order->shippment_date=Carbon::now();
                $order->save();

                //add customer due if paid amountt smaller then  total amount......
            //     if($order->paid < $order->total+$order->shipping_cost){
            //        $customer=Customer::where('phone',$order->customer_phone)->first();
            //         DB::table('customer_dues')->insert([
            //             'order_invoice_no'=>$order->invoice_no,
            //             'customer_mobile_no'=>$customer->phone,
            //             'customer_name'=>$customer->name,
            //             'due_type'=>'Order Due',
            //             'amount'=>( $order->total+$order->shipping_cost)-($order->paid+$order->discount),
            //         ]);
            //    }
           }else{
                return \response()->json('Invoice_no-'.$order->invoice_no.'- courier or memmo number not set');
            }
        }

        return \response()->json([
            'status'=>"OK",
            'message'=>'Order successfully shipment'
        ]);
    }

     public function deliveredAll($id){
        $order_id=explode(',',$id);
        $orders=Order::whereIn('id',$order_id)->get();
        foreach($orders as $order){

            if($order->status==5){
                 return \response()->json($order->invoice_no.'Order all ready elievred');
            }
            $order->status=5;
            $order->delivered_admin_id=session()->get('admin')['id'];
            $order->delivery_date=Carbon::now();
            $order->save();

            //when order delievered,then order amount is created at a new credit.....
            $total=$order->total-($order->paid+$order->discount)+$order->shipping_cost;
            $comment='Delievred Order. Order Amount BDT '.$total.' Order Invoice number is '.$order->invoice_no;
            $credit = new Credit();
            $credit->purpose = "Delivered Order";
            $credit->amount = ($order->total+$order->shipping_cost)-($order->paid+$order->discount);
            $credit->comment =$comment;
            $credit->date = date('Y-m-d');
            $credit->balance_id="Cash";
            $credit->insert_admin_id=session()->get('admin')['id'];
            $credit->save();

            //if order has dues....
            //remove dues when order delievred....
            $due=CustomerDue::where('sale_id',$order->invoice_no)->first();
            if($due){
                $due->status=1;
                $due->save();
            }

        }
         return \response()->json('Order successfully Delievred');
    }


     public function returnAll($id){

        $order_id=explode(',',$id);
        $orders=Order::whereIn('id',$order_id)->get();

        foreach($orders as $order){
            $order->status=7;
            $order->return_admin_id=session()->get('admin')['id'];
            $order->return_date=Carbon::now();
            $order->save();
             $details=OrderItem::where('order_id',$order->id)->get();

          //when order return,then update product stock
           if(count($details) > 0){
                foreach($details as $detail){
                $product=Product::where('id',$detail->product_id)->first();
                $product->stock=$product->stock+$detail->quantity;
                $product->save();
            }
        }


        }

        return \response()->json('Order successfully Returned');
    }

     public function cancellAll($id){
         $order_id=explode(',',$id);
         $orders=Order::whereIn('id',$order_id)->get();

        foreach($orders as $order){

            // when order cancel,then update product stock
             $details=OrderItem::where('order_id',$order->id)->get();
            if($order->status !=1 &&  $order->status !=2){
                foreach($details as $detail){
                $product=Product::where('id',$detail->product_id)->first();
                $product->stock=$product->stock+$detail->quantity;
                $product->save();
                }
            }
            $order->status=6;
            $order->cancel_admin_id=session()->get('admin')['id'];
            $order->cancel_date=Carbon::now();
            $order->save();


        }

        return \response()->json('Order successfully Canceld');
    }

    public function invoicePrint($id){
        $order_id=explode(',',$id);
        $orders=Order::whereIn('id',$order_id)->get();

        foreach ($orders as $order) {
            $order->print_status = 1 ;
            $order->save();
        }

        return view('admin.pdf.print.invoicePrint', compact('orders'));
    }



    public function officeSaleInvoicePrint($id){

         $order = Sale::with('SaleItems')->findOrFail($id);
         return view('admin.pdf.print.saleInvoice', compact('order'));
    }


    public function comment(Request $request){

        $order=Order::where('id',$request->order_id)->first();
        $order->comment=$request->comment;
        $order->save();
        return response()->json([
            "status" => "OK",
            "message" => $order->comment."  is added as comment ",
        ]);

    }

    public function updateResellerCommison(Request $request,$id){

        return $request->all();
       $reseller_order=ResellerOrderDetails::where('order_id',$id)->first();
       $reseller_order->total_amount=$request->commission;
        if($reseller_order->save()){
             return response()->json('whole sale');
      }
  }

  public function returnItem($id){
    $item=OrderItem::find($id);

    if($item){
        if($item->status==2){
            return response()->json('Item Already Returned');
        }
        $item->status=2;
        if($item->save()){
            //update order
            $order=Order::where('id',$item->order_id)->first();
            $order->total=$order->total-$item->total;
            $order->save();

            //update product stock
            $product=Product::where('id',$item->product_id)->first();
            $product->stock=$product->stock+$item->quantity;
            $product->save();

            return \response()->json([
                'success'=>"OK",
                'message'=>"Order Was Update"
            ]);

        }
    }else{
        return response()->json('Item Not Found');
    }
  }


    public function searchCustomer($number){

     $customer=Order::where('customer_phone',$number)->select('city_id','customer_name','customer_phone','customer_address')->first();
      if(!empty($customer)){
       return \response()->json([
             'message'=>"customer already register.",
             'customer'=>$customer
       ]);
      }else{
        return \response()->json([
            'message'=>"new customer for us",
          ]);
      }

    }


    public function searchOfficeSaleCustomer($number){

     $customer=Sale::where('mobile_no',$number)->select('name','mobile_no','address')->first();
      if(!empty($customer)){
       return \response()->json([
             'message'=>"customer already register.",
             'customer'=>$customer
       ]);
      }else{
        return \response()->json([
            'message'=>"new customer for us",
          ]);
      }

    }







    public function OrderNoteList($id){
           $notes = OrderNote::where('order_id',$id)->orderBy('id','desc')->get();
           return response()->json([
              'status' => "OK",
              'notes' => $notes
          ]);
    }

    public function StoreOrderNote(Request $request){

         $validatedData =$request->validate([
             'order_id' => 'required',
             'note' => 'required'
         ]);

          $note = new OrderNote();
          $note->order_id= $request->order_id;
          $note->note= $request->note;
          $note->admin_name= session()->get('admin')['name'];
          $note->save();
          return response()->json([
              'status' => "OK",
              'message' => "added successfully"
          ]);

    }


    public function orderStatistic(){

            return response()->json([
                'status'=>'OK',
                'order_count'=> Order::orderCount(),
            ]);
    }




    public function exportOrderSelectedItem($id){

        $order_id = explode(',', $id);
        $orders = Order::whereIn('id', $order_id)->get();
        $filename = 'order-export-' . date('d-m-Y') . '-' . time() . '.csv';
        $file = fopen($filename, "w");

        fputcsv($file, array(
            'ActualAmount' => "ActualAmount",
            'CollectionAmount' => 'CollectionAmount',
            'CustomerMobile' => 'CustomerMobile',
            'District' => 'District',
            'CustomerAddress' => 'CustomerAddress',
            'CustomerName' => "CustomerName",
            'CollectionName' => "CollectionName",
        ));

        foreach ($orders as $k => $line) {

            $city = City::where('id', $line->city_id)->first();
            $sub_city = SubCity::where('id', $line->sub_city_id)->first();
            $g_total = (($line->total - $line->discount - $line->paid) + $line->shipping_cost);
            $address=$line->customer_address;
            if(!empty($sub_city->name)){
                $address.=','.$sub_city->name;
            }
            if(!empty($city->name)){
                $address.=','.$city->name;
            }
            fputcsv($file, array(
                'ActualAmount' =>  $line->total - $line->discount,
                'CollectionAmount' =>  $g_total,
                'CustomerMobile' => $line->customer_phone,
                'District' => $city->name ?? "",
                'CustomerAddress' =>$address ,
                'CustomerName' => $line->customer_name,
                'CollectionName' => $line->invoice_no
            ));
        }
        fclose($file);
        return Response::download('./' . $filename);

    }






}
