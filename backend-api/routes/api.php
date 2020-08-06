<?php

use Illuminate\Http\Request;

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

/*
|--------------------------------------------------------------------------
| User Routes
|--------------------------------------------------------------------------
*/

Route::get('users', 'UserController@all');
Route::get('users/{id}', 'UserController@getById');
Route::get('users/email/{email}', 'UserController@getByEmail');
Route::get('users/username/{username}', 'UserController@getByUsername');

/*
|--------------------------------------------------------------------------
| Room Routes
|--------------------------------------------------------------------------
*/
Route::get('rooms', 'RoomController@all');
Route::get('rooms/{id}', 'RoomController@getById');
Route::get('rooms/user/{userId}', 'RoomController@getByUser');
// Route::post('rooms', 'RoomController@create');


/*
|--------------------------------------------------------------------------
| Image Routes
|--------------------------------------------------------------------------
*/
Route::get('images', 'ImageController@all');
Route::get('images/{id}', 'ImageController@getById');
Route::get('images/room/{roomId}', 'ImageController@GetByRoom');
// Route::post('images', 'ImageController@create');
