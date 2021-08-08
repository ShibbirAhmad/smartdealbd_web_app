<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Investment;
use App\Models\Investor;
use App\Models\Credit;
use App\Models\InvestmentReturn;
use App\Models\InvestorProfitPaid;
use Illuminate\Support\Facades\DB;
use Barryvdh\DomPDF\Facade as PDF;


class InvestmentController extends Controller
{

    public function get_ivestors(Request $request){


        $items=$request->item ?? 10;
        $investment=Investor::orderBy('id','desc')->paginate($items);
        $total_investment= DB::table('investments')->sum('amount');
        $total_profit_paid= DB::table('investor_profit_paids')->sum('amount');


        foreach($investment as $item){

            $item->{'invest_amount'}=Investment::where('investor_id',$item->id)->sum('amount');
            $item->{'profit_paid_amount'}=InvestorProfitPaid::where('investor_id',$item->id)->sum('amount');
        }


       return \response()->json([

            'success'=>'OK',
            'investment'=>$investment,
            'total_investment' => number_format($total_investment),
            'total_profit_paid' => number_format($total_profit_paid),

        ]);


     }



    public function investor_list(){

        $investors=Investor::all();
        return response()->json($investors);

      }


      public function store(Request $request){

            $validatedData = $request->validate([

            'name' => 'required',
            'referance_name' => 'required',
            'mobile_no' => 'required|digits:11|unique:investors',
            'date'=>"required",
            'purpose'=>"required",
            'amount'=>"required",
            'profit_margin'=>"required",
            'address'=>"required",

          ]);


                $investor=new Investor();
                $investor->name=$request->name;
                $investor->referance_name=$request->referance_name;
                $investor->mobile_no=$request->mobile_no;
                $investor->address=$request->address;
                $investor->profit_margin=$request->profit_margin;
                if($investor->save()){

                    $investment= new Investment();
                    $investment->date=$request->date;
                    $investment->investor_id=$investor->id;
                    $investment->purpose=$request->purpose;
                    $investment->amount=$request->amount;

                    if($investment->save()){

                        $credit = new Credit();
                        $credit->purpose = "Invest From ". $request->name;
                        $credit->amount = $request->amount;
                        $credit->comment = $request->purpose ?? null;
                        $credit->date = $request->date;
                        $credit->balance_id=9;
                        $credit->insert_admin_id=session()->get('admin')['id'];
                        $credit->save();

                        return response()->json([
                            'status'=>'OK',
                            'message'=>'Added successfully'

                        ]);

                    }

                }

       }




        public function get_ivestor_details($id){

        $invests=Investment::where('investor_id',$id)->get();
        $invest_profit_paid=InvestorProfitPaid::where('investor_id',$id)->get();
        $investment_return=InvestmentReturn::where('investor_id',$id)->get();
        $total_return=InvestmentReturn::where('investor_id',$id)->sum('amount');
        return response()->json([
            'invests'=>$invests,
            'invest_profit_paid'=> $invest_profit_paid,
            'investment_return'=> $investment_return,
            'total_return'=> $total_return,
        ]);

    }


    public function add_more_invest(Request $request,$id){

        $investor=Investor::find($id);
        $investment=new Investment();
        $investment->investor_id=$investor->id;
        $investment->purpose=$request->purpose;
        $investment->amount=$request->amount;
        $investment->date=date('Y-m-d');

        if( $investment->save()){
          $credit = new Credit();
          $credit->purpose = "investment From ". $investor->name;
          $credit->amount = $request->amount;
          $credit->comment = $request->purpose ?? null;
          $credit->date = date('Y-m-d');
          $credit->balance_id= 9 ;
          $credit->insert_admin_id=session()->get('admin')['id'];
          $credit->save();

        }

        return response()->json([
              'success'=>'OK',
              'message'=>'Added successully'
          ]);



    }



     public  function download_investors(){

        $invests=Investor::orderBy('id','DESC')->get();
        $total_invest= DB::table('investments')->sum('amount');
        $total_investor_profit_paid= DB::table('investor_profit_paids')->sum('amount');


        foreach($invests as $item){

            $item->{'invest_amount'}=Investment::where('investor_id',$item->id)->sum('amount');
            $item->{'profit_paid_amount'}=InvestorProfitPaid::where('investor_id',$item->id)->sum('amount');

        }

            $pdf=PDF::loadView('admin.pdf.all_invest_record',compact('invests','total_investor_profit_paid','total_invest'));
            return $pdf->stream();

      }


     // function for download investor invest history
      public function download_investor_record($id){

            $investor = Investor::findOrFail($id);
            $investor->{'invest_amount'}=Investment::where('investor_id',$investor->id)->get();
            $total_invest=Investment::where('investor_id',$investor->id)->sum('amount');
            $pdf=PDF::loadView('admin.pdf.Investor_invest_record',compact('investor','total_invest'));
            return $pdf->stream();


       }


    // function for download investor invest paid history
      public function download_profit_paid($id){

            $investor = Investor::findOrFail($id);
            $investor->{'profit_paid_amount'}=InvestorProfitPaid::where('investor_id',$investor->id)->get();
            $total_investor_profit_paid=InvestorProfitPaid::where('investor_id',$investor->id)->sum('amount');
            // return $investor ;
            $pdf=PDF::loadView('admin.pdf.Investor_profit_paid_record',compact('investor','total_investor_profit_paid'));
            return $pdf->stream();


       }




}
