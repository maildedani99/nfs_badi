<?php


namespace App\Http\Controllers;
use App\Feature;
use App\Room;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class FeatureController extends Controller
{
    public function all() {

        return response()->json(Feature::all());
    }

    /**
     * Create a new feature instance.
     *
     * @param  Request  $request
     * @return JsonResponse
     */
    public function create(Request $request)
    {
        // Validate the request...

        $Feature = Feature::create([
            'name' => $request->name,
        ]);

        $Feature->save();


        return response()->json($Feature, 201);
    }

    /**
     * Return a given feature by id.
     *
     * @param $id
     * @return JsonResponse
     */
    public function getById($id)
    {

        return response()->json(Feature::findOrFail($id));
    }

    /**
     * Return a collection of features given a user id.
     *
     * @param $userId
     * @return JsonResponse
     */
    public function getByRoom($roomId)
    {

        $Features= DB::table('features_room')
            ->where('room_id', $roomId)
            ->get();

        /*aca va el forEach*/

        return response()->json($Features);
    }

    public function addFeatureToRoom(Request $request)
    {
        $FeatureRoomRelation = DB::table('features_room')->insert(
            ['features_id' => $request -> features_id,
             'room_id' => $request -> room_id]

        );
        return response()->json($FeatureRoomRelation);


    }
}
