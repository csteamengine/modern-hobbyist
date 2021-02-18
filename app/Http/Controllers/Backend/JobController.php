<?php

namespace App\Http\Controllers\Backend;

use App\Models\Job;
use Illuminate\View\View;
use App\Http\Controllers\Controller;
use App\Events\Backend\Job\JobDeleted;
use Illuminate\Contracts\View\Factory;
use App\Repositories\Backend\JobRepository;
use App\Http\Requests\Backend\Job\StoreJobRequest;
use App\Http\Requests\Backend\Job\ManageJobRequest;
use App\Http\Requests\Backend\Job\UpdateJobRequest;

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

        if (! $storeSuccess) {
            return redirect()->back()->withFlashWarning('Failed to create the job');
        }

        $imagesSuccess = update_images($request, $storeSuccess, $this);

        if (! $imagesSuccess) {
            return redirect()->back()->withFlashWarning('Failed to upload some of the job images.');
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

        if (! $updateSuccess) {
            return redirect()->back()->withFlashWarning('Failed to update the job');
        }

        $imagesSuccess = update_images($request, $updateSuccess, $this);

        if (! $imagesSuccess) {
            return redirect()->back()->withFlashWarning('Failed to upload some of the job images.');
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
}
