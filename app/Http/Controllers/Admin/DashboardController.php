<?php

namespace App\Http\Controllers\Admin;

use Carbon\Carbon;
use App\Models\Debit;
use App\Models\Order;
use App\Models\Credit;
use App\Models\Balance;
use App\Models\Product;
use App\Models\Purchase;
use App\Models\SubCategory;
use App\Models\Purchaseitem;
use Illuminate\Http\Request;
use App\Models\SubSubCategory;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

class DashboardController extends Controller
{
    public function __construct()
    {
        $this->middleware('admin');
    }

    public function index(){

        $order=Order::orderCount();
        $balance=Balance::with('today_credit_balance','total_credit_balance','today_debit_balance','total_debit_balance')->get();

        return response()->json([
            'orders'=>$order,
            'balance'=>$balance,
        ]);
    }



    public function dashboradData(){

        $admin_order=Order::adminOrderAnalysis();
        $topSellinProductToday=Order::topSellingProductToday();

        $analysis=Order::analysis();
        $due=Order::due();

         $stock=array();
         $stock['total_price']=0;
         $products=Product::where('stock','>',0)->get();
         $stock['total_quantity']=$products->sum('stock');

       foreach($products as $product){
            $product_purchase_item=Purchaseitem::where('product_id',$product->id)->get();
             $price=0;

            foreach($product_purchase_item as $item){
                $price+=$item->price*$item->stock;

            }
            if($product_purchase_item->sum('stock')>0){
                $stock['total_price'] += ($price/$product_purchase_item->sum('stock'))*$product->stock;
            }

      }


       return response()->json([
                'stock'=>$stock,
                'admin_order'=>$admin_order,
                'top_selling_products_today'=>$topSellinProductToday,
                'due'=>$due,
                'analysis'=>$analysis
            ]);


    }





}
