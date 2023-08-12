<?php

namespace App\Http\Controllers\API;

use App\Models\EmployementStatus;
use App\Models\SitesNames;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class SitesController extends Controller
{
    public function SiteNames(){

        $data = SitesNames::select('*')->get();

        return response()->json([
            "status"        =>      200,
            "data"          =>      $data,
        ]);

    }

    public function EmployementStatus (){
        $data = EmployementStatus::select('*')->get();

        return response()->json([
            "status"        =>      200,
            "data"          =>      $data,
        ]);
    }
}
