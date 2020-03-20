<?php

use App\Models\Image;
use App\Models\Project;
use App\Models\ProjectImage;
use Illuminate\Database\Seeder;

class ProjectsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $firstProject = Project::create([
            'title' => 'First Project',
            'short_description' => 'Short Description',
            'description' => 'Description',
            'youtube_url' => 'www.test.com',
            'github_url' => 'www.test.com',
            'page_content' => '<h1>Title</h1>',
            'is_active' => true,
            'started_at' => '2019-11-04',
            'finished_at' => '2019-11-05'
        ]);

        $secondProject = Project::create([
            'title' => 'Second Project',
            'short_description' => 'Short Description',
            'description' => 'Description',
            'youtube_url' => 'www.test.com',
            'github_url' => 'www.test.com',
            'page_content' => '<h1>Title Company 2</h1>',
            'is_active' => true,
            'started_at' => '2019-11-03',
            'finished_at' => '2019-11-04'
        ]);

        $firstImage = Image::create([
            'url' => 'images/projects/0ff0oBXX1lT3FXWdLTpCFmaHoKW0p1WCHCILkkYr.jpeg',
            'color' => '000000',
        ]);

        $secondImage = Image::create([
            'url' => 'images/projects/0HSr8Xf1UKf7T3xgx1YRYHFwEDe1cTFYdfrbTPYb.jpeg',
            'color' => '000000',
        ]);

        ProjectImage::create([
            'project_id' => $firstProject->id,
            'image_id' => $firstImage->id,
            'is_active' => true,
        ]);

        ProjectImage::create([
            'project_id' => $secondProject->id,
            'image_id' => $secondImage->id,
            'is_active' => true,
        ]);
    }
}
