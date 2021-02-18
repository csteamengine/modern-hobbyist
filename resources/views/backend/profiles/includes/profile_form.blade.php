{{ html()->modelForm($profile, $method, $route)->class('form-horizontal')->acceptsFiles()->open() }}
<div class="card">
    <div class="card-body">
        <div class="row">
            <div class="col-sm-5">
                <h4 class="card-title mb-0">
                    @lang('labels.backend.profiles.main')
                    <small class="text-muted">@lang('labels.backend.profiles.'.$action)</small>
                </h4>
            </div><!--col-->
        </div><!--row-->

        <hr>

{{--        'image_id' => 1,--}}

        <div class="row mt-4">
            <div class="col">
                <div class="form-group row">
                    <div class="col-12 col-md-6 m-auto">
                        <div class="row">
                            <img src="{{$profile->about_image() ? asset('storage/'.$profile->about_image()->small_url) : ""}}"
                                 class="img-fluid about-image-preview"
                                 id="about-image-preview"
                                 alt="About Image Preview"
                                 onclick="$('#about_image_file').trigger('click');"
                                {{!$profile->about_image() ? "hidden" : ""}}
                            >
                        </div>
                        <div class="row mt-2">
                            <div class="custom-file">
                                <input type="file" class="custom-file-input" id="about_image_file" name="about_image_id">
                                <label class="custom-file-label" for="about_image_id">Choose file</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-6 col-sm-3">
                        {{ html()->label(__('labels.backend.profiles.forms.maintenance_mode_active'))
                            ->class('form-control-label')
                            ->for('maintenance_mode_active') }}
                        <br>
                        <label class="switch switch-success m-0 pb-0 pt-1">
                            {{html()->checkbox('maintenance_mode_active', $checked = $profile->maintenance_mode_active)
                                ->id("maintenance_mode_active_".$profile->id)
                                ->class('form-control switch-input')
                                ->attribute('maxlength', 250)
                               }}
                            <span class="switch-slider"></span>
                        </label>
                    </div><!--col-->
                    <div class="col-6 col-sm-3">
                        {{ html()->label(__('labels.backend.profiles.forms.contact_form_active'))
                            ->class('form-control-label')
                            ->for('contact_form_active') }}
                        <br>
                        <label class="switch switch-success m-0 pb-0 pt-1">
                            {{html()->checkbox('contact_form_active', $checked = $profile->contact_form_active)
                                ->id("contact_form_active_".$profile->id)
                                ->class('form-control switch-input')
                                ->attribute('maxlength', 250)
                               }}
                            <span class="switch-slider"></span>
                        </label>
                    </div><!--col-->
                    <div class="col-6 col-sm-3">
                        {{ html()->label(__('labels.backend.profiles.forms.resume_download_active'))
                            ->class('form-control-label')
                            ->for('resume_download_active') }}
                        <br>
                        <label class="switch switch-success m-0 pb-0 pt-1">
                            {{html()->checkbox('resume_download_active', $checked = $profile->resume_download_active)
                                ->id("resume_download_active_".$profile->id)
                                ->class('form-control switch-input')
                                ->attribute('maxlength', 250)
                               }}
                            <span class="switch-slider"></span>
                        </label>
                    </div><!--col-->
                    <div class="col-6 col-sm-3">
                        {{ html()->label(__('labels.backend.profiles.forms.background_video_active'))
                            ->class('form-control-label')
                            ->for('background_video_active') }}
                        <br>
                        <label class="switch switch-success m-0 pb-0 pt-1">
                            {{html()->checkbox('background_video_active', $checked = $profile->background_video_active)
                                ->id("background_video_active_".$profile->id)
                                ->class('form-control switch-input')
                                ->attribute('maxlength', 250)
                               }}
                            <span class="switch-slider"></span>
                        </label>
                    </div><!--col-->
                </div><!--form-group-->
                <div class="form-group row">
                    <div class="col-md-1">
                        {{ html()->label(__('labels.backend.profiles.forms.is_active'))
                            ->class('form-control-label')
                            ->for('is_active') }}
                        <br>
                        <label class="switch switch-success m-0 pb-0 pt-1">
                            {{html()->checkbox('is_active', $checked = $profile->is_active)
                                ->id("customSwitch".$profile->id)
                                ->class('form-control switch-input')
                                ->attribute('maxlength', 250)
                               }}
                            <span class="switch-slider"></span>
                        </label>
                    </div><!--col-->
                    <div class="col-md-11">
                        {{ html()->label(__('labels.backend.profiles.forms.title'))
                            ->class('form-control-label')
                            ->for('title') }}

                        {{ html()->text('title')
                            ->class('form-control')
                            ->placeholder(__('labels.backend.profiles.forms.title'))
                            ->attribute('maxlength', 191)
                            ->required()
                            ->autofocus() }}
                    </div><!--col-->
                </div><!--form-group-->
                <div class="form-group row">
                    <div class="col-6">
                        {{ html()->label(__('labels.backend.profiles.forms.name'))
                            ->class('form-control-label')
                            ->for('name') }}

                        {{ html()->text('name')
                            ->class('form-control')
                            ->placeholder(__('labels.backend.profiles.forms.name'))
                            ->attribute('maxlength', 191)
                            ->required() }}
                    </div>
                    <div class="col-6">
                        {{ html()->label(__('labels.backend.profiles.forms.about_title'))
                            ->class('form-control-label')
                            ->for('about_title') }}

                        {{ html()->text('about_title')
                            ->class('form-control')
                            ->placeholder(__('labels.backend.profiles.forms.about_title'))
                            ->attribute('maxlength', 191)
                             }}
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-12 col-md-6">
                        {{ html()->label(__('labels.backend.profiles.forms.contact_email'))
                            ->class('form-control-label')
                            ->for('contact_email') }}

                        {{ html()->text('contact_email')
                            ->class('form-control')
                            ->placeholder(__('labels.backend.profiles.forms.contact_email'))
                            ->attribute('maxlength', 191)
                            ->required() }}
                    </div>
                    <div class="col-3">
                        {{ html()->label(__('labels.backend.profiles.forms.resume_file'))
                            ->class('form-control-label')
                            ->for('resume_file') }}
                        <div class="custom-file">
                            <input type="file" class="custom-file-input" id="resume_file" name="resume_file">
                            <label class="custom-file-label" for="resume_file">Choose file</label>
                        </div>
                    </div>
                    <div class="col-3">
                        {{ html()->label(__('labels.backend.profiles.forms.background_video_file'))
                            ->class('form-control-label')
                            ->for('background_video_file') }}
                        <div class="custom-file">
                            <input type="file" class="custom-file-input" id="background_video_file" name="background_video_file">
                            <label class="custom-file-label" for="background_video_file">Choose file</label>
                        </div>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-md-12">
                        {{ html()->label(__('labels.backend.profiles.forms.youtube_url'))
                            ->class('form-control-label')
                            ->for('youtube_url') }}

                        {{ html()->text('youtube_url')
                            ->class('form-control')
                            ->placeholder(__('labels.backend.profiles.forms.youtube_url'))
                            ->attribute('maxlength', 500)
                            ->autofocus() }}
                    </div><!--col-->
                </div>
                <div class="form-group row">
                    <div class="col-md-12">
                        {{ html()->label(__('labels.backend.profiles.forms.github_url'))
                            ->class('form-control-label')
                            ->for('github_url') }}

                        {{ html()->text('github_url')
                            ->class('form-control')
                            ->placeholder(__('labels.backend.profiles.forms.github_url'))
                            ->attribute('maxlength', 500)
                            ->autofocus() }}
                    </div><!--col-->
                </div>
                <div class="form-group row">
                    <div class="col-md-12">
                        {{ html()->label(__('labels.backend.profiles.forms.instagram_url'))
                            ->class('form-control-label')
                            ->for('instagram_url') }}

                        {{ html()->text('instagram_url')
                            ->class('form-control')
                            ->placeholder(__('labels.backend.profiles.forms.instagram_url'))
                            ->attribute('maxlength', 500)
                            ->autofocus() }}
                    </div><!--col-->
                </div>
                <div class="form-group row">
                    <div class="col-md-12">
                        {{ html()->label(__('labels.backend.profiles.forms.short_about_description'))
                            ->class('form-control-label')
                            ->for('short_about_escription') }}

                        {{ html()->textarea('short_about_description')
                            ->class('form-control')
                            ->placeholder(__('labels.backend.profiles.forms.short_about_description'))
                            ->attribute('maxlength', 250)
                            ->attribute('row', 5)
                            }}
                    </div><!--col-->
                </div><!--form-group-->
                <div class="form-group row">
                    <div class="col-md-12">
                        {{ html()->label(__('labels.backend.profiles.forms.about_page_content'))
                            ->class('form-control-label')
                            ->for('about_page_content') }}

                        {{ html()->textarea('about_page_content')
                            ->class('form-control')
                            ->id('summernote')
                            ->value($profile->about_page_content)
                            ->placeholder(__('labels.backend.profiles.forms.about_page_content'))
                            }}
                    </div><!--col-->
                </div><!--form-group-->
                @include('backend.profiles.includes.images')
            </div><!--col-->
        </div><!--row-->
    </div><!--card-body-->

    <div class="card-footer">
        <div class="row">
            <div class="col">
                {{ form_cancel(route('admin.profiles.index'), __('buttons.general.cancel')) }}
            </div><!--col-->

            <div class="col text-right">
                {{ form_submit(__('buttons.general.crud.'.$actionText)) }}
            </div><!--col-->
        </div><!--row-->
    </div><!--card-footer-->
</div><!--card-->
{{ html()->closeModelForm() }}
