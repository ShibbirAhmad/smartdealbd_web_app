<?php

namespace App\Http\Controllers\Frontend;

use App\User;
use Exception;
use Carbon\Carbon;
use App\Models\Team;
use App\Models\Offer;
use App\Models\Order;
use App\Models\Banner;
use App\Models\Coupon;
use App\Models\Slider;
use App\Models\Product;
use App\Models\Category;
use App\Models\OrderItem;
use App\Models\SubCategory;
use App\Models\ProductImage;
use App\Models\SaleCampaign;
use Illuminate\Http\Request;
use App\Models\FooterSetting;
use App\Models\GeneralSetting;
use App\Models\ProductVariant;
use App\Models\SubSubCategory;
use App\Models\AboutAndContact;
use App\Models\Category_slider;
use App\Models\OccasionProduct;
use App\Models\OtpVerification;
use App\Models\SeasonalProduct;
use App\Models\ProductAttribute;
use App\Models\BuyOneGetOneOffer;
use App\Models\BackgroundAndColor;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\OrderShipmentAndReturnPolicy;

class HomeController extends Controller
{

    public  function __construct(Request $request)
    {
        if(!$request->ajax()){
       //   return abort(404);
        }
    }
    public function  get_team_members(){
            $team = Team::where('status',1)->orderBy('position','ASC')->get();
            return response()->json([
                'status' => "OK",
                'team'  => $team ,
        ]);
    }
    public function productIdWise(Request $request,$id){
      $product=Product::where('id',$id)->with(['productImage','productAttribute.attribute','productVariant.variant'])->first();
        return response()->json([
            'product'=>$product
        ]);
    }
       public function products(Request $request){

        $categories =Category::where('status',1)->orderBy('position','asc')->paginate(3);

        foreach($categories as $category){
             $category->{'products'}=Product::where('category_id',$category->id)
                                           ->where('status',1)
                                           ->select('id','name','thumbnail_img','price','sale_price','slug','discount')
                                          ->get()
                                          ->take(10);
        }
         return response()->json($categories);
    }

    public function flashSale(){
        $flash_sale_products=Product::where(['status'=>1,'product_placement'=>1])->orderBy('product_position','DESC')->get();
        return \response()->json($flash_sale_products);
    }


    public function product(Request $request,$slug)
    {
        $product = Product::where('slug', $slug)->with(['productAttribute.attribute','productVariant.variant'])->first();
       if ($product) {
          return response()->json([
                'status' => "SUCCESS",
                'product' => $product,
              ]);
        }
    }

    public function productImage($slug){

      $product = Product::where('slug', $slug)->first();
      $product_images = ProductImage::where('product_id',$product->id)
                                        ->select('product_image')
                                        ->get();

        return response()->json(['product_images' => $product_images]);
    }

    public function relatedProduct(Request $request){
     $product_find=Product::where('slug',$request->product_slug)->first();
     $products=Product::where('sub_sub_category_id',$product_find->sub_sub_category_id)->where('id','!=',$product_find->id)->paginate(5);
    return response()->json($products);
 }

    public function category()
    {
       $categories = Category::orderBy('id', 'ASC')->where(['status' => 1])->with(['subCategory.SubSubCategory'])->take(11)->get();
        return response()->json([
            'status' => 'SUCCESS',
            'categories' => $categories
        ]);
    }

    public function categoryWiseProduct(Request $request)
    {
      $category=Category::where('slug',$request->slug)->first();
      $products=Product::where('category_id',$category->id)->paginate(12);
      return response()->json($products);
    }

    public function categoryWiseProductPriceFilter(Request $request){

        $category=Category::where('slug',$request->slug)->first();
        $products=Product::where('category_id',$category->id)->where('price','>=',$request->min_price)->where('price','<=',$request->max_price)->paginate(20);
        return response()->json([
            "status" => "OK",
            "products" => $products ,
        ]);
    }

    public function slider()
    {
         $slider = Slider::where('status',1)->where('position',1)->get();
         $best_selling_product_id=OrderItem::select('product_id',DB::raw('count(*) as total'))
                                                ->groupBy('product_id')
                                                ->orderBy('total','desc')
                                                ->take(12)
                                                ->pluck('product_id');
        $best_selling_produtcs =Product::where('status',1)->WhereIn('id',$best_selling_product_id)->get();
        $banner=Banner::latest()->first();
        return response()->json([
            'status' => 'SUCCESS',
             'sliders' => $slider,
             'banner' => $banner,
            'best_selling_produtcs'=>$best_selling_produtcs,
        ]);

    }

 //function for display category slider
    public  function display_category_slider(){
         $category_sliders = Category_slider::where('page_position',1)->where('status',1)->orderBy('id','DESC')->get();
            return response()->json([
                    "status" => "OK",
                    "category_sliders" => $category_sliders ,
            ]);
    }

