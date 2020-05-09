<?php

namespace App\Repositories\Backend;

use App\Events\Backend\Profile\ProfileCreated;
use App\Events\Backend\Profile\ProfileDeleted;
use App\Events\Backend\Profile\ProfileUpdated;
use App\Models\Profile;
use Illuminate\Support\Facades\DB;
use App\Exceptions\GeneralException;
use App\Repositories\BaseRepository;
use Illuminate\Pagination\LengthAwarePaginator;

/**
 * Class ProfileRepository.
 */
class ProfileRepository extends BaseRepository
{
    /**
     * @return string
     */
    public function model()
    {
        return Profile::class;
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
     * @return Profile
     */
    public function create(array $data) : Profile
    {
        return DB::transaction(function () use ($data) {
            $profile = parent::create([
                'title' => $data['title'],
                'short_description' => $data['short_description'],
                'page_content' => $data['page_content'],
                'is_active' => isset($data['is_active']) && $data['is_active'] === '1',
                'started_at' => $data['started_at'],
                'finished_at' => $data['finished_at'],
            ]);

            if ($profile) {

                event(new ProfileCreated($profile));

                return $profile;
            }

            throw new GeneralException(__('exceptions.backend.profiles.create_error'));
        });
    }

    /**
     * @param Profile  $profile
     * @param array $data
     *
     * @throws GeneralException
     * @throws \Exception
     * @throws \Throwable
     * @return Profile
     */
    public function update(Profile $profile, array $data) : Profile
    {
        return DB::transaction(function () use ($profile, $data) {
            if ($profile->update([
                'title' => $data['title'],
                'short_description' => $data['short_description'],
                'page_content' => $data['page_content'],
                'is_active' => isset($data['is_active']) && $data['is_active'] === '1',
                'started_at' => $data['started_at'],
                'finished_at' => $data['finished_at'],
            ])) {

                event(new ProfileUpdated($profile));

                return $profile;
            }

            throw new GeneralException(__('exceptions.backend.profiles.update_error'));
        });
    }
}
