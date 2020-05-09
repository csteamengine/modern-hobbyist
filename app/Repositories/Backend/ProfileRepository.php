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
                'name' => $data['name'],
                'about_title' => $data['about_title'],
                'is_active' => isset($data['is_active']) && $data['is_active'] === '1',
                'maintenance_mode_active' => isset($data['maintenance_mode_active']) && $data['maintenance_mode_active'] === '1',
                'contact_form_active' => isset($data['contact_form_active']) && $data['contact_form_active'] === '1',
                'contact_email' => $data['contact_email'],
                'resume_download_active' => isset($data['resume_download_active']) && $data['resume_download_active'] === '1',
                'background_video_active' => isset($data['background_video_active']) && $data['background_video_active'] === '1',
                'youtube_url' => friendly_url($data['youtube_url']),
                'github_url' => friendly_url($data['github_url']),
                'instagram_url' => friendly_url($data['instagram_url']),
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
                'name' => $data['name'],
                'about_title' => $data['about_title'],
                'short_about_description' => $data['short_about_description'],
                'about_page_content' => $data['about_page_content'],
                'is_active' => isset($data['is_active']) && $data['is_active'] === '1',
                'maintenance_mode_active' => isset($data['maintenance_mode_active']) && $data['maintenance_mode_active'] === '1',
                'contact_form_active' => isset($data['contact_form_active']) && $data['contact_form_active'] === '1',
                'contact_email' => $data['contact_email'],
                'resume_download_active' => isset($data['resume_download_active']) && $data['resume_download_active'] === '1',
                'background_video_active' => isset($data['background_video_active']) && $data['background_video_active'] === '1',
                'youtube_url' => friendly_url($data['youtube_url']),
                'github_url' => friendly_url($data['github_url']),
                'instagram_url' => friendly_url($data['instagram_url']),
            ])) {

                event(new ProfileUpdated($profile));

                return $profile;
            }

            throw new GeneralException(__('exceptions.backend.profiles.update_error'));
        });
    }
}
