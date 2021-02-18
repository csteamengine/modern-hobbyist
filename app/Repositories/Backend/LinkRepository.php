<?php

namespace App\Repositories\Backend;

use Exception;
use Throwable;
use App\Models\Link;
use Illuminate\Support\Facades\DB;
use App\Exceptions\GeneralException;
use App\Repositories\BaseRepository;
use App\Events\Backend\Link\LinkCreated;
use App\Events\Backend\Link\LinkUpdated;
use Illuminate\Pagination\LengthAwarePaginator;

/**
 * Class LinkRepository.
 */
class LinkRepository extends BaseRepository
{
    /**
     * @return string
     */
    public function model()
    {
        return Link::class;
    }

    /**
     * @param int    $paged
     * @param string $orderBy
     * @param string $sort
     *
     * @return mixed
     */
    public function getAll($paged = 25, $orderBy = 'priority', $sort = 'asc') : LengthAwarePaginator
    {
        return $this->model
//            ->with('image')
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
    public function getDeletedPaginated($paged = 25, $orderBy = 'priority', $sort = 'desc') : LengthAwarePaginator
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
     * @throws Exception
     * @throws Throwable
     * @return Link
     */
    public function create(array $data) : Link
    {
        return DB::transaction(function () use ($data) {
            $link = parent::create([
                'title' => $data['title'],
                'url' => $data['url'],
                'priority' => 0,
                'description' => $data['description'],
                'start_date' => $data['start_date'] ? date('Y-m-d H:i:s', strtotime($data['start_date'])) : null,
                'end_date' => $data['end_date'] ? date('Y-m-d H:i:s', strtotime($data['end_date'])) : null,
                'is_active' => isset($data['is_active']) && $data['is_active'] === '1',
            ]);

            if ($link) {
                event(new LinkCreated($link));

                return $link;
            }

            throw new GeneralException(__('exceptions.backend.links.create_error'));
        });
    }

    /**
     * @param Link  $link
     * @param array $data
     *
     * @throws Exception
     * @throws Throwable
     * @return Link
     */
    public function update(Link $link, array $data) : Link
    {
        return DB::transaction(function () use ($link, $data) {
            if ($link->update([
                'title' => $data['title'],
                'url' => $data['url'],
                'description' => $data['description'],
                'start_date' => $data['start_date'] ? date('Y-m-d H:i:s', strtotime($data['start_date'])) : null,
                'end_date' => $data['end_date'] ? date('Y-m-d H:i:s', strtotime($data['end_date'])) : null,
                'is_active' => isset($data['is_active']) && $data['is_active'] === '1',
            ])) {
                event(new LinkUpdated($link));

                return $link;
            }

            throw new GeneralException(__('exceptions.backend.links.update_error'));
        });
    }
}
