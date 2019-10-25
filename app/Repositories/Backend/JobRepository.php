<?php

namespace App\Repositories\Backend\Auth;

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
    public function getActivePaginated($paged = 25, $orderBy = 'created_at', $sort = 'desc') : LengthAwarePaginator
    {
        return $this->model
            ->with('images')
            ->active()
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
    public function getInactivePaginated($paged = 25, $orderBy = 'created_at', $sort = 'desc') : LengthAwarePaginator
    {
        return $this->model
            ->with('images')
            ->active(false)
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
            //TODO update the information to put in here
            $job = parent::create([
                'first_name' => $data['first_name'],
                'last_name' => $data['last_name'],
                'email' => $data['email'],
                'password' => $data['password'],
                'active' => isset($data['active']) && $data['active'] === '1',
                'confirmation_code' => md5(uniqid(mt_rand(), true)),
                'confirmed' => isset($data['confirmed']) && $data['confirmed'] === '1',
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
                'first_name' => $data['first_name'],
                'last_name' => $data['last_name'],
                'email' => $data['email'],
            ])) {

                event(new JobUpdated($job));

                return $job;
            }

            throw new GeneralException(__('exceptions.backend.jobs.update_error'));
        });
    }

    /**
     * @param Job $job
     *
     * @throws GeneralException
     * @throws \Exception
     * @throws \Throwable
     * @return Job
     */
    public function delete(Job $job) : Job
    {
        if ($job->deleted_at === null) {
            throw new GeneralException(__('exceptions.backend.jobs.delete_first'));
        }

        return DB::transaction(function () use ($job) {
            // Delete associated relationships
            //TODO delete the associated relationships

            if ($job->delete()) {
                event(new JobDeleted($job));

                return $job;
            }

            throw new GeneralException(__('exceptions.backend.jobs.delete_error'));
        });
    }

    /**
     * @param Job $job
     *
     * @throws GeneralException
     * @return Job
     */
    public function restore(Job $job) : Job
    {
        if ($job->deleted_at === null) {
            throw new GeneralException(__('exceptions.backend.jobs.cant_restore'));
        }

        if ($job->restore()) {
            event(new JobRestored($job));

            return $job;
        }

        throw new GeneralException(__('exceptions.backend.jobs.restore_error'));
    }
}
