<?php

namespace App\Http\Controllers\Backend;

use App\Models\Job;
use App\Models\Project;
use Carbon\Carbon;
use App\Models\LinkVisit;
use Illuminate\View\View;
use App\Http\Controllers\Controller;

/**
 * Class DashboardController.
 */
class DashboardController extends Controller
{
    /**
     * @return View
     */
    public function index()
    {
        $linkVisits = LinkVisit::where('created_at', '>=', Carbon::now()->subDay())->count();
        $projects = Project::where('is_active', '=', 1)->count();
        $jobs = Job::where('is_active', '=', 1)->count();

        return view('backend.dashboard')->withVisits($linkVisits)->withProjects($projects)->withJobs($jobs);
    }
}
