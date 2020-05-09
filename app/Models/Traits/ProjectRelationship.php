<?php

namespace App\Models\Traits;

use App\Models\Image;

/**
 * Class UserRelationship.
 */
trait ProjectRelationship
{

    /**
     * @return mixed
     */
    public function images()
    {
        return $this->belongsToMany(Image::class, 'project_images')->orderBy('order');
    }
}
