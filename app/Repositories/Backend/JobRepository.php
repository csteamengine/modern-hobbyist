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
//            $table->string('title');
//            $table->string('short_description', 500)->nullable();
//            $table->text('description')->nullable();
//            $table->longText('page_content')->nullable();
//            $table->boolean('is_active')->default(true);
//            $table->timestamp('started_at')->nullable();
//            $table->timestamp('finished_at')->nullable();
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
//            $table->string('title');
//            $table->string('short_description', 500)->nullable();
//            $table->text('description')->nullable();
//            $table->longText('page_content')->nullable();
//            $table->boolean('is_active')->default(true);
//            $table->timestamp('started_at')->nullable();
//            $table->timestamp('finished_at')->nullable();
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
}
