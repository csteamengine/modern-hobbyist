<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Job;
use App\Models\Project;

/**
 * Class HomeController.
 */
class HomeController extends Controller
{
    /**
     * @return \Illuminate\View\View
     */
    public function index()
    {
        $projects = Project::all()->take(10);
        $jobs = Job::all()->take(3);
        return view('frontend.index')->withProjects($projects)->withJobs($jobs);
    }
}
