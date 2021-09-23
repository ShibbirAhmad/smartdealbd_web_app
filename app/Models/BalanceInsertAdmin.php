<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BalanceInsertAdmin extends Model
{

     public function balance(){

            return  $this->belongsTo('App\Models\Balance','balance_id');
     }

}
