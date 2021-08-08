<?php

namespace App\Http\Controllers\Frontend;

use Cart;
use App\User;
use App\Models\City;
use App\Models\Order;
use App\Models\Product;
use App\Models\Customer;
use Illuminate\Http\Request;
use App\Models\CustomerWallet;
use App\Models\DiscountMembership;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use phpDocumentor\Reflection\Types\Self_;

class AuthController extends Controller
{


    public function register(Request $request){

        $validatedData = $request->validate([
            'mobile_no' => 'required|digits:11|unique:users',
            'name' => 'required ',
            'password' => 'required|min:6',
        ]);

        $user=new User();
        $user->name=$request->name;
        $user->mobile_no=$request->mobile_no;
        $user->password=Hash::make($request->password);
        $user->status=1;
        if($user->save()){

            //make login user
            Auth::attempt(['mobile_no' => $request->mobile_no, 'password' => $request->password,'status'=>1]);
            return response()->json([
                'status'=>'SUCCESS',
                'message'=>'Thank you for join with us. Enjoy your online shopping',
                'user'=>Auth::user(),
                'token'=>$user->password
            ]);

        }


    }

     //function for password reset
     public function send_password_reset_code(Request $request){

            $request->validate(['email' => 'required|email']);

                $status = Password::sendResetLink(
                    $request->only('email')
                );
     }

    public function login(Request $request){

        $validatedData = $request->validate([
            'mobile_no' => 'required|digits:11',
            'password' => 'required',
        ]);

        if (Auth::attempt(['mobile_no' => $request->mobile_no, 'password' => $request->password,'status'=>1])) {
          return response()->json([
              'status'=>'SUCCESS',
              'message'=>'Login successfully',
              'user'=>Auth::user(),
              'token'=>$request->password
          ]);
        }

    }


    public function chekAuthUser(){
        if(Auth::user()){

            $user_id=Auth::user()->id;
            $customer_wallet=CustomerWallet::where('user_id',$user_id)->first();

            //colleting customer type and his purchase history
            $custom_member=DiscountMembership::where('customer_id',$user_id)->first();
            $member_type=$custom_member ? $custom_member->type : "" ;
            if (empty($member_type)) {
              $total_purchase=Order::where('customer_id',$user_id)->where('order_type',1)->sum('paid');
                $total=intval($total_purchase) ;
                if ( $total > 4999 && $total < 9999 ) {
                    $member_type="silver";
                }elseif ( $total > 9999 && $total < 15999) {
                    $member_type="gold";
                }elseif ( $total > 15999 ) {
                    $member_type="platinum";
                }
            }

            //set member_discount of member
            $member_discount=0 ;
            if ($member_type == "silver") {
               $member_discount=5 ;
            }elseif ($member_type == "gold") {
               $member_discount=10 ;
            }elseif ($member_type == "platinum") {
               $member_discount=15 ;
            }else {
                $member_discount=0 ;
             }

            //get cart product item and checking if already have discount in this products
            $product_discount=0;
            foreach (Cart::content() as $cart_p) {
                    $product=Product::where('id',$cart_p->id)->first();
                    if ($product->discount > 0) {
                        $product_discount += $product->discount ;
                    }
            }



            return response()->json([
                'status'=>'AUTHORIZED',
                'message'=>'you are login now',
                'user'=>Auth::user(),
                'customer_wallet'=> $customer_wallet,
                'member_type'=> $member_type,
                'member_discount'=> $member_discount,
                'product_discount'=> $product_discount,
            ]);
        }else{
            return response()->json([
                'status'=>'UNAUTHORIZED',
                'message'=>'you are not login'
            ]);

        }
    }

    public function logout(){


        if(Auth::logout()){

            return response()->json([
                'status'=>'SUCCESS',
                'message'=>'Log out was successfully'
            ]);

        }
    }


