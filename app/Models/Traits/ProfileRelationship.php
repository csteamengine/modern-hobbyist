<?php

namespace App\Models\Traits;

use App\Models\Image;

/**
 * Class ProfileRelationship.
 */
trait ProfileRelationship
{

    /**
     * @return mixed
     */
    public function images()
    {
        return $this->belongsToMany(Image::class, 'profile_images')->orderBy('order');
    }
}
