<?php

use App\Models\Job;
use Illuminate\Database\Seeder;

class JobsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Job::create([
            'title' => 'First Job',
            'company' => 'Fake Company',
            'short_description' => 'Short Description',
            'description' => 'Description',
            'company_url' => 'www.test.com',
            'page_content' => '<h1>Title</h1>',
            'is_active' => true,
            'started_at' => '2019-11-04',
            'finished_at' => '2019-11-05'
        ]);

        Job::create([
            'title' => 'Second Job',
            'company' => 'Fake 2nd Company',
            'short_description' => 'Short Description',
            'description' => 'Description',
            'company_url' => 'www.test2.com',
            'page_content' => '<h1>Title Company 2</h1>',
            'is_active' => true,
            'started_at' => '2019-11-03',
            'finished_at' => '2019-11-04'
        ]);
    }
}
