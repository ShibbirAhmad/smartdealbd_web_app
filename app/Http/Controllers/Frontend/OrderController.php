<?php

namespace App\Http\Controllers\Frontend;


use Picqer;
use App\User;
use App\Models\Order;
use GuzzleHttp\Client;
use App\Models\Product;
use App\Models\Customer;
use App\Models\OrderItem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Gloudemans\Shoppingcart\Facades\Cart;


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
        ]);

        DB::transaction(function() use($request){

               $total=Cart::total();
               $discount=0 ;
                if( $request->coupon_discount > 0  ){
                    $total_dicount= intval($request->coupon_discount) ;
                    $total=$total - $total_dicount;
                    $discount += $total_dicount ;
                }
                //save the order
                $id = Order::max('id') ?? 0;
                $invoice = rand(111,999) + $id;
                $order=new Order();
                $order->host_name=$request->getHttpHost();
                $order->customer_name=$request->name;
                $order->customer_phone=$request->mobile_no;
                $order->customer_address=$request->address;
                $order->invoice_no=$invoice;
                $order->order_type=1;
                $order->city_id=$request->city ;
                $order->shipping_cost=$request->shipping_cost ?? 0;
                $order->discount=$discount ;
                $order->paid=$request->paid ?? 0;
                $order->total=$total;
                $order->status=1;
                $order->sub_city_id=$request->sub_city ?? 0;

               if ($order->save()) { 
                foreach(Cart::content() as $product){
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
             }
            //sending message
             $invoice=$order->invoice_no;
             $name=$request->name;
             $number=$order->customer_phone;
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
