{{ html()->modelForm($link, $method, $route)->class('form-horizontal')->acceptsFiles()->open() }}
<div class="card">
    <div class="card-body">
        <div class="row">
            <div class="col-sm-5">
                <h4 class="card-title mb-0">
                    @lang('labels.backend.links.main')
                    <small class="text-muted">@lang('labels.backend.links.'.$action)</small>
                </h4>
            </div><!--col-->
        </div><!--row-->

        <hr>

        <div class="row mt-4">
            <div class="col">
                <div class="form-group row">
                    <div class="col-12 col-md-6 m-auto">
                        <div class="row">
                            <img src="{{$link->image() ? asset('storage/'.$link->image()->small_url) : ""}}"
                                 class="img-fluid about-image-preview"
                                 id="about-image-preview"
                                 alt="About Image Preview"
                                 onclick="$('#about_image_file').trigger('click');"
                                 {{!$link->image() ? "hidden" : ""}}
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
                    <div class="col-md-1">
                        {{ html()->label(__('labels.backend.links.forms.is_active'))
                            ->class('form-control-label')
                            ->for('is_active') }}
                        <br>
                        <label class="switch switch-success m-0 pb-0 pt-1">
                            {{html()->checkbox('is_active', $checked = $link->is_active)
                                ->id("customSwitch".$link->id)
                                ->class('form-control switch-input')
                                ->attribute('maxlength', 250)
                               }}
                            <span class="switch-slider"></span>
                        </label>
                    </div><!--col-->
                    <div class="col-md-5">
                        {{ html()->label(__('labels.backend.links.forms.title'))
                            ->class('form-control-label')
                            ->for('title') }}

                        {{ html()->text('title')
                            ->class('form-control')
                            ->placeholder(__('labels.backend.links.forms.title'))
                            ->attribute('maxlength', 191)
                            ->required()
                            ->autofocus() }}
                    </div><!--col-->
                    <div class="col-md-6">
                        {{ html()->label(__('labels.backend.links.forms.url'))
                            ->class('form-control-label')
                            ->for('url') }}

                        {{ html()->text('url')
                            ->class('form-control')
                            ->placeholder(__('labels.backend.links.forms.url'))
                            ->attribute('maxlength', 191)
                            ->required()
                            ->autofocus() }}
                    </div><!--col-->
                </div><!--form-group-->
                <div class="form-group row">
                    <div class="col-md-6">
                        {{ html()->label(__('labels.backend.links.forms.start_date'))
                            ->class('form-control-label')
                            ->for('start_date') }}

                        <input type="datetime-local" id="start_date"
                               value="{{$link->start_date ? date_format(date_create($link->start_date), 'Y-m-d\TH:i') : ""}}"
                               class="form-control"
                               name="start_date"
                               placeholder = "{{(__('labels.backend.links.forms.start_date'))}}">
                    </div><!--col-->
                    <div class="col-md-6">
                        {{ html()->label(__('labels.backend.links.forms.end_date'))
                            ->class('form-control-label')
                            ->for('end_date') }}

                        <input type="datetime-local" id="end_date"
                               value="{{$link->end_date ? date_format(date_create($link->end_date), 'Y-m-d\TH:i') : ""}}"
                               class="form-control"
                               name="end_date"
                               placeholder = "{{(__('labels.backend.links.forms.end_time'))}}">
                    </div><!--col-->
                </div><!--form-group-->
                <div class="form-group row">
                    <div class="col-md-12">
                        {{ html()->label(__('labels.backend.links.forms.description'))
                            ->class('form-control-label')
                            ->for('description') }}

                        {{ html()->text('description')
                            ->class('form-control')
                            ->placeholder(__('labels.backend.links.forms.description'))
                            ->attribute('maxlength', 250)
                            }}
                    </div><!--col-->
                </div><!--form-group-->
            </div><!--col-->
        </div><!--row-->
    </div><!--card-body-->

    <div class="card-footer">
        <div class="row">
            <div class="col">
                {{ form_cancel(route('admin.links.index'), __('buttons.general.cancel')) }}
            </div><!--col-->

            <div class="col text-right">
                {{ form_submit(__('buttons.general.crud.'.$actionText)) }}
            </div><!--col-->
        </div><!--row-->
    </div><!--card-footer-->
</div><!--card-->
{{ html()->closeModelForm() }}
