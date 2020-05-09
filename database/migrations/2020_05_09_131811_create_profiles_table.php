<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProfilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('profiles', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('title');
            $table->string('name');
            $table->string('about_title')->nullable();
            $table->string('short_about_description', 500)->nullable();
            $table->longText('about_page_content')->nullable();
            $table->boolean('is_active')->default(true);
            $table->boolean('maintenance_mode_active')->default(false);
            $table->boolean('contact_form_active')->default(false);
            $table->string('contact_email')->nullable();
            $table->boolean('resume_download_active')->default(false);
            $table->string('resume_file')->nullable();
            $table->boolean('background_video_active')->default(false);
            $table->string('background_video_file')->nullable();
            $table->integer('image_id')->nullable();
            $table->string('youtube_url')->nullable();
            $table->string('github_url')->nullable();
            $table->string('instagram_url')->nullable();
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('profiles');
    }
}
