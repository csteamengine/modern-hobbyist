<?php

namespace App\Http\Controllers\Backend;

use App\Events\Backend\Profile\ProfileDeleted;
use App\Exceptions\GeneralException;
use App\Http\Requests\Backend\Profile\ManageProfileRequest;
use App\Http\Requests\Backend\Profile\StoreProfileRequest;
use App\Http\Requests\Backend\Profile\UpdateProfileRequest;
use App\Models\Image;
use App\Models\Profile;
use App\Repositories\Backend\ProfileRepository;
use DB;
use Exception;
use Illuminate\Contracts\View\Factory;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Http\Response;
use Illuminate\View\View;
use PHPColorExtractor\PHPColorExtractor;
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
        //TODO upload resume file
        //TODO upload background video

        $updateSuccess = $this->profileRepository->update($profile, $request->all());

        if(!$updateSuccess){
            return redirect()->back()->withFlashWarning('Failed to update the profile');
        }

        //Upload about image
        $about_image_success = $this->upload_image($request, $profile);

        //Upload Background Video
        $background_video_success = $this->upload_video($request, $profile);

        //Upload Resume File
        $resume_success = $this->upload_file($request, $profile);

        $imagesSuccess = update_images($request, $updateSuccess, $this);

        if(!$about_image_success){
            return redirect()->back()->withFlashWarning('Failed to upload the about image.');
        }

        if(!$background_video_success){
            return redirect()->back()->withFlashWarning('Failed to upload the background video');
        }

        if(!$resume_success){
            return redirect()->back()->withFlashWarning('Failed to upload the resume');
        }

        if(!$imagesSuccess){
            return redirect()->back()->withFlashWarning('Failed to upload some of the profile images.');
        }

        return redirect()->back()->withFlashSuccess(__('alerts.backend.profiles.updated'));
    }

    public function upload_image(UpdateProfileRequest $request, Profile $profile){
        if($request->hasfile('about_image_id'))
        {
            $this->validate($request, [
                'about_image_id' => 'required',
                'images[].*' => 'image|mimes:jpg,png,tif,gif'
            ]);
            $file = $request->file('about_image_id');

            $extractor = new PHPColorExtractor();
            $extractor->setImage($file->getPathname())->setTotalColors(5)->setGranularity(10);
            $palette = $extractor->extractPalette();
            $upload = $file->store('images/about');
            if($upload){
                $image = Image::create([
                    'url' => env('APP_URL').'/storage/'.$upload,
                    'small_url' => $upload,
                    'color' => $palette[sizeof($palette)-1]
                ]);



                if($image){
                    $profile->image_id = $image->id;
                    if($profile->save()){
                        return true;
                    }
                }
            }
            return false;
        }
        //Return true because we didn't attempt an upload.
        return true;
    }

    public function upload_video(UpdateProfileRequest $request, Profile $profile){
        if($request->hasfile('background_video_file'))
        {
            $this->validate($request, [
                'background_video_file' => 'required | mimes:mp4,mov,ogg,qt | max:20000'
            ]);

            $file = $request->file('background_video_file');

            $upload = $file->store('background_videos');
            if($upload){
                $profile->background_video_file = $upload;
                if($profile->save()){
                    return true;
                }
            }
            return false;
        }
        //Return true because we didn't attempt to upload a video
        return true;
    }

    public function upload_file(UpdateProfileRequest $request, Profile $profile){
        if($request->hasfile('resume_file'))
        {
            $this->validate($request, [
                'resume_file' => 'required | mimes:pdf,txt'
            ]);

            $file = $request->file('resume_file');

            $upload = $file->store('resumes');

            if($upload){
                $profile->resume_file = $upload;
                if($profile->save()){
                    return true;
                }
            }
            return false;
        }
        //Return true because we didn't attempt to upload a resume.
        return true;
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
