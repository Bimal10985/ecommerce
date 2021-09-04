<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('frontend.home.home');
});


Route::get('home', function () {
    return view('frontend.home.home');
});

// Route::get('aboutus', function () {
//     return view('frontend.about.about');
// });

// Route::get('category', function () {
//     return view('frontend.categories.categories');
// });


Route::get('shop', function () {
    return view('frontend.shop.shop');
});
Route::get('vendor', function () {
    return view('frontend.vendor.vendor');
});
Route::get('blog', function () {
    return view('frontend.blog.blog');
});
Route::get('pages', function () {
    return view('frontend.Pages.pages');
});