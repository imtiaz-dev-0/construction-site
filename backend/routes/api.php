<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthenticationController;
use App\Http\Controllers\Admin\DashboardController;

Route::post('authenticate' ,  [AuthenticationController::class , 'authenticate']);

// Route::get('/user', function (Request $request) {
    //     return $request->user();
    // })->middleware('auth:sanctum');
    
    Route::group(['middleware' => ['auth:sanctum']] , function(){
        Route::get('dashboard' ,  [DashboardController::class , 'index']);
        Route::get('logout' ,  [AuthenticationController::class , 'logout']);
});