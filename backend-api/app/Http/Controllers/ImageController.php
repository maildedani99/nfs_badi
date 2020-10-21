<?php

namespace App\Http\Controllers;

use App\Room;
use App\Image;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class ImageController extends Controller
{
    /**
     * Show a list of all of the application's pins.
     *
     * @return JsonResponse
     */
    public function all()
    {
        Log::info('Retrieving all images');
        return response()->json(Image::all());
    }

    /**
     * Create a new image instance.
     *
     * @param  Request  $request
     * @return JsonResponse
     */
    public function create(Request $request)
    {
        // Validate the request...

        $pin = Image::create([
            'image_url' => $request->image_url,
            'room_id' => $request->room_id,
        ]);

        $pin->save();
        return response()->json("Created", 201);
    }

    /**
     * Return a given image by id.
     *
     * @param $id
     * @return JsonResponse
     */
    public function getById($id)
    {
        Log::info('Retrieving image with id: '.$id);
        return response()->json(Image::findOrFail($id));
    }

    /**
     * Return a collection of images given a room id.
     *
     * @param $roomId
     * @return JsonResponse
     */
    public function getByRoom($roomId)
    {
        Log::info('Retrieving images with room id: '.$roomId);
        $images = Image::where('room_id', $roomId)->get();
        return response()->json($images);
    }
}
