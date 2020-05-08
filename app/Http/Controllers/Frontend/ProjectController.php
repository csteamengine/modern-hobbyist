<?php

namespace App\Http\Controllers\Frontend;

use App\Models\Project;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\View\View;

class ProjectController extends Controller
{
    //TODO make sure to block certain actions -- Create, Store, Edit, Destroy, Update

    /**
     * Display a listing of the resource.
     *
     * @return View
     */
    public function index()
    {
        $projects = Project::orderBy('created_at', 'desc')->get();
        //Shows all projects (or at least a range and searchable)
        return view('frontend.projects.index')->withProjects($projects);
    }

    /**
     * Display the specified resource.
     *
     * @param Project $project
     * @return View
     */
    public function show(Project $project)
    {
        //Shows all the info on a single project.
        return view('frontend.projects.show')->with(['project' => $project]);
    }
}
