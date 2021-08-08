<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Credit;
use App\Models\Debit;
use App\Models\FondTransfer;

class FondTransferController extends Controller
{

    public function index(Request $request)
    {
        $item=$request->items ?? 10;
        $transfer_amount_list=FondTransfer::orderBy('id','DESC')->with('balance_from','balance_to')->paginate($item);

        return \response()->json([
             'status'=>'OK',
             'transfer_amount_list'=>$transfer_amount_list
        ]);
    }


    public function store(Request $request)
    {

      //  return $request->all();
        $validatedData = $request->validate([
            'from' => 'required ',
            'to' => 'required',
            'amount' => 'required',
         ]);

         $found_transfer=new FondTransfer();
         $found_transfer->from=$request->from;
         $found_transfer->to=$request->to;
         $found_transfer->amount=$request->amount;
         $found_transfer->cost=$request->cost;
         $found_transfer->creator_admin=session()->get('admin')['name'];

         if($found_transfer->save()){
            //create a  debit
            $debit = new Debit();
            $debit->purpose =9;
            $debit->balance_id=$request->from;
            $debit->amount = $request->amount;
            $debit->comment = "Fund Transfer ". $request->from.'-'.$request->to.'. Amount '. $request->amount;
            $debit->date = date('Y-m-d');
            $debit->insert_admin_id=session()->get('admin')['id'];
            $debit->save();

            //create a credit
            $credit = new Credit();
            $credit->purpose = "Fund Transfer";
            $credit->amount =$request->transfer_amount;
            $credit->balance_id=$request->to;
            $credit->comment ="Fund In ". $request->from.'from'.$request->to.'. Amount '.($request->transfer_amount). '. And Transfer Cost '.($request->amount-$request->transfer_amount);
            $credit->date = date('Y-m-d');
            $credit->insert_admin_id=session()->get('admin')['id'];
            $credit->save();
             return \response()->json([
                 'status'=>"OK",
                 'message'=>'Transfer Successfully'
             ]);
         }
    }





}