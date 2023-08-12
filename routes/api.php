<?php

use App\Http\Controllers\API\ActivityLogsController;
use App\Http\Controllers\API\EmployeeController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthControl;
use App\Http\Controllers\API\AdminController;
use App\Http\Controllers\API\SitesController;


Route::post('LoginData', [AuthControl::class, 'Login']);
Route::post('LoginAuthentication', [AuthControl::class, 'LoginAuthentication']);
Route::post('AdminRegister',[AuthControl::class, 'AdminRegister']);
Route::get('SiteNames',[SitesController::class, 'SiteNames']);
Route::get('EmployementStatus',[SitesController::class, 'EmployementStatus']);


// Logs
Route::get('Logs/{id}',[ActivityLogsController::class, 'History']);



Route::middleware(['auth:sanctum', 'isAPIAdmin'])->group(function () {
    Route::get('/checking',function () {
        return response()->json([
            "status"        =>      200,
            "role"          =>      auth()->user()->role,
        ],200);
    });
    Route::get('EmployeeList',[AdminController::class, 'EmployeeList']);
    Route::get('EmployeeDetails/{id}',[AdminController::class, 'EmployeeDetails']);
    Route::get('CountData',[AdminController::class, 'AllCountData']);
    // Route::post('')
});

Route::middleware(['auth:sanctum', 'isAPIEmployee'])->group(function () {
    Route::get('/checkingemployee',function () {
        return response()->json([
            "status"        =>      200,
            "role"          =>      auth()->user()->role,
        ],200);
    });
    Route::get('TimeMonitor/{id}',[EmployeeController::class,'TimeMonitor']);
    Route::post('TimeIn',[EmployeeController::class, 'TimeIn']);
    Route::put('TimeOut',[EmployeeController::class, 'TimeOut']);
    Route::get('GetCurrentDate/{id}',[EmployeeController::class, 'GetStatus']);
});



Route::middleware(['auth:sanctum'])->group(function () {
    Route::post('logout',[AuthControl::class, 'Logout']);
});

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

