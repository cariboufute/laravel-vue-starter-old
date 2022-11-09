<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('guest')->post('login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {
    Route::get('user/auth', [AuthController::class, 'user']);
    Route::post('logout', [AuthController::class, 'logout']);
});

Route::any('{segments?}', fn() => response('Not found', 404))
    ->where('segments', '[\/\w\.-]*');
