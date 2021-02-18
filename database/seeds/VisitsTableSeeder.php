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
            'description' => 'This is a test link',
            'start_date' => '2021-01-20 13:20:14',
            'image_id' => 1,
            'priority' => 1,
        ]);

        $secondLink = Link::create([
            'title' => 'Link 2',
            'url' => 'https://www.modhobbyist.com',
            'description' => 'This is a test link',
            'start_date' => '2021-01-20 13:20:14',
            'image_id' => 1,
            'priority' => 2,
        ]);

        LinkVisit::create([
            'link_id' => 1,
            'created_at' => '2021-01-20 13:20:14',
        ]);
        LinkVisit::create([
            'link_id' => 1,
            'created_at' => '2021-01-20 13:20:14',
        ]);
        LinkVisit::create([
            'link_id' => 1,
            'created_at' => '2021-01-20 13:20:14',
        ]);
        LinkVisit::create([
            'link_id' => 1,
            'created_at' => '2021-01-20 13:20:14',
        ]);
        LinkVisit::create([
            'link_id' => 1,
            'created_at' => '2021-01-20 13:20:14',
        ]);
        LinkVisit::create([
            'link_id' => 1,
            'created_at' => '2021-01-20 13:20:14',
        ]);
        LinkVisit::create([
            'link_id' => 1,
            'created_at' => '2021-01-20 13:20:14',
        ]);
        LinkVisit::create([
            'link_id' => 1,
            'created_at' => '2021-01-20 13:20:14',
        ]);
        LinkVisit::create([
            'link_id' => 1,
            'created_at' => '2021-01-15 13:20:14',
        ]);
        LinkVisit::create([
            'link_id' => 1,
            'created_at' => '2021-01-15 13:20:14',
        ]);
        LinkVisit::create([
            'link_id' => 1,
            'created_at' => '2021-01-15 13:20:14',
        ]);
        LinkVisit::create([
            'link_id' => 1,
            'created_at' => '2021-01-15 13:20:14',
        ]);
        LinkVisit::create([
            'link_id' => 1,
            'created_at' => '2021-01-15 13:20:14',
        ]);
        LinkVisit::create([
            'link_id' => 1,
            'created_at' => '2021-01-15 13:20:14',
        ]);
        LinkVisit::create([
            'link_id' => 1,
            'created_at' => '2021-01-15 13:20:14',
        ]);
        LinkVisit::create([
            'link_id' => 1,
            'created_at' => '2021-01-12 13:20:14',
        ]);
        LinkVisit::create([
            'link_id' => 1,
            'created_at' => '2021-01-12 13:20:14',
        ]);
        LinkVisit::create([
            'link_id' => 1,
            'created_at' => '2021-01-12 13:20:14',
        ]);
        LinkVisit::create([
            'link_id' => 1,
            'created_at' => '2021-01-12 13:20:14',
        ]);
        LinkVisit::create([
            'link_id' => 1,
            'created_at' => '2021-01-12 13:20:14',
        ]);
        LinkVisit::create([
            'link_id' => 1,
            'created_at' => '2021-02-16 13:20:14',
        ]);
        LinkVisit::create([
            'link_id' => 1,
            'created_at' => '2021-02-16 13:20:14',
        ]);
        LinkVisit::create([
            'link_id' => 1,
            'created_at' => '2021-02-16 13:20:14',
        ]);
        LinkVisit::create([
            'link_id' => 1,
            'created_at' => '2021-02-16 13:20:14',
        ]);
        LinkVisit::create([
            'link_id' => 1,
            'created_at' => '2021-02-16 13:20:14',
        ]);
        LinkVisit::create([
            'link_id' => 1,
            'created_at' => '2021-02-16 13:20:14',
        ]);
        LinkVisit::create([
            'link_id' => 1,
            'created_at' => '2021-02-16 13:20:14',
        ]);
        LinkVisit::create([
            'link_id' => 1,
            'created_at' => '2021-02-16 13:20:14',
        ]);
        LinkVisit::create([
            'link_id' => 1,
            'created_at' => '2021-02-16 13:20:14',
        ]);
        LinkVisit::create([
            'link_id' => 1,
            'created_at' => '2021-02-16 13:20:14',
        ]);

        LinkVisit::create([
            'link_id' => 1,
            'created_at' => '2021-02-18 13:20:14',
        ]);

        LinkVisit::create([
            'link_id' => 1,
            'created_at' => '2021-02-18 13:20:14',
        ]);
        LinkVisit::create([
            'link_id' => 1,
            'created_at' => '2021-02-18 13:20:14',
        ]);
        LinkVisit::create([
            'link_id' => 1,
            'created_at' => '2021-02-18 13:20:14',
        ]);
        LinkVisit::create([
            'link_id' => 1,
            'created_at' => '2021-02-18 13:20:14',
        ]);
        LinkVisit::create([
            'link_id' => 1,
            'created_at' => '2021-02-18 13:20:14',
        ]);

        $links = factory(Link::class, 3)->create();
        $linkVisits = factory(LinkVisit::class, 15)->create();
    }
}
