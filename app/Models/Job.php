<?php

namespace App\Models;

use App\Models\Traits\JobRelationship;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Job extends Model
{
    use SoftDeletes,
        JobRelationship;
    protected $table = 'career_jobs';

    protected $fillable = [
        'title',
        'company',
        'short_description',
        'description',
        'company_url',
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
