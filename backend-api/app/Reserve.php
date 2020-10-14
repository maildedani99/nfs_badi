<?php


namespace App;


use Illuminate\Database\Eloquent\Model;

class Reserve extends Model
{

    public function user()
    {
        return $this->belongsToMany('App\User', 'users');
    }

    public function room()
    {
        return $this->belongsTo('App\Room');
    }

    protected $fillable = [
        'room_id', 'host_id', 'guest_id', 'arrival', 'departure', 'price', 'status',
    ];

}
