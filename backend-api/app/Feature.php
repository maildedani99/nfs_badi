<?php


namespace App;
use Illuminate\Database\Eloquent\Model;

class Feature extends Model
{
    /**
     * Get the room that owns the features.
     */
    public function room()
    {
        return $this->belongsToMany('App\Room');
    }


    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name','room_id',
    ];

    protected $guarded = [
        'id',
    ];
}
