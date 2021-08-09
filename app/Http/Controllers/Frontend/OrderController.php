<?php

namespace App\Http\Controllers\Frontend;

use Cart;
use Picqer;
use App\User;
use App\Models\Order;
use App\Models\Product;
use App\Models\Customer;
use App\Models\OrderItem;
use Illuminate\Support\Str;
use App\Models\OrderBarcode;
use Illuminate\Http\Request;
use App\Models\CustomerWallet;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use GuzzleHttp\Client;


class OrderController extends Controller
{

    public function __construct(Request $request)
    {
        if(!$request->ajax()){
            return abort(404);
        }

    }
    public function checkout(Request $request){
     //   return $request->all();
        $validatedData = $request->validate([
            'mobile_no' => 'required|digits:11',
            'name' => 'required ',
            'address' => 'required',
            'city' => 'required',
            'sub_city' => 'required',
        ]);

        DB::transaction(function() use($request){

               $total=Cart::total();
               $discount=0 ;
                if( $request->coupon_discount > 0 || $request->premium_member_discount > 0 ){
                    $total_dicount= intval($request->premium_member_discount) + intval($request->coupon_discount) ;
                    $total=$total - $total_dicount;
                    $discount += $total_dicount ;
                }
                //save the order
                $id = Order::max('id') ?? 0;
                $invoice = 100 + $id;
                $order=new Order();
                $order->customer_name=$request->name;
                $order->cutomer_phone=$request->mobile_no;
                $order->cutomer_address=$request->address;
                $order->invoice_no=$invoice;
                $order->order_type=1;
                $order->city_id=$request->city;
                $order->shipping_cost=$request->shipping_cost ?? 0;
                $order->discount=$discount ;
                $order->paid=$request->paid ?? 0;
                $order->total=$total;
                $order->status=1;
                $order->sub_city_id=$request->sub_city;
                $order->save();

                foreach(Cart::content() as $product){
                //update product stock
                $product_stock=Product::where('id',$product->id)->first();
                $product_stock->stock=$product_stock->stock-$product->qty;
                $product_stock->save();
                //inserting order items
                $details=new OrderItem();
                $details->order_id=$order->id;
                $details->product_id=$product->id;
                $details->price=$product->price;
                $details->quantity=$product->qty;
                $details->attribute_id=$product->options->attribute_id??null;
                $details->variant_id=$product->options->variant_id??null;
                $details->total=$product->qty*$product->price;
                $details->save();
                }
            //sending message
             $invoice=$order->invoice_no;
             $name=$request->name;
             $number=$order->cutomer_phone;
            //  Order::SendMessageCustomer($number,$name,$invoice);
             Cart::destroy() ;
        });
             return \response()->json([
                'status'=>'SUCCESS',
                'message'=>'Order was place successfully',
                 'order_id' => Order::max('id') ,
            ]);



    }






// end online payment transaction

    public function onlinePayment($order_id) {

        $order=Order::findOrFail($order_id);
        $customer=Customer::where('id',$order->customer_id)->first();

        $name = $customer->name;
        $phone =$order->cutomer_phone;
        $amount = ( ( $order->total + $order->shipping_cost ) - $order->discount  ) ;
        $trnxId = 'trnx_' . Str::uuid(); // must be unique

        $client = new \GuzzleHttp\Client();
        $response = $client->request('POST', 'https://api.sheba.xyz/v1/ecom-payment/initiate', [
            'headers' => [
                'client-id' => "281465963",
                'client-secret' => "CkXsLasMTxanu4dm6WOTdmgzqHxvtFGpi3D5kosqsyxun90rbNzXT1hKi9ZKlA8n6twGIoQSz343CR4EIzCSG8vCFETgnA6jbVNvg9JeHQiansaFB6RtptAQ",
            ],
            'form_params' => [
                'customer_name' => $name,
                'customer_mobile' => $phone,
                'amount' => $amount,
                'transaction_id' => $trnxId,
                'success_url' => 'https://madinafashion.com.bd/online/payment/success', // success url
                'fail_url' => 'https://madinafashion.com.bd/online/payment/failed', // failed url
            ],
        ]);

      //  echo $response->getStatusCode(); // 200
     //   echo $response->getHeaderLine('content-type'); // 'application/json; charset=utf8'
        return $response->getBody(); // '{"id": 1420053, "name": "guzzle", ...}'

         session()->put('order_id', $order_id);

    }



    public function paymentSuccess(){
       $order_id=session()->get('order_id');
       $order=Order::findOrFail($order_id);
       if(!$order){
        return "Sorry!! Error Establish";
       }else{

         $order->paid=( ( $order->total + $order->shipping_cost) - $order->discount ) ;
         $order->save();
            session()->flush('order_id');
            return view('frontend.success');
       }

    }


    public  function paymentFailed(){


    }


// end online payment transaction






    public function orderList(){

       $user=Auth::user();

       $customer=Customer::where('phone',$user->mobile_no)->first();
        if($customer){
            $orders=Order::where('customer_id',$customer->id)->orderBy('id','desc')->paginate(10);
            return response()->json([
                'status'=>'SUCCESS',
                'orders'=>$orders
            ]);
        }
    }


    public function user_order_details($id){

          $order =  Order::findOrFail($id);
          $order_items=OrderItem::where('order_id',$order->id)->with(['product.productVariant.variant.attribute','attribute','variant'])->get();

          return response()->json([
            'status'=>'SUCCESS',
            'order'=>$order,
            'items'=>$order_items
        ]);
    }




    public function customer_invoice_print($id){

           $order_id = explode(',',$id) ;
           $orders = Order::whereIn('id',$order_id)->get();
           return view('frontend.pdf.invoicePrint', \compact('orders'));
    }

}
