<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CompanySalePaid extends Model
{
     public function balance(){
         return $this->belongsTo('App\Models\Balance','balance_id') ;
     }
}
