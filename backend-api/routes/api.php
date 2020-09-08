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

Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {

    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');

});

/*
|--------------------------------------------------------------------------
| User Routes
|--------------------------------------------------------------------------
*/

Route::get('users', 'UserController@all');
Route::get('users/{id}', 'UserController@getById');
Route::get('users/email/{email}', 'UserController@getByEmail');
Route::get('users/username/{username}', 'UserController@getByUsername');
Route::post('users','UserController@create');

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
Route::get('images/room/{roomId}', 'ImageController@getByRoom');
// Route::post('images', 'ImageController@create');
/*
|--------------------------------------------------------------------------
|Feature Routes
|--------------------------------------------------------------------------
*/
Route::get('features', 'FeatureController@all');
Route::get('features/{id}', 'FeatureController@getById');
Route::post('features', 'FeatureController@create');

/*
|--------------------------------------------------------------------------
|Features_room Routes
|--------------------------------------------------------------------------
*/

Route::get('features/room/{roomId}', 'FeatureController@getByRoom');
Route::post('features/add', 'FeatureController@addFeatureToRoom');


