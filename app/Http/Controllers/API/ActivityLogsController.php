<?php

namespace App\Http\Controllers\API;

use App\Models\Logs;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ActivityLogsController extends Controller
{
    //

    public function History($id){

        $data = Logs::select('*')->where('user_logs_fk',$id)
            ->orderBy('created_at','DESC')
                ->get();

        return response()->json([
            "status"        =>      200,
            "data"          =>      $data,
        ]);
    }
}
