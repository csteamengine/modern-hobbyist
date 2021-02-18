<?php

namespace App\Models\Traits;

use App\Models\Image;

/**
 * Class UserRelationship.
 */
trait LinkRelationship
{
    /**
     * @return mixed
     */
    public function image()
    {
        return $this->belongsTo(Image::class)->first();
    }

    /**
     * @return mixed
     */
    public function visits()
    {
        return $this->hasMany('link_visits');
    }
}
