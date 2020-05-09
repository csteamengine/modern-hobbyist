<?php

namespace App\Models;

use App\Models\Traits\ProfileRelationship;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Profile extends Model
{
    //TODO Create Profile Relationship
    use SoftDeletes,
        ProfileRelationship;


    //TODO Set remaining fillable Items
    protected $fillable = [
        'title',
        'company',
        'short_description',
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
