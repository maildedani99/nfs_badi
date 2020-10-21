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
            'status' => 'PENDIENTE',
        ]);

        $reserve->save();
        return response()->json("Created", 201);
    }

    public function getSolicitudesId($id)
    {
        Log::info('Retrieving reserve with id: '.$id);
        return response()->json(Reserve::where('host_id', $id)
            ->where('status', 'PENDIENTE')
            ->with('room', 'guest', 'host')
            ->get());
    }

    public function getReservesClosedById($id)
    {
        Log::info('Retrieving reserve with id: '.$id);
        return response()->json(Reserve::where('host_id', $id)
            ->where('status', '!=' ,'PENDIENTE')
            ->with('room', 'guest', 'host')
            ->get());
    }

    public function getSolicitudesByGuestId($guest_id)
    {
        Log::info('Retrieving reserve with id: '.$guest_id);
        return response()->json(Reserve::where('guest_id', $guest_id)
            ->where('status', 'PENDIENTE')
            ->with('room', 'host', 'guest')
            ->get());
    }

    public function getReservesClosedByGuestId($guest_id)
    {
        Log::info('Retrieving reserve with id: '.$guest_id);
        return response()->json(Reserve::where('guest_id', $guest_id)
            ->where('status', '!=' ,'PENDIENTE')
            ->with('room', 'host', 'guest')
            ->get());
    }

    public function changeStatus (Request $request, $id)
    {
       Reserve::where('id', $id)->update(['status'=> $request->status]);
       return response()->json('status cambiada');
    }

}
