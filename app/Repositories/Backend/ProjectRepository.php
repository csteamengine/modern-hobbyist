<?php

namespace App\Repositories\Backend;

use App\Events\Backend\Project\ProjectCreated;
use App\Events\Backend\Project\ProjectDeleted;
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
     * @return Project
     */
    public function create(array $data) : Project
    {
        return DB::transaction(function () use ($data) {
            $project = parent::create([
                'title' => $data['title'],
                'short_description' => $data['short_description'],
                'description' => $data['description'],
//                'page_content' => $data['page_content'],
                'project_url' => $data['project_url'],
                'is_active' => isset($data['is_active']) && $data['is_active'] === '1',
                'started_at' => $data['started_at'],
                'finished_at' => $data['finished_at'],
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
        return DB::transaction(function () use ($project, $data) {
            if ($project->update([
                'title' => $data['title'],
                'short_description' => $data['short_description'],
                'description' => $data['description'],
                'page_content' => $data['page_content'],
                'project_url' => $data['project_url'],
                'is_active' => isset($data['is_active']) && $data['is_active'] === '1',
                'started_at' => $data['started_at'],
                'finished_at' => $data['finished_at'],
            ])) {

                event(new ProjectUpdated($project));

                return $project;
            }

            throw new GeneralException(__('exceptions.backend.projects.update_error'));
        });
    }
}
