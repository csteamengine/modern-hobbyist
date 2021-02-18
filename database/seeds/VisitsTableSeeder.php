<?php

use App\Models\Link;
use App\Models\LinkVisit;
use Illuminate\Database\Seeder;

class VisitsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        $firstLink = Link::create([
            'title' => 'Link 1',
            'url' => 'https://www.modhobbyist.com',
            'description' => "This is a test link",
            'start_date' => '2021-01-20 13:20:14',
            'image_id' => 1,
            'priority' => 1,
        ]);

        $secondLink = Link::create([
            'title' => 'Link 2',
            'url' => 'https://www.modhobbyist.com',
            'description' => "This is a test link",
            'start_date' => '2021-01-20 13:20:14',
            'image_id' => 1,
            'priority' => 2,
        ]);

        $firstVisit = LinkVisit::create([
            'link_id' => $firstLink->id,
        ]);

        $secondVisit = LinkVisit::create([
            'link_id' => $firstLink->id,
        ]);

        $thirdVisit = LinkVisit::create([
            'link_id' => $secondLink->id,
        ]);

        $fourthVisit = LinkVisit::create([
            'link_id' => $secondLink->id,
        ]);
    }
}
