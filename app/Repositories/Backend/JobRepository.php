<?php

namespace App\Repositories\Backend;

use App\Events\Backend\Job\JobCreated;
use App\Events\Backend\Job\JobDeleted;
use App\Events\Backend\Job\JobUpdated;
use App\Models\Job;
use Illuminate\Support\Facades\DB;
use App\Exceptions\GeneralException;
use App\Repositories\BaseRepository;
use Illuminate\Pagination\LengthAwarePaginator;

/**
 * Class JobRepository.
 */
class JobRepository extends BaseRepository
{
    /**
     * @return string
     */
    public function model()
    {
        return Job::class;
    }

    /**
     * @param int    $paged
     * @param string $orderBy
     * @param string $sort
     *
     * @return mixed
     */
    public function getAll($paged = 25, $orderBy = 'created_at', $sort = 'desc') : LengthAwarePaginator
    {
        return $this->model
            ->with('images')
            ->orderBy($orderBy, $sort)
            ->paginate($paged);
    }


    /**
     * @param int    $paged
     * @param string $orderBy
     * @param string $sort
     *
     * @return LengthAwarePaginator
     */
    public function getDeletedPaginated($paged = 25, $orderBy = 'created_at', $sort = 'desc') : LengthAwarePaginator
    {
        return $this->model
            ->with('images')
            ->onlyTrashed()
            ->orderBy($orderBy, $sort)
            ->paginate($paged);
    }

    /**
     * @param array $data
     *
     * @throws \Exception
     * @throws \Throwable
     * @return Job
     */
    public function create(array $data) : Job
    {
        return DB::transaction(function () use ($data) {
            $job = parent::create([
                'title' => $data['title'],
                'company' => $data['company'],
                'company_url' => $data['company_url'],
                'short_description' => $data['short_description'],
                'description' => $data['description'],
                'page_content' => $data['page_content'],
                'is_active' => isset($data['is_active']) && $data['is_active'] === '1',
                'started_at' => $data['started_at'],
                'finished_at' => $data['finished_at'],
            ]);

            if ($job) {

                event(new JobCreated($job));

                return $job;
            }

            throw new GeneralException(__('exceptions.backend.jobs.create_error'));
        });
    }

    /**
     * @param Job  $job
     * @param array $data
     *
     * @throws GeneralException
     * @throws \Exception
     * @throws \Throwable
     * @return Job
     */
    public function update(Job $job, array $data) : Job
    {
        return DB::transaction(function () use ($job, $data) {
            if ($job->update([
                'title' => $data['title'],
                'company' => $data['company'],
                'company_url' => $data['company_url'],
                'short_description' => $data['short_description'],
                'description' => $data['description'],
                'page_content' => $data['page_content'],
                'is_active' => isset($data['is_active']) && $data['is_active'] === '1',
                'started_at' => $data['started_at'],
                'finished_at' => $data['finished_at'],
            ])) {

                event(new JobUpdated($job));

                return $job;
            }

            throw new GeneralException(__('exceptions.backend.jobs.update_error'));
        });
    }
}
