<?php

namespace App\Http\Controllers\Backend;

use App\Events\Backend\Project\ProjectDeleted;
use App\Http\Controllers\Controller;
use App\Http\Requests\Backend\Project\ManageProjectRequest;
use App\Http\Requests\Backend\Project\StoreProjectRequest;
use App\Http\Requests\Backend\Project\UpdateProjectRequest;
use App\Models\Project;
use App\Repositories\Backend\ProjectRepository;


/**
 * Class ProjectController.
 */
class ProjectController extends Controller
{
    /**
     * @var ProjectRepository
     */
    protected $projectRepository;

    /**
     * ProjectController constructor.
     *
     * @param ProjectRepository $projectRepository
     */
    public function __construct(ProjectRepository $projectRepository)
    {
        $this->projectRepository = $projectRepository;
    }

    /**
     * @param ManageProjectRequest $request
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index(ManageProjectRequest $request)
    {
        return view('backend.projects.index')
            ->withProjects($this->projectRepository->getAll());
    }

    /**
     * @param ManageProjectRequest    $request
     *
     * @return mixed
     */
    public function create(ManageProjectRequest $request)
    {
        return view('backend.projects.create');
    }

    /**
     * @param StoreProjectRequest $request
     *
     * @throws \Throwable
     * @return mixed
     */
    public function store(StoreProjectRequest $request)
    {
        $this->projectRepository->create($request->all());

        return redirect()->route('admin.projects.index')->withFlashSuccess(__('alerts.backend.projects.created'));
    }

    /**
     * @param ManageProjectRequest $request
     * @param Project              $project
     *
     * @return mixed
     */
    public function show(ManageProjectRequest $request, Project $project)
    {
        return view('backend.projects.show')
            ->withProject($project);
    }

    /**
     * @param ManageProjectRequest    $request
     * @param RoleRepository       $roleRepository
     * @param PermissionRepository $permissionRepository
     * @param Project                 $project
     *
     * @return mixed
     */
    public function edit(ManageProjectRequest $request, Project $project)
    {
        return view('backend.projects.edit')
            ->withProject($project);
    }

    /**
     * @param UpdateProjectRequest $request
     * @param Project              $project
     *
     * @throws \App\Exceptions\GeneralException
     * @throws \Throwable
     * @return mixed
     */
    public function update(UpdateProjectRequest $request, Project $project)
    {
        $this->projectRepository->update($project, $request->all());

        return redirect()->route('admin.projects.index')->withFlashSuccess(__('alerts.backend.projects.updated'));
    }

    /**
     * @param ManageProjectRequest $request
     * @param Project              $project
     *
     * @throws \Exception
     * @return mixed
     */
    public function destroy(ManageProjectRequest $request, Project $project)
    {
        $project->delete();

        event(new ProjectDeleted($project));

        return redirect()->route('admin.projects.index')->withFlashSuccess(__('alerts.backend.projects.deleted'));
    }
}
