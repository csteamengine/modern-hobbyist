<?php

namespace App\Models;

use App\Models\Traits\LinkRelationship;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Link extends Model
{
    use SoftDeletes,
        LinkRelationship;
    protected $table = 'links';

    protected $fillable = [
        'title',
        'url',
        'description',
        'start_date',
        'end_date',
        'is_active',
        'image_url',
        'priority',
    ];

    public function delete()
    {
//        TODO add all related tables to be deleted as well
        parent::delete();
    }
}
