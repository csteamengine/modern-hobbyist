<?php

namespace App\Http\Controllers\Backend;

use App\Events\Backend\Job\JobDeleted;
use App\Http\Controllers\Controller;
use App\Http\Requests\Backend\Job\ManageJobRequest;
use App\Http\Requests\Backend\Job\StoreJobRequest;
use App\Http\Requests\Backend\Job\UpdateJobRequest;
use App\Models\Job;
use App\Repositories\Backend\JobRepository;


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
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index()
    {
        return view('backend.jobs.index')
            ->withJobs($this->jobRepository->getActivePaginated(25, 'id', 'asc'));
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
        $this->jobRepository->create($request->only(
            'first_name',
            'last_name',
            'email',
            'password',
            'active',
            'confirmed',
            'confirmation_email',
            'roles',
            'permissions'
        ));

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
     * @param ManageJobRequest    $request
     * @param RoleRepository       $roleRepository
     * @param PermissionRepository $permissionRepository
     * @param Job                 $job
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
        $this->jobRepository->update($job, $request->only(
            'first_name',
            'last_name',
            'email',
            'roles',
            'permissions'
        ));

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
        $this->jobRepository->deleteById($job->id);

        event(new JobDeleted($job));

        return redirect()->route('admin.jobs.index')->withFlashSuccess(__('alerts.backend.jobs.deleted'));
    }
}