    public function userProfileUpdate(Request $request){

     //  return $request->all() ;
             $validatedData = $request->validate([
            'name' => 'required',
            'email' => 'required|unique:users,email,'.Auth::user()->id,
            'mobile_no' => 'required|unique:users,mobile_no,'.Auth::user()->id,
            'address' => 'required',
            'city'=>'required',

        ]);

        $user=Auth::user();
        $user->name=$request->name;
        $user->email=$request->email;
        $user->mobile_no=$request->mobile_no;
        $user->address=$request->address;
        $user->city_id=$request->city;

        if ($request->hasFile('image')) {
        //return "yes";
            $file_path = $request->file('image')->store('images/user','public');
            $user->image=$file_path ;

      }
        if($user->save()){
            $customer=Customer::where('phone',$user->mobile_no)->first();
             if($customer){
                $customer->name=$request->name;
                $customer->phone=$request->mobile_no;
                $customer->address=$request->address;
                $customer->city_id=$request->city;
                $customer->save();
            }
         }
     return response()->json([
            'status'=>'SUCCESS',
            'message'=>'your profile was update successfully',
            'user'=>$user
        ]);
  }
     public function updatePassword(Request $request){

        $validatedData = $request->validate([
            'old_password' => 'required ',
            'new_password' => 'required',

        ]);

        $before_update_user=Auth::user();

        $user=User::where('mobile_no',$before_update_user->mobile_no)->first();
        $user_current_password=$user->password;

        if (Hash::check($request->old_password,$user_current_password)) {
            if($request->new_password==$request->old_password){
                return response()->json([
                    "message" => "current password and new password can't be same ",
                ]);
            }else{
                $user->password=Hash::make($request->new_password);
                    if ($user->save()) {

                        return response()->json([ "success" => "OK", "message" => "password changed successfully" ]);
                    }
            }
         }else{
             return response()->json([
                "message" => "current password is incorrect! ",
              ]);
         }
    }

    public function resetCode(Request $request){


        $validatedData = $request->validate([
            'mobile_no' => 'required|digits:11',
            ]);

          $user=User::where('mobile_no',$request->mobile_no)->first();
        if(empty($user)){
            return response()->json([
                'status'=>"ERROR",
                'message'=>"The mobile number does not match our records"
            ]);
       }else{
            $code=rand(000000,999999);
            DB::table('password_resets')->insert([
                'mobile_no'=>$request->mobile_no,
                'token'=>Hash::make($code)
            ]);
            User::SendUserPasswordResetCode($request->mobile_no,$code);

            return response()->json([
                'status'=>"SUCCESS",
                'message'=>"Send verification code on your mobile"
            ]);
    }
}

public function codeVerify(Request $request, $mobile_no){

     $validatedData = $request->validate([
     ]);

     $mobile_no=DB::table('password_resets')->where('mobile_no',$mobile_no)->orderBy('id','DESC')->first();
     if(!empty($mobile_no)){
        if (Hash::check($request->code, $mobile_no->token)) {
           return response()->json([
                'status'=>"SUCCESS",
                'message'=>"Code Match"
            ]);
        }else{
             return response()->json([
                'status'=>"ERROR",
                'message'=>"Code Matching Error"
            ]);
        }
     }else{
          return response()->json([
                'status'=>"ERROR",
                'message'=>"Code Matching Error"
            ]);
     }

}

public function ResetPassword(Request $request,$mobile_no){

    $user=User::where('mobile_no',$request->mobile_no)->first();
    if(!empty($user)){
        $user->password=Hash::make($request->password);
        if($user->save()){
            return response()->json([
                'status'=>"SUCCESS",
                'message'=>"Passwrod update successfully"
            ]);
        }else{
             return response()->json([
                'status'=>"ERROR",
                'message'=>"Error establish"
            ]);
        }
    }
    else{
        return response()->json([
            'status'=>"ERROR",
            'message'=>"Error estblish"
        ]);
    }

}

public function user_set_new_password(Request $request){

    $validatedData = $request->validate([
        'new_password' => 'required ',
        'retype_password' => 'required',

    ]);

    $before_update_user=Auth::user();

   return  $user=User::where('id',Auth::user()->id)->first();

        if($request->new_password==$request->retype_password){
            $user->password=Hash::make($request->new_password);
            if ($user->save()) {
                return response()->json([ "success" => "OK", "message" => "password setup successfully" ]);
            }
            }else{
                return response()->json([ "success" => "FAIL", "message" => "password not matched" ]);
            }

    }

}
