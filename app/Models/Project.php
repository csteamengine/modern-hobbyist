<?php

namespace App\Models;

use App\Models\Traits\ProjectRelationship;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Project extends Model
{
    use SoftDeletes,
        ProjectRelationship;
    //
    protected $fillable = [
        'title',
        'company',
        'short_description',
        'description',
        'project_url',
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
