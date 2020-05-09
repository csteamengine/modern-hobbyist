<?php

namespace App\Http\Controllers\Backend;

use App\Events\Backend\Project\ProjectDeleted;
use App\Exceptions\GeneralException;
use App\Http\Controllers\Controller;
use App\Http\Requests\Backend\Project\ManageProjectRequest;
use App\Http\Requests\Backend\Project\StoreProjectRequest;
use App\Http\Requests\Backend\Project\UpdateProjectRequest;
use App\Models\Image;
use App\Models\Project;
use App\Repositories\Backend\ProjectRepository;
use Illuminate\Contracts\View\Factory;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Storage;
use Illuminate\View\View;
use PHPColorExtractor\PHPColorExtractor;
use Throwable;


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
     * @return Factory|View
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
     * @throws Throwable
     * @return mixed
     */
    public function store(StoreProjectRequest $request)
    {
        $storeSuccess = $this->projectRepository->create($request->all());

        if(!$storeSuccess){
            return redirect()->back()->withFlashWarning('Failed to create the project');
        }

        $imagesSuccess = update_images($request, $storeSuccess, $this);

        if(!$imagesSuccess){
            return redirect()->back()->withFlashWarning('Failed to upload some of the project images.');
        }

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
     * @param ManageProjectRequest $request
     * @param Project $project
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
     * @throws GeneralException
     * @throws Throwable
     * @return mixed
     */
    public function update(UpdateProjectRequest $request, Project $project)
    {
        $updateSuccess = $this->projectRepository->update($project, $request->all());

        if(!$updateSuccess){
            return redirect()->back()->withFlashWarning('Failed to update the project');
        }

        $imagesSuccess = update_images($request, $updateSuccess, $this);

        if(!$imagesSuccess){
            return redirect()->back()->withFlashWarning('Failed to upload some of the project images.');
        }

        return redirect()->back()->withFlashSuccess(__('alerts.backend.projects.updated'));
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
