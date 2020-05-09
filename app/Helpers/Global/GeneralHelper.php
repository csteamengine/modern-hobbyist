<?php

use App\Http\Controllers\Controller;
use App\Models\Image;
use App\Models\Job;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Http\FormRequest;
use PHPColorExtractor\PHPColorExtractor;

if (! function_exists('app_name')) {
    /**
     * Helper to grab the application name.
     *
     * @return mixed
     */
    function app_name()
    {
        return config('app.name');
    }
}

if (! function_exists('gravatar')) {
    /**
     * Access the gravatar helper.
     */
    function gravatar()
    {
        return app('gravatar');
    }
}

if (! function_exists('home_route')) {
    /**
     * Return the route to the "home" page depending on authentication/authorization status.
     *
     * @return string
     */
    function home_route()
    {
        if (auth()->check()) {
            if (auth()->user()->can('view backend')) {
                return 'admin.dashboard';
            }

            return 'frontend.user.dashboard';
        }

        return 'frontend.index';
    }
}

if (! function_exists('update_images')) {

    /**
     * @param FormRequest $request
     * @param Model $model
     * @param Controller $parent
     * @return bool
     * @throws Exception
     */
    function update_images(FormRequest $request, Model $model, Controller $parent){
        $existing_images = $model->images()->get();
        $success = true;
        //remove deleted images
        if($request->has('existing_images')){
            $input = $request['existing_images'];
            foreach($existing_images as $currImage){
                if(!in_array($currImage->id, $input)){
                    $model->images()->detach($currImage);
                }
            }

            $count = 0;
            foreach($input as $id){
                $image = $model->images()->where('images.id', $id)->get();
                $model->images()->updateExistingPivot($image, ['order' => $count]);
                $count++;
            }

        }else if($existing_images){
            //We have existing images, but none came through in the form request
            foreach($existing_images as $currImage){
                $model->images()->detach($currImage);
            }
        }

        //Add new images
        if($request->hasfile('images'))
        {
            $parent->validate($request, [
                'images' => 'required',
                'images[].*' => 'image|mimes:jpg,png,tif,gif'
            ]);
            foreach($request->file('images') as $file)
            {
                $extractor = new PHPColorExtractor();
                $extractor->setImage($file->getPathname())->setTotalColors(5)->setGranularity(10);
                $palette = $extractor->extractPalette();
                $upload = $file->store('images/projects');
                if($upload){
                    $image = Image::create([
                        'url' => env('APP_URL').'/storage/'.$upload,
                        'small_url' => $upload,
                        'color' => $palette[sizeof($palette)-1]
                    ]);

                    if(!$image){
                        $success = false;
                    }

                    $model_image = $model->images()->save($image, ['order' => $existing_images->count()]);

                    if(!$model_image){
                        $success = false;
                    }
                }
            }
        }

        if(!$success){
            return false;
        }
        return true;
    }
}
