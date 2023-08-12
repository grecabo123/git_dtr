<?php

namespace App\Http\Controllers\API;

use App\Models\Logs;
use App\Models\TimeMonitor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

class EmployeeController extends Controller
{
    //

    public function TimeMonitor($id){

        $data = DB::table('tbl__time_monitor')
            ->selectRaw('tbl__time_monitor.TimeIN,tbl__time_monitor.TimeOut,tbl__time_monitor.isBreak,tbl__time_monitor.isOut,tbl__time_monitor.isIn,tbl__time_monitor.TimeInPM,tbl__time_monitor.TimeOutPM')
                ->where('tbl__time_monitor.time_user_fk',$id)
                    ->orderBy('created_at','DESC')
                        ->get();


        return response()->json([
            "status"            =>          200,
            "data"              =>          $data,
        ]);
    }

    public function TimeIn(Request $request){

        $check_is_check = TimeMonitor::find($request->current_time_id)->first();

        if($check_is_check){
            DB::table('tbl__time_monitor')
                ->where('id',$request->current_time_id)
                    ->update([
                        "TimeInPM"      =>      $request->current_,
                        "isIn"          =>      2,
                    ]);
        }
        else{

            $timein = new TimeMonitor;
            // Time In
            $timein->TimeIn = $request->current_;
            $timein->TimeOut = null;
            $timein->time_user_fk = $request->id;
            $timein->isIn = 1;
            $timein->save();
        }



        $logs = new Logs;
        $logs->activity = "Time In" .$request->time_now;
        $logs->user_logs_fk = $request->id;
        $logs->save();

        return response()->json([
            "status"            =>          200,
            "data"              =>          $request->current_time_id,
            "time_id"           =>          $check_is_check->id,
        ]);
    }


    public function TimeOut(Request $request){

        // $timein = new TimeMonitor;

        // Time out
        // $timein->TimeOut = $request->time_now;
        // $timein->time_user_fk = $request->id;
        // $timein->isOut = 1;
        // $timein->save();

        $results = TimeMonitor::where([
            "id"        =>      $request->current_time_id,
            "isIn"      =>      2,
        ]);

        if($results){
            DB::table('tbl__time_monitor')
            ->where('id',$request->current_time_id)
                ->update([
                    "TimeOutPM"       =>      $request->current_,
                    "isOut"         =>      0,
                ]);
        }
        else{

            DB::table('tbl__time_monitor')
                ->where('id',$request->current_time_id)
                    ->update([
                        "TimeOut"       =>      $request->current_,
                        "isOut"         =>      0,
                        "isIn"          =>      2,
                        "isBreak"       =>      1,
                    ]);
        }



        $logs = new Logs;
        $logs->activity = "Time In" .$request->time_now;
        $logs->user_logs_fk = $request->id;
        $logs->save();

        return response()->json([
            "status"            =>          200,
            "data"              =>          "Time In",
        ]);
    }

    // Get Status
    public function GetStatus($id){
        $data = DB::table('tbl__time_monitor')
            ->selectRaw('created_at,isOut,id,isIn')
                ->where('time_user_fk',$id)
                    ->orderBy('created_at','DESC')
                        ->first();

    return response()->json([
        "status"        =>      200,
        "data"          =>      $data,
    ]);

    }
}
