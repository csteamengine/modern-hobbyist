<?php

use App\Models\Project;
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
        Project::create([
            'title' => 'First Project',
            'short_description' => 'Short Description',
            'description' => 'Description',
            'project_url' => 'www.test.com',
            'page_content' => '<h1>Title</h1>',
            'is_active' => true,
            'started_at' => '2019-11-04',
            'finished_at' => '2019-11-05'
        ]);

        Project::create([
            'title' => 'Second Project',
            'short_description' => 'Short Description',
            'description' => 'Description',
            'project_url' => 'www.test2.com',
            'page_content' => '<h1>Title Company 2</h1>',
            'is_active' => true,
            'started_at' => '2019-11-03',
            'finished_at' => '2019-11-04'
        ]);
    }
}