    //function for display sub category slider
    public  function display_sub_category_slider(){
        $sub_category_sliders = Category_slider::where('page_position',2)->where('status',1)->orderBy('id','DESC')->get();
        return response()->json([
                "status" => "OK",
                "sub_category_sliders" => $sub_category_sliders ,
        ]);
    }

     //function for display sub sub category slider
     public   function display_sub_sub_category_slider(){
        $sub_sub_category_sliders = Category_slider::where('page_position',3)->where('status',1)->orderBy('id','DESC')->get();
        return response()->json([
                "status" => "OK",
                "sub_sub_category_sliders" => $sub_sub_category_sliders ,
        ]);
    }

     public function offers(){
        $offers = Offer::where('status', 1)->orderBY('id','DESC')->take(12)->get();
        return response()->json([
            'status' => 'SUCCESS',
            'offers' => $offers
        ]);
    }

    public function subCategory($slug){
        $sub_category=SubCategory::where('slug',$slug)->first();
        $sub_categories = SubCategory::orderBy('id', 'DESC')->where('status',1)->where('category_id',$sub_category->category_id)->get();
        return response()->json([
            'status' => 'SUCCESS',
            'sub_categories' => $sub_categories
        ]);
    }

    public function subCategoryWiseProduct(Request $request){
         $sub_category=SubCategory::where('slug',$request->slug)->first();
        $products=Product::where('sub_category_id',$sub_category->id)->paginate(8);
        return response()->json($products);
    }

    public function SearchProduct($search){
        $products=Product::where('name','like', '%' . $search . '%')
                          ->orWhere('product_code','like', '%' . $search . '%')
                          ->orWhere('details','like', '%' . $search . '%')
                          ->where('status',1)
                         ->get();
        return \response()->json($products);

    }

    public function subSubCategory($slug){

        $sub_sub_category=SubSubCategory::where('slug',$slug)->first();
        $sub_sub_categories = SubSubCategory::orderBy('id', 'DESC')->where('status',1)->where('subcategory_id',$sub_sub_category->subcategory_id)->get();
        return response()->json([
            'status' => 'SUCCESS',
            'sub_sub_categories' => $sub_sub_categories
        ]);
    }
    public function subSubCategoryWiseProduct(Request $request){

        $sub_sub_category=SubSubCategory::where('slug',$request->slug)->first();
        $products=Product::where('sub_sub_category_id',$sub_sub_category->id)->where('status',1)->paginate(8);
        return response()->json($products);
    }


//function for sort via price
   public  function sort_by_price(Request $request){
        $orderBy='ASC';
            if($request->sort_value==2){
                $orderBy='DESC';
            }
            $category=Category::where('slug',$request->slug)->first();
            $products=Product::where('category_id',$category->id)->orderBy('price',$orderBy)->where('status',1)->get();
            return response()->json([
                    "products" => $products ,
            ]);

   }

   //function for sub_category_sort_by_price
    public  function sub_category_sort_by_price(Request $request){

        $orderBy='ASC';
        if($request->sort_value==2){
            $orderBy='DESC';
        }
        $sub_category=SubCategory::where('slug',$request->slug)->first();
        $products=Product::where('sub_category_id',$sub_category->id)->orderBy('price',$orderBy)->where('status',1)->get();
        return response()->json([
                "products" => $products ,
        ]);

     }

     //function for sub_sub_category_sort_by_price
    public  function sub_sub_category_sort_by_price(Request $request){

        $orderBy='ASC';
        if($request->sort_value==2){
            $orderBy='DESC';
        }
        $sub_sub_category=SubSubCategory::where('slug',$request->slug)->first();
        $products=Product::where('sub_sub_category_id',$sub_sub_category->id)->orderBy('price',$orderBy)->where('status',1)->get();
        return response()->json([
            "products" => $products
        ]);

     }

      public function get_quick_view_product($id){

        $product= Product::where('id',$id)->with(['productAttribute.attribute','productVariant.variant'])->first();
        $recommended_products=Product::where('sub_category_id',$product->sub_category_id)->where('id','!=',$product->id)->where('status',1)
        ->with(['productAttribute.attribute','productVariant.variant'])
        ->inRandomOrder()->take(24)->get();
              return  response()->json([
                  "status" => "OK",
                  "product" => $product ,
                  'recommended_products'=>$recommended_products
              ]);
      }


      public function SendOtp(Request $request){


       // return $request->all();

        $validatedData = $request->validate([
            'mobile_no' => 'required|digits:11 '
        ]);

        $code=random_int(3333, 9999);
        $otp=new OtpVerification();
        $otp->mobile_no=$request->mobile_no;
        $otp->code=Hash::make($code);
        if($otp->save()){
            $this->sendOtpCode ($otp->mobile_no,$code);
             return \response()->json("Send one time pin on your mobile number");

      }
    }



