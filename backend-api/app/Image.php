<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    /**
     * Get the room that owns the pin.
     */
    public function room()
    {
        return $this->belongsTo('App\Room');
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'image_url', 'room_id'
    ];
}
