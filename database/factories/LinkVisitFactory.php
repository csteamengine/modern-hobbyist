<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\LinkVisit;
use Faker\Generator as Faker;

$factory->define(LinkVisit::class, function (Faker $faker) {
    return [
        'link_id' => 1,
        'created_at' => $faker->dateTimeBetween('2021-01-01'),
    ];
});
