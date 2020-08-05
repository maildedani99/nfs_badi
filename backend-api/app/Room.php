<?php


namespace App;


use Illuminate\Database\Eloquent\Model;

class Room extends Model
{
    /**
     * Get the user that owns the board.
     */
    public function user()
    {
        return $this->belongsTo('App\User');
    }


    /**
     * Get the images for the given room.
     */
    public function images()
    {
        return $this->hasMany('App\Image');
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'description', 'user_id',
    ];
}