 public function sendOtpCode($number,$code){

     $api_key = "C2008151606a05deddbd63.40969555";
        $contacts =$number;
        $senderid = '8809612446732';
        $sms = 'Dear Sir, '. 'Your one time pin code is '.$code.'. It will expire in 3 minute';
        $URL = "http://bulk.fmsms.biz/smsapi?api_key=" . urlencode($api_key) . "&type=text&contacts=" . urlencode($contacts) . "&senderid=" . urlencode($senderid) . "&msg=" . urlencode($sms);
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $URL);
        curl_setopt($ch, CURLOPT_HEADER, 0);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_POST, 0);
        try {
            $output = $content = curl_exec($ch);
          //  print_r($output);
        } catch (Exception $ex) {
           return back();
        }
        return $output;
            return \response()->json($code);
        }


 public function verifyCodeOtp(Request $request)

{
     $validatedData = $request->validate([
         'verify_code' => 'required '
     ]);

   //  return $request->all();
    $otp=OtpVerification::where('mobile_no',$request->mobile_no)->latest()->first();
     $to_time = strtotime(Carbon::now()->format('Y-m-d g:i:s'));
     $from_time = strtotime(Carbon::parse($otp->created_at)->format('Y-m-d g:i:s'));

       $expire_time= round(abs($to_time - $from_time) / 60,2);



     if (Hash::check($request->verify_code, $otp->code)) {
           if($expire_time > 5){
               return \response()->json('Code Time Expired');
             }else{
            $user=User::where('mobile_no',$request->mobile_no)->first();
            if(empty($user)){
                $user=new User();
                $user->mobile_no=$request->mobile_no;
                $user->password=Hash::make($request->mobile_no);
                $user->name=null;
                $user->email=null;
                $user->city_id=null;
                $user->address=null;
                $user->status=1;
                $user->save();
           }
            Auth::loginUsingId($user->id);
            return \response()->json([
                'status'=>"OK",
                'message'=> 'Your number is verified',
                'user'=>Auth::user()
             ]);

             }
     }else{

        return \response()->json('Code Dose Not Match');
     }

}


    public function get_general_setting(){

        $general_setting = GeneralSetting::latest()->first();
        return response()->json([
             'general_setting' => $general_setting,
        ]);

    }


  public function get_footer_setting(){

      $footer_setting = FooterSetting::latest()->first();
      return response()->json([
           'footer_setting' => $footer_setting,
      ]);


    }


  public function get_theme_setting(){

      $theme_setting = BackgroundAndColor::latest()->first();
      return response()->json([
           'theme_setting' => $theme_setting,
      ]);


   }





   public function saleCampaignProducts(){
      $sale_campaign=SaleCampaign::where('status',1)->orderBy('order_by','ASC')->with('campaign_products.productImage')->get();

      return response()->json([
          'status' => 'OK',
          'sale_campaign' => $sale_campaign,
      ]);
  }



    public function get_about_and_contact() {

        $setting = AboutAndContact::latest()->take(1)->first();
          if ($setting) {
              return response()->json([
                  "status" => "OK",
                  "setting" => $setting ,
              ]);
          }
       }




    public function get_order_shipment_return() {

        $setting = OrderShipmentAndReturnPolicy::latest()->take(1)->first();
        if ($setting) {
            return response()->json([
                "status" => "OK",
                "setting" => $setting ,
            ]);
        }
    }


    public function publish_buy_one_get_one_campaign(){

                $buy_get=BuyOneGetOneOffer::latest()->first();
                $buy_get_p=Product::where('product_code',$buy_get->product_code)->first();

                    return response()->json([
                        'status' => "OK",
                        'buy_get' => $buy_get,
                        'buy_get_p' => $buy_get_p,
                    ]);

        }




 public function ApplyCoupon(Request $request){


    $coupon=Coupon::where('code',$request->coupoon_code)->first();

    $curentDate=date('Y-m-d');

    if(empty($coupon)){
        return response()->json('Please Give A Valid Coupon Code');
    }

    if($coupon->status != 1){
        return response()->json('This Coupon Not Active');
     }

  //  return $coupon->start_date;
    if($coupon->start_date <= $curentDate){
         if($coupon->expire_date >= $curentDate){

            return response()->json([
                 'success' =>"OK",
                'coupon' =>$coupon,
                'message'=>"Coupon Was Successfully Applied"
            ]);

           }else{
            return response()->json("This Coupon Already Exipird");
         }
       }else{
        return response()->json('This Coupon Start From '. $coupon->start_date);
    }

    return response()->json("Some Thing Wrong");
}



    public function onlyCategories(){
          $categories = Category::where('status',1)->get();
          return response()->json([ 'categories' => $categories ]);
    }


}


