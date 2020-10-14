<?php


namespace App\Http\Controllers;


use App\Reserve;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class ReserveController extends Controller
{
    public function all()
    {
        Log::info('Retrieving all reservations');
        return response()->json(Reserve::with('room')->get());
    }

    public function create(Request $request)
    {

        $reserve = Reserve::create([
            'room_id' => $request->room_id,
            'host_id' => $request->host_id,
            'guest_id' => $request->guest_id,
            'arrival' => $request->arrival,
            'departure' => $request->departure,
            'price' => $request->price,
            'status' => 'en curso',
        ]);

        $reserve->save();
        return response()->json("Created", 201);
    }

}
