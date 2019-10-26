<?php

namespace App\Repositories\Backend;

use App\Events\Backend\Project\ProjectCreated;
use App\Events\Backend\Project\ProjectDeleted;
use App\Events\Backend\Project\ProjectRestored;
use App\Events\Backend\Project\ProjectUpdated;
use App\Models\Project;
use Illuminate\Support\Facades\DB;
use App\Exceptions\GeneralException;
use App\Repositories\BaseRepository;
use Illuminate\Pagination\LengthAwarePaginator;

/**
 * Class ProjectRepository.
 */
class ProjectRepository extends BaseRepository
{
    /**
     * @return string
     */
    public function model()
    {
        return Project::class;
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
     * @return Project
     */
    public function create(array $data) : Project
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
            $project = parent::create([
                'first_name' => $data['first_name'],
                'last_name' => $data['last_name'],
                'email' => $data['email'],
                'password' => $data['password'],
                'active' => isset($data['active']) && $data['active'] === '1',
                'confirmation_code' => md5(uniqid(mt_rand(), true)),
                'confirmed' => isset($data['confirmed']) && $data['confirmed'] === '1',
            ]);

            if ($project) {

                event(new ProjectCreated($project));

                return $project;
            }

            throw new GeneralException(__('exceptions.backend.projects.create_error'));
        });
    }

    /**
     * @param Project  $project
     * @param array $data
     *
     * @throws GeneralException
     * @throws \Exception
     * @throws \Throwable
     * @return Project
     */
    public function update(Project $project, array $data) : Project
    {
//        $table->string('title');
//        $table->string('short_description', 500)->nullable();
//        $table->text('description')->nullable();
//        $table->longText('page_content')->nullable();
//        $table->boolean('is_active')->default(true);
//        $table->timestamp('started_at')->nullable();
//        $table->timestamp('finished_at')->nullable();
        return DB::transaction(function () use ($project, $data) {
            if ($project->update([
                'first_name' => $data['first_name'],
                'last_name' => $data['last_name'],
                'email' => $data['email'],
            ])) {

                event(new ProjectUpdated($project));

                return $project;
            }

            throw new GeneralException(__('exceptions.backend.projects.update_error'));
        });
    }
}
