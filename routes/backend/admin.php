<?php

use App\Http\Controllers\Backend\ProfileController;
use App\Http\Controllers\Backend\DashboardController;
use App\Http\Controllers\Backend\LinkController;

// All route names are prefixed with 'admin.'.
Route::redirect('/', '/admin/dashboard', 301);
Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard');
Route::resources([
    'projects' => 'ProjectController',
    'jobs' => 'JobController',
    'profiles' => 'ProfileController',
    'links' => 'LinkController',
]);


Route::post('/reorder', [LinkController::class, 'reorder'])->name('links.reorder');

//Profile activate
Route::patch('profiles/{profile}/activate', [ProfileController::class, 'activate'])->name('profiles.activate');
Route::patch('links/{link}/activate', [LinkController::class, 'activate'])->name('links.activate');
