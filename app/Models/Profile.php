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
        'name',
        'about_title',
        'short_about_description',
        'about_page_content',
        'is_active',
        'maintenance_mode_active',
        'contact_form_active',
        'contact_email',
        'resume_download_active',
        'background_video_active',
        'resume_file',
        'background_video_file',
        'youtube_url',
        'github_url',
        'instagram_url',
    ];

    public function delete() {
//        TODO add all related tables to be deleted as well
        parent::delete();
    }
}
