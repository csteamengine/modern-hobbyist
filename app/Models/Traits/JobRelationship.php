<?php

namespace App\Models\Traits;

use App\Models\Image;

/**
 * Class UserRelationship.
 */
trait JobRelationship
{

    /**
     * @return mixed
     */
    public function images()
    {
        return $this->belongsToMany(Image::class, 'job_images')->orderBy('order');
    }
}
