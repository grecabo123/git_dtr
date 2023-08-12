<?php

namespace App\Http\Controllers\API;

use App\Models\Logs;
use App\Models\User;
use App\Models\Government;
use App\Models\ContactUser;
use Illuminate\Http\Request;
use App\Models\EmployementInfo;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthControl extends Controller
{


    public function Login(Request $request){

        $validate = Validator::make($request->all(), [
            "email"         =>      "required",
            "password"      =>      "required",
        ]);

        if($validate->fails()) {
            return response()->json([
                "error"     =>      $validate->messages(),
            ]);
        }
        else{
            $user = User::where('email',$request->email)->first();

            if( !$user || !Hash::check($request->password, $user->password)){
                return response()->json([
                    "status"        =>      401,
                    "error"         =>      "Invalid Credintials",
                ]);
            }
            else{
                // Admin
                if($user->role == 1){
                    $token = $user->createToken($user->email.'_Admin',['server:admin'])->plainTextToken;
                }
                //HR
                else if($user->role == 2){
                    $token = $user->createToken($user->email.'_HR',['server:hr'])->plainTextToken;
                }
                //Employee
                else if($user->role == 3) {
                    $token = $user->createToken($user->email.'_employee',['server:employee'])->plainTextToken;
                }
                return response()->json([
                    "status"        =>      200,
                    "success"       =>      "Logged in Successfully",
                    "token"         =>      $token,
                    "id"            =>      $user->id,
                ]);
            }
        }
    }

    public function AdminRegister(Request $request){

        $message = [
            "fname.required"        =>      "First Name is required",
            "lname.required"        =>      "Last Name is required",
        ];

        $validate = Validator::make($request->all(), [
            "fname"         =>      "required",
            "lname"         =>      "required",
            "suffix"        =>      "required",
            "email"         =>      "required|email|unique:users,email",
            "age"           =>      "required",
            "home"          =>      "required",
            "mobile"        =>      "required",
            "monthly"       =>      "required",
            "permanent"     =>      "required",
            "jobtitle"      =>      "required",
        ],$message);


        if($validate->fails()) {
            return response()->json([
                "error"     =>      $validate->messages(),
            ]);
        }
        else{
            $user = new User;

            $user->name = $request->fname." ".$request->mname." ".$request->lname;
            $user->suffix = $request->suffix;
            $user->birthday = $request->birthdate;
            $user->age = $request->age;
            $user->marital_status = $request->marital_status_pick;
            $user->password_text = $request->lname;
            $user->role = 2;
            $user->user_code = "ITECT-"."".rand(100,999);
            $user->email = $request->email;
            $user->gender = $request->gender;
            $user->status = 1;
            $user->password = Hash::make($request->lname);
            $user->save();

            $government = new Government;
            $government->SSS = $request->sss;
            $government->Pagibig = $request->pag_ibig;
            $government->TIN = $request->tin;
            $government->Philhealth = $request->phil;
            $government->government_user_fk = $user->id;

            $government->save();

            $contact = new ContactUser;
            $contact->current_adr = $request->home;
            $contact->perma_adr = $request->permanent;
            $contact->contact_number = $request->mobile;
            $contact->user_fk = $user->id;
            $contact->save();

            $employee = new EmployementInfo;

            $employee->department = $request->department;
            $employee->position = $request->jobtitle;
            $employee->Monthly = $request->monthly;
            $employee->status = $request->statusemployment;
            $employee->date_hired = $request->date_employed;
            $employee->employee_info_fk = $user->id;

            $employee->save();

            $logs = new Logs;

            $logs->activity = "Creatting Account ".$request->fname." ".$request->mname." ".$request->lname;
            $logs->user_logs_fk = $request->user_fk;

            $logs->save();

            return response()->json([
                "status"        =>      200,
                "success"       =>      "Employee Has Been Registered",
            ]);
        }
    }

    public function Logout(){
        auth()->user()->tokens()->delete();

        return response()->json([
            "status"        =>      200,
            'message'       =>      "Logout Successfully",
        ]);
    }

    public function LoginAuthentication(Request $request){
        $user = User::where('email',$request->email)->first();
        if( !$user){
            return response()->json([
                "status"        =>      401,
                "error"         =>      "Invalid Credintials",
            ]);
        }
        else{
            // Admin
            if($user->role == 1){
                $token = $user->createToken($user->email.'_Admin',['server:admin'])->plainTextToken;
            }
            //HR
            else if($user->role == 2){
                $token = $user->createToken($user->email.'_HR',['server:hr'])->plainTextToken;
            }
            //Employee
            else if($user->role == 3) {

            }
            return response()->json([
                "status"        =>      200,
                "success"       =>      "Logged in Successfully",
                "token"         =>      $token,
                "id"            =>      $user->id,
                "googleID"      =>      $request->ID,
            ]);
        }
    }
}
