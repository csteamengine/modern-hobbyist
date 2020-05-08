<?php

namespace App\Http\Controllers\Backend;

use App\Events\Backend\Job\JobDeleted;
use App\Http\Controllers\Controller;
use App\Http\Requests\Backend\Job\ManageJobRequest;
use App\Http\Requests\Backend\Job\StoreJobRequest;
use App\Http\Requests\Backend\Job\UpdateJobRequest;
use App\Models\Image;
use App\Models\Job;
use App\Repositories\Backend\JobRepository;
use Illuminate\Contracts\View\Factory;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\View\View;
use PHPColorExtractor\PHPColorExtractor;


/**
 * Class JobController.
 */
class JobController extends Controller
{
    /**
     * @var JobRepository
     */
    protected $jobRepository;

    /**
     * JobController constructor.
     *
     * @param JobRepository $jobRepository
     */
    public function __construct(JobRepository $jobRepository)
    {
        $this->jobRepository = $jobRepository;
    }

    /**
     * @return Factory|View
     */
    public function index()
    {
        return view('backend.jobs.index')
            ->withJobs($this->jobRepository->all());
    }

    /**
     * @return mixed
     */
    public function create()
    {
        return view('backend.jobs.create');
    }

    /**
     * @param StoreJobRequest $request
     *
     * @throws \Throwable
     * @return mixed
     */
    public function store(StoreJobRequest $request)
    {


        $storeSuccess = $this->jobRepository->create($request->all());
        $imagesSuccess = $this->updateImages($request, $storeSuccess);

        if(!$storeSuccess){
            return redirect()->back()->withFlashWarning('Failed to create the project');
        }

        if(!$imagesSuccess){
            return redirect()->back()->withFlashWarning('Failed to upload some of the project images.');
        }

        return redirect()->route('admin.jobs.index')->withFlashSuccess(__('alerts.backend.jobs.created'));
    }

    /**
     * @param ManageJobRequest $request
     * @param Job              $job
     *
     * @return mixed
     */
    public function show(ManageJobRequest $request, Job $job)
    {
        return view('backend.jobs.show')
            ->withJob($job);
    }

    /**
     * @param ManageJobRequest $request
     * @param Job $job
     *
     * @return mixed
     */
    public function edit(ManageJobRequest $request, Job $job)
    {
        return view('backend.jobs.edit')
            ->withJob($job);
    }

    /**
     * @param UpdateJobRequest $request
     * @param Job              $job
     *
     * @throws \App\Exceptions\GeneralException
     * @throws \Throwable
     * @return mixed
     */
    public function update(UpdateJobRequest $request, Job $job)
    {
        $updateSuccess = $this->jobRepository->update($job, $request->all());
        $imagesSuccess = $this->updateImages($request, $job);

        if(!$updateSuccess){
            return redirect()->back()->withFlashWarning('Failed to update the project');
        }

        if(!$imagesSuccess){
            return redirect()->back()->withFlashWarning('Failed to upload some of the project images.');
        }

        return redirect()->route('admin.jobs.index')->withFlashSuccess(__('alerts.backend.jobs.updated'));
    }

    /**
     * @param ManageJobRequest $request
     * @param Job              $job
     *
     * @throws \Exception
     * @return mixed
     */
    public function destroy(ManageJobRequest $request, Job $job)
    {
        $job->delete();

        event(new JobDeleted($job));

        return redirect()->route('admin.jobs.index')->withFlashSuccess(__('alerts.backend.jobs.deleted'));
    }

    public function updateImages(FormRequest $request, Job $job){
        $existing_images = $job->images()->get();
        $success = true;
        //remove deleted images
        if($request->has('existing_images')){
            $input = $request['existing_images'];
            foreach($existing_images as $currImage){
                if(!in_array($currImage->id, $input)){
                    $job->images()->detach($currImage);
                }
            }

            $count = 0;
            foreach($input as $id){
                $image = $job->images()->where('images.id', $id)->get();
                $job->images()->updateExistingPivot($image, ['order' => $count]);
                $count++;
            }

        }else if($existing_images){
            //We have existing images, but none came through in the form request
            foreach($existing_images as $currImage){
                $job->images()->detach($currImage);
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

                    $job_image = $job->images()->save($image, ['order' => $existing_images->count()]);

                    if(!$job_image){
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
