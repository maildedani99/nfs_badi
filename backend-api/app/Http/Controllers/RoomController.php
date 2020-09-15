<?php

namespace App\Http\Controllers;

use App\Image;
use App\Room;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class RoomController extends Controller
{
    /**
     * Show a list of all of the application's rooms.
     *
     * @return JsonResponse
     */
    public function all()
    {
        Log::info('Retrieving all rooms');
        //return response()->json(Room::all());
        return response()->json(Room::with('images','features','user')->get());

    }

    /**
     * Create a new room instance.
     *
     * @param  Request  $request
     * @return JsonResponse
     */
    public function create(Request $request)
    {
        // Validate the request...

        $room = Room::create([
            'name' => $request->name,
            'description' => $request->description,
            'user_id' => $request->user_id,
            'companions' => $request->companions,
            'price' => $request->price,
            'longitude' => $request->longitude,
            'latitude' => $request->latitude,
        ]);

        $room->save();


        return response()->json("Created", 201);
    }

    /**
     * Return a given room by id.
     *
     * @param $id
     * @return JsonResponse
     */
    public function getById($id)
    {
        Log::info('Retrieving room with id: '.$id);
        $data = Room::findOrFail($id);
        $data['images'] = Image::where('room_id', $id)->get();
        $data->features;
        $data->user;
        return response()->json($data);
    }

    /**
     * Return a collection of rooms given a user id.
     *
     * @param $userId
     * @return JsonResponse
     */
    public function getByUser($userId)
    {
        Log::info('Retrieving rooms with user id: '.$userId);
        $rooms = Room::where('user_id', $userId)->get();
        return response()->json($rooms);
    }
}
