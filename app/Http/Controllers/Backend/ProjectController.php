<?php

namespace App\Http\Controllers\Backend;

use App\Events\Backend\Project\ProjectDeleted;
use App\Http\Controllers\Controller;
use App\Http\Requests\Backend\Project\ManageProjectRequest;
use App\Http\Requests\Backend\Project\StoreProjectRequest;
use App\Http\Requests\Backend\Project\UpdateProjectRequest;
use App\Models\Image;
use App\Models\Project;
use App\Repositories\Backend\ProjectRepository;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Storage;
use PHPColorExtractor\PHPColorExtractor;


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
        $storeSuccess = $this->projectRepository->create($request->all());
        $imagesSuccess = $this->updateImages($request, $storeSuccess);

        if(!$storeSuccess){
            return redirect()->back()->withFlashWarning('Failed to create the project');
        }

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
     * @throws \App\Exceptions\GeneralException
     * @throws \Throwable
     * @return mixed
     */
    public function update(UpdateProjectRequest $request, Project $project)
    {
        $updateSuccess = $this->projectRepository->update($project, $request->all());
        $imagesSuccess = $this->updateImages($request, $project);

        if(!$updateSuccess){
            return redirect()->back()->withFlashWarning('Failed to update the project');
        }

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

    public function updateImages(FormRequest $request, Project $project){
        $existing_images = $project->images()->get();
        $success = true;
        //remove deleted images
        if($request->has('existing_images')){
            $input = $request['existing_images'];
            foreach($existing_images as $currImage){
                if(!in_array($currImage->id, $input)){
                    $project->images()->detach($currImage);
                }
            }

            $count = 0;
            foreach($input as $id){
                $image = $project->images()->where('images.id', $id)->get();
                $project->images()->updateExistingPivot($image, ['order' => $count]);
                $count++;
            }

        }else if($existing_images){
            //We have existing images, but none came through in the form request
            foreach($existing_images as $currImage){
                $project->images()->detach($currImage);
            }
        }

        //Add new images
        if($request->hasfile('images'))
        {
            $this->validate($request, [
                'images' => 'required',
                'images[].*' => 'image|mimes:jpg,png,tif,gif'
            ]);
            foreach($request->file('images') as $file)
            {
                $extractor = new PHPColorExtractor();
                $extractor->setImage($file->getPathname())->setTotalColors(5)->setGranularity(10);
                $palette = $extractor->extractPalette();
                $upload = $file->store('images/projects');
                if($upload){
                    $image = Image::create([
                        'url' => env('APP_URL').'/storage/'.$upload,
                        'small_url' => $upload,
                        'color' => $palette[sizeof($palette)-1]
                    ]);

                    if(!$image){
                        $success = false;
                    }

                    $project_image = $project->images()->save($image, ['order' => $existing_images->count()]);

                    if(!$project_image){
                        $success = false;
                    }
                }
            }
        }

        if(!$success){
            return false;
        }
        return true;
    }
}
