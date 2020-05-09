<?php

use App\Models\Image;
use App\Models\Profile;
use App\Models\ProfileImage;
use Illuminate\Database\Seeder;

class ProfilesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $firstProfile = Profile::create([
            'title' => 'First Profile',
            'short_description' => 'Short Description',
            'page_content' => '<h1>Title</h1>',
            'is_active' => true,
            'started_at' => '2019-11-04',
            'finished_at' => '2019-11-05'
        ]);

        $secondProfile = Profile::create([
            'title' => 'Second Profile',
            'short_description' => 'Short Description',
            'page_content' => '<h1>Title</h1>',
            'is_active' => true,
            'started_at' => '2019-11-04',
            'finished_at' => '2019-11-05'
        ]);

        $firstImage = Image::create([
            'url' => env('APP_URL').'/storage/images/projects/0ff0oBXX1lT3FXWdLTpCFmaHoKW0p1WCHCILkkYr.jpeg',
            'small_url' => 'images/projects/0ff0oBXX1lT3FXWdLTpCFmaHoKW0p1WCHCILkkYr.jpeg',
            'color' => '000000',
        ]);

        $secondImage = Image::create([
            'url' => env('APP_URL').'/storage/images/projects/0HSr8Xf1UKf7T3xgx1YRYHFwEDe1cTFYdfrbTPYb.jpeg',
            'small_url' => 'images/projects/0HSr8Xf1UKf7T3xgx1YRYHFwEDe1cTFYdfrbTPYb.jpeg',
            'color' => '000000',
        ]);

        ProfileImage::create([
            'profile_id' => $firstProfile->id,
            'image_id' => $firstImage->id,
            'is_active' => true,
        ]);

        ProfileImage::create([
            'profile_id' => $secondProfile->id,
            'image_id' => $secondImage->id,
            'is_active' => true,
        ]);
    }
}
