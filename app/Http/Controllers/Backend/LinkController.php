<?php

namespace App\Http\Controllers\Backend;

use Exception;
use Illuminate\Http\Request;
use Throwable;
use App\Models\Link;
use App\Models\Image;
use Illuminate\View\View;
use Illuminate\Http\Response;
use Illuminate\Routing\Redirector;
use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Contracts\View\Factory;
use App\Events\Backend\Link\LinkDeleted;
use PHPColorExtractor\PHPColorExtractor;
use Illuminate\Foundation\Http\FormRequest;
use App\Repositories\Backend\LinkRepository;
use Illuminate\Validation\ValidationException;
use Illuminate\Contracts\Foundation\Application;
use App\Http\Requests\Backend\Link\StoreLinkRequest;
use App\Http\Requests\Backend\Link\ManageLinkRequest;
use App\Http\Requests\Backend\Link\UpdateLinkRequest;

class LinkController extends Controller
{
    /**
     * @var LinkRepository
     */
    protected $linkRepository;

    /**
     * LinkController constructor.
     *
     * @param LinkRepository $linkRepository
     */
    public function __construct(LinkRepository $linkRepository)
    {
        $this->linkRepository = $linkRepository;
    }

    /**
     * Display a listing of the resource.
     *
     * @return View
     */
    public function index(): View
    {
        return view('backend.links.index')
            ->withLinks($this->linkRepository->getAll());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Application|Factory|Response|View
     */
    public function create()
    {
        return view('backend.links.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param StoreLinkRequest $request
     * @throws Throwable
     * @return Redirector|RedirectResponse
     */
    public function store(StoreLinkRequest $request)
    {
        $storeSuccess = $this->linkRepository->create($request->all());

        //Upload about image
        $about_image_success = $this->upload_image($request, $storeSuccess);

        if (! $storeSuccess) {
            return redirect()->back()->withFlashWarning('Failed to create the link');
        }

        //Determine if about image uploaded correctly
        if (! $about_image_success) {
            return redirect()->back()->withFlashWarning('Failed to upload the about image.');
        }

        return redirect()->route('admin.links.index')->withFlashSuccess(__('alerts.backend.links.created'));
    }

    /**
     * Display the specified resource.
     *
     * @param ManageLinkRequest $request
     * @param Link $link
     * @return View
     */
    public function show(ManageLinkRequest $request, Link $link): View
    {
        return view('backend.links.show')
            ->withLink($link);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param ManageLinkRequest $request
     * @param Link $link
     * @return View
     */
    public function edit(ManageLinkRequest $request, Link $link): View
    {
        return view('backend.links.edit')
            ->withLink($link);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param UpdateLinkRequest $request
     * @param Link $link
     * @throws Throwable
     * @return Redirector|RedirectResponse
     */
    public function update(UpdateLinkRequest $request, Link $link)
    {
        $updateSuccess = $this->linkRepository->update($link, $request->all());

        //Upload about image
        $about_image_success = $this->upload_image($request, $link);

        if (! $updateSuccess) {
            return redirect()->back()->withFlashWarning('Failed to update the link');
        }

        //Determine if about image uploaded correctly
        if (! $about_image_success) {
            return redirect()->back()->withFlashWarning('Failed to upload the about image.');
        }

        return redirect()->back()->withFlashSuccess(__('alerts.backend.links.updated'));
    }

    /**
     * @param FormRequest $request
     * @param Link $link
     * @throws ValidationException
     * @return bool
     */
    public function upload_image(FormRequest $request, Link $link): bool
    {
        if ($request->hasfile('about_image_id')) {
            $this->validate($request, [
                'about_image_id' => 'required',
                'images[].*' => 'image|mimes:jpg,png,tif,gif',
            ]);
            $file = $request->file('about_image_id');

            $extractor = new PHPColorExtractor();
            $extractor->setImage($file->getPathname())->setTotalColors(5)->setGranularity(10);
            $palette = $extractor->extractPalette();
            $upload = $file->store('images/about');

            if ($upload) {
                $image = Image::create([
                    'url' => env('APP_URL').'/storage/'.$upload,
                    'small_url' => $upload,
                    'color' => $palette[count($palette) - 1],
                ]);

                if ($image) {
                    $link->image_id = $image->id;

                    if ($link->save()) {
                        return true;
                    }
                }
            }

            return false;
        }
        //Return true because we didn't attempt an upload.
        return true;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param ManageLinkRequest $request
     * @param Link $link
     * @throws Exception
     * @return Redirector|RedirectResponse
     */
    public function destroy(ManageLinkRequest $request, Link $link)
    {
        $link->delete();

        event(new LinkDeleted($link));

        return redirect()->route('admin.links.index')->withFlashSuccess(__('alerts.backend.links.deleted'));
    }

    /**
     * @param Link $link
     * @throws Throwable
     *
     * Can only activate the link that is clicked because we don't want to have the
     * situation where a link is inactive. At worst, when to click the active link, it just re-activates it.
     * @return mixed
     */
    public function activate(Link $link)
    {
        if ($link) {
            $link->is_active = ! $link->is_active;

            $updateSuccess = $link->save();

            if ($updateSuccess) {
                return redirect()->back()->withFlashSuccess(__('alerts.backend.links.activated'));
            }
        }

        return redirect()->back()->withFlashWarning(__('alerts.backend.links.activation_failed'));
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function reorder(Request $request)
    {
        $validatedJSON = $request->validate([
            'links' => 'required|JSON',
        ]);

        $data = json_decode($validatedJSON['links']);

        foreach ($data as $JSONlink) {
            $link = Link::find($JSONlink->link_id);
            $link->priority = $JSONlink->priority;

            if (! $link->save()) {
                return response()->json([
                    'message' => 'Failed to update the link priority!',
                ], 400);
            }
        }

        return response()->json([
            'message' => 'Successfully updated the link priority!',
        ], 200);
    }
}
