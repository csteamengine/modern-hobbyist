<?php

namespace App\Models;

use App\Models\Traits\ProjectRelationship;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Project extends Model implements HasMedia
{
    use SoftDeletes,
        ProjectRelationship,
        InteractsWithMedia;
    //
    protected $fillable = [
        'title',
        'company',
        'short_description',
        'description',
        'youtube_url',
        'github_url',
        'page_content',
        'is_active',
        'started_at',
        'finished_at',
    ];

    public function delete() {
//        TODO add all related tables to be deleted as well
        parent::delete();
    }
}
