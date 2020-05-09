<?php

use App\Http\Controllers\Backend\DashboardController;
use App\Http\Controllers\Backend\ProfileController;

// All route names are prefixed with 'admin.'.
Route::redirect('/', '/admin/dashboard', 301);
Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard');
Route::resources([
    'projects' => 'ProjectController',
    'jobs' => 'JobController',
    'profiles' => 'ProfileController'
]);

//Profile activate
Route::patch('profiles/{profile}/activate', [ProfileController::class, 'activate'])->name('profiles.activate');
