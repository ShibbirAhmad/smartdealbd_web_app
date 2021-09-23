<?php

namespace App\Http\Controllers\Admin;

use Carbon\Carbon;
use App\Models\Admin;
use App\Models\Order;
use App\Models\Balance;
use App\Models\Product;
use App\Models\Purchaseitem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Models\BalanceInsertAdmin;

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



    public function BalanceInsertHistory(){

         $admins = Admin::where('status',1)->select('id','name','image')->get();
         foreach ($admins as $admin) {
              $admin->{'insert_amount_today'} = BalanceInsertAdmin::where('admin_id',$admin->id)->where('created_at','>=',Carbon::today()->startOfDay())->where('created_at','<=',Carbon::today()->endOfDay())->sum('amount');
              $admin->{'insert_amount_yesterday'} = BalanceInsertAdmin::where('admin_id',$admin->id)->where('created_at','>=',Carbon::yesterday()->startOfDay())->where('created_at','<=',Carbon::yesterday()->endOfDay())->sum('amount');
              $admin->{'insert_amount_this_week'} = BalanceInsertAdmin::where('admin_id',$admin->id)->where('created_at','>=',Carbon::today()->subDays('7')->startOfDay())->where('created_at','<=',Carbon::today()->endOfDay())->sum('amount');
              $admin->{'insert_amount_this_month'} = BalanceInsertAdmin::where('admin_id',$admin->id)->where('created_at','>=',Carbon::today()->subDays('30')->startOfDay())->where('created_at','<=',Carbon::today()->endOfDay())->sum('amount');
         }

         return response()->json([
                'status' => 'OK',
                'admins' => $admins ,
         ]);

     }


    public function BalanceInsertHistoryDetails($id){

        $admin = Admin::findOrFail($id);
        $balance=[];
        $balance['today']=BalanceInsertAdmin::where('admin_id',$admin->id)
                                             ->where('created_at','>=',Carbon::today()->startOfDay())
                                             ->where('created_at','<=',Carbon::today()->endOfDay())
                                             ->select('balance_id',DB::raw('SUM(amount) as amount'))
                                             ->groupBy('balance_id')
                                             ->with('balance')
                                             ->get();

        $balance['all']=BalanceInsertAdmin::where('admin_id',$admin->id)
                                             ->select('balance_id',DB::raw('SUM(amount) as amount'))
                                             ->groupBy('balance_id')
                                             ->with('balance')
                                             ->get();

        return response()->json([
            'admin'=>$admin,
            'balance'=>$balance,
        ]);

     }








}
