<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Job;
use App\Models\Project;
use Illuminate\Contracts\View\Factory;
use Illuminate\View\View;

/**
 * Class HomeController.
 */
class HomeController extends Controller
{
    /**
     * @return View
     */
    public function index()
    {
        $projects = Project::all()->take(10);
        $jobs = Job::all()->take(3);
        return view('frontend.index')->withProjects($projects)->withJobs($jobs);
    }

    /**
     * @return Factory|View
     */
    public function about(){
        return view('frontend.about');
    }
}
