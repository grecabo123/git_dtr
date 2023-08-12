<?php

namespace App\Http\Controllers\API;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

class AdminController extends Controller
{
    public function Index(Request $request){

    }

    public function EmployeeList(){
        $data = DB::table('users')->join('tbl_contact','users.id','=','tbl_contact.user_fk')
            ->selectRaw('users.id,users.status,users.name,users.email,users.role,tbl_contact.contact_number,users.user_code')
                ->whereIn('role', [2])
                    ->get();

        return response()->json([
            "status"        =>      200,
            "data"          =>      $data,
        ]);

    }

    public function EmployeeDetails($id){

        $data = DB::table('users')->join('tbl_contact','tbl_contact.user_fk','=','users.id')
            ->join('tbl_employee_info','tbl_employee_info.employee_info_fk','=','users.id')
                ->join('tbl_government','tbl_government.government_user_fk','=','users.id')
                    ->selectRaw('users.status,users.id,users.name,users.user_code,users.suffix,users.email,users.age,users.birthday,users.gender,users.created_at,users.password_text,tbl_government.SSS,tbl_government.Pagibig,tbl_government.TIN,tbl_employee_info.department,tbl_employee_info.position,tbl_employee_info.Monthly,tbl_employee_info.date_hired,tbl_contact.current_adr,tbl_contact.perma_adr,tbl_contact.contact_number,tbl_government.Philhealth')
                        ->where('users.id',$id)
                            ->first();


        return response()->json([
            "status"        =>      200,
            "data"          =>      $data,
        ]);
    }

    public function AllCountData(){
        $data = User::select('*')->get();
        $active = User::select('*')->where('status',1)->get();
        $not = User::select('*')->where('status',2)->get();

        if($data->count() < 0 && $active->count() < 0 && $not->count() < 0) {
            return response()->json([
                "status"        =>      200,
                "all"           =>      0,
                "active"        =>      0,
                "not"           =>      0,
            ]);
        }
        else{
            return response()->json([
                "status"        =>      200,
                "all"           =>      $data->count(),
                "active"        =>      $active->count(),
                "not"           =>      $not->count(),
            ]);
        }
    }


}
