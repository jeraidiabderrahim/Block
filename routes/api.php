<?php

use App\Http\Controllers\CommentController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('comments',[CommentController::class,'index']);
Route::post('comments',[CommentController::class,'store'])->middleware('auth:sanctum');
Route::get('comments/{comment}',[CommentController::class,'show'])->middleware('auth:sanctum');
Route::put('comments/{comment}',[CommentController::class,'update'])->middleware('auth:sanctum');
Route::delete('comments/{comment}',[CommentController::class,'destroy'])->middleware('auth:sanctum');


Route::get('posts',[PostController::class,'index']);
Route::post('posts',[PostController::class,'store'])->middleware('auth:sanctum');
Route::get('posts/{post}',[PostController::class,'show'])->middleware('auth:sanctum');
Route::put('posts/{post}',[PostController::class,'update'])->middleware('auth:sanctum');
Route::delete('posts/{post}',[PostController::class,'destroy'])->middleware('auth:sanctum');

Route::post('register', [UserController::class, 'register']);
Route::post('login', [UserController::class, 'login']);
Route::post('logout', [UserController::class, 'logout'])->middleware('auth:sanctum');

Route::get('getuser', [UserController::class, 'GetUser'])->middleware('auth:sanctum');
