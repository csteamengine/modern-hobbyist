<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model;
use App\Models\Link;
use Faker\Generator as Faker;

$factory->define(Link::class, function (Faker $faker) {
    return [
        'title' => $faker->title,
        'url' => $faker->url,
        'description' => $faker->title,
        'start_date' => $faker->dateTime,
        'end_date' => $faker->dateTime,
        'image_id' => 1,
        'priority' => 1,
    ];
});
