<?php

namespace App\Http\Controllers\Backend;

use App\Events\Backend\Profile\ProfileDeleted;
use App\Exceptions\GeneralException;
use App\Http\Requests\Backend\Profile\ManageProfileRequest;
use App\Http\Requests\Backend\Profile\StoreProfileRequest;
use App\Http\Requests\Backend\Profile\UpdateProfileRequest;
use App\Models\Profile;
use App\Repositories\Backend\ProfileRepository;
use DB;
use Exception;
use Illuminate\Contracts\View\Factory;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Http\Response;
use Illuminate\View\View;
use Throwable;

class ProfileController extends Controller
{

    /**
     * @var ProfileRepository
     */
    protected $profileRepository;

    /**
     * ProfileController constructor.
     *
     * @param ProfileRepository $profileRepository
     */
    public function __construct(ProfileRepository $profileRepository)
    {
        $this->profileRepository = $profileRepository;
    }
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        return view('backend.profiles.index')
            ->withProfiles($this->profileRepository->getAll());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Factory|View
     */
    public function create()
    {
        return view('backend.profiles.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return Response
     * @throws Throwable
     */
    public function store(StoreProfileRequest $request)
    {
        $storeSuccess = $this->profileRepository->create($request->all());

        if(!$storeSuccess){
            return redirect()->back()->withFlashWarning('Failed to create the profile');
        }

        $imagesSuccess = update_images($request, $storeSuccess, $this);

        if(!$imagesSuccess){
            return redirect()->back()->withFlashWarning('Failed to upload some of the profile images.');
        }

        return redirect()->route('admin.profiles.index')->withFlashSuccess(__('alerts.backend.profiles.created'));
    }

    /**
     * Display the specified resource.
     *
     * @param ManageProfileRequest $request
     * @param Profile $profile
     * @return Response
     */
    public function show(ManageProfileRequest $request, Profile $profile)
    {
        return view('backend.profiles.show')
            ->withProfile($profile);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param ManageProfileRequest $request
     * @param Profile $profile
     * @return Response
     */
    public function edit(ManageProfileRequest $request, Profile $profile)
    {
        return view('backend.profiles.edit')
            ->withProfile($profile);
    }

    /**
     * @param UpdateProfileRequest $request
     * @param Profile $profile
     * @return mixed
     * @throws Throwable
     * @throws GeneralException
     */
    public function update(UpdateProfileRequest $request, Profile $profile)
    {
        //TODO upload about image
        //TODO upload resume file
        //TODO upload background video

        $updateSuccess = $this->profileRepository->update($profile, $request->all());

        if(!$updateSuccess){
            return redirect()->back()->withFlashWarning('Failed to update the profile');
        }

        $imagesSuccess = update_images($request, $updateSuccess, $this);

        if(!$imagesSuccess){
            return redirect()->back()->withFlashWarning('Failed to upload some of the profile images.');
        }

        return redirect()->back()->withFlashSuccess(__('alerts.backend.profiles.updated'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Profile $profile
     * @return Response
     * @throws Exception
     */
    public function destroy(Profile $profile)
    {
        if(!$profile->is_active){

            $profile->delete();

            event(new ProfileDeleted($profile));

            return redirect()->back()->withFlashSuccess(__('alerts.backend.profiles.deleted'));
        }
        return redirect()->back()->withFlashWarning(__('alerts.backend.profiles.delete_failed'));
    }

    /**
     * @param Profile $profile
     * @return mixed
     * @throws GeneralException
     * @throws Throwable
     *
     * Can only activate the profile that is clicked because we don't want to have the
     * situation where a profile is inactive. At worst, when to click the active profile, it just re-activates it.
     */
    public function activate(Profile $profile){
        if($profile){

            Profile::where('is_active', true)->update(['is_active' => false]);

            $profile->is_active = true;

            $updateSuccess = $profile->save();

            if($updateSuccess){
                return redirect()->back()->withFlashSuccess(__('alerts.backend.profiles.activated'));
            }
        }
        return redirect()->back()->withFlashWarning(__('alerts.backend.profiles.activation_failed'));
    }
}
