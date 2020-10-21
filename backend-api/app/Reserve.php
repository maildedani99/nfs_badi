<?php


namespace App;


use Illuminate\Database\Eloquent\Model;

class Reserve extends Model
{

    public function host()
    {
        return $this->belongsTo('App\User', 'host_id');
    }

    public function guest()
    {
        return $this->belongsTo('App\User', 'guest_id');
    }

    public function room()
    {
        return $this->belongsTo('App\Room', 'room_id');
    }

    protected $fillable = [
        'room_id', 'host_id', 'guest_id', 'arrival', 'departure', 'price', 'status',
    ];

}
