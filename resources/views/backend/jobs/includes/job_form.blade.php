{{ html()->modelForm($job, $method, $route)->class('form-horizontal')->acceptsFiles()->open() }}
<div class="card">
    <div class="card-body">
        <div class="row">
            <div class="col-sm-5">
                <h4 class="card-title mb-0">
                    @lang('labels.backend.jobs.main')
                    <small class="text-muted">@lang('labels.backend.jobs.'.$action)</small>
                </h4>
            </div><!--col-->
        </div><!--row-->

        <hr>

        <div class="row mt-4">
            <div class="col">
                <div class="form-group row">
                    <div class="col-md-1">
                        {{ html()->label(__('labels.backend.jobs.forms.is_active'))
                            ->class('form-control-label')
                            ->for('is_active') }}
                        <br>
                        <label class="switch switch-success m-0 pb-0 pt-1">
                            {{html()->checkbox('is_active', $checked = $job->is_active)
                                ->id("customSwitch".$job->id)
                                ->class('form-control switch-input')
                                ->attribute('maxlength', 250)
                               }}
                            <span class="switch-slider"></span>
                        </label>
                    </div><!--col-->
                    <div class="col-md-11">
                        {{ html()->label(__('labels.backend.jobs.forms.title'))
                            ->class('form-control-label')
                            ->for('title') }}

                        {{ html()->text('title')
                            ->class('form-control')
                            ->placeholder(__('labels.backend.jobs.forms.title'))
                            ->attribute('maxlength', 191)
                            ->required()
                            ->autofocus() }}
                    </div><!--col-->
                </div><!--form-group-->
                <div class="form-group row">
                    <div class="col-md-12">
                        {{ html()->label(__('labels.backend.jobs.forms.company'))
                            ->class('form-control-label')
                            ->for('company') }}

                        {{ html()->text('company')
                            ->class('form-control')
                            ->placeholder(__('labels.backend.jobs.forms.company'))
                            ->attribute('maxlength', 191)
                            ->required()
                            ->autofocus() }}
                    </div><!--col-->
                </div>
                <div class="form-group row">
                    <div class="col-md-12">
                        {{ html()->label(__('labels.backend.jobs.forms.company_url'))
                            ->class('form-control-label')
                            ->for('company_url') }}

                        {{ html()->text('company_url')
                            ->class('form-control')
                            ->placeholder(__('labels.backend.jobs.forms.company_url'))
                            ->attribute('maxlength', 500)
                            ->required()
                            ->autofocus() }}
                    </div><!--col-->
                </div>
                <div class="form-group row">
                    <div class="col-md-6">
                        {{ html()->label(__('labels.backend.jobs.forms.started_at'))
                            ->class('form-control-label')
                            ->for('started_at') }}

                        {{ html()->date('started_at')
                            ->class('form-control')
                            ->attribute('rows', 10)
                            ->placeholder(__('labels.backend.jobs.forms.started_at'))
                            }}
                    </div><!--col-->
                    <div class="col-md-6">
                        {{ html()->label(__('labels.backend.jobs.forms.finished_at'))
                            ->class('form-control-label')
                            ->for('finished_at') }}

                        {{ html()->date('finished_at')
                            ->class('form-control')
                            ->attribute('rows', 10)
                            ->placeholder(__('labels.backend.jobs.forms.finished_at'))
                            }}
                    </div><!--col-->
                </div><!--form-group-->
                <div class="form-group row">
                    <div class="col-md-12">
                        {{ html()->label(__('labels.backend.jobs.forms.short_description'))
                            ->class('form-control-label')
                            ->for('short_description') }}

                        {{ html()->text('short_description')
                            ->class('form-control')
                            ->placeholder(__('labels.backend.jobs.forms.short_description'))
                            ->attribute('maxlength', 250)
                            }}
                    </div><!--col-->
                </div><!--form-group-->
                <div class="form-group row">
                    <div class="col-md-12">
                        {{ html()->label(__('labels.backend.jobs.forms.description'))
                            ->class('form-control-label')
                            ->for('long_description') }}

                        {{ html()->textarea('description')
                            ->class('form-control')
                            ->attribute('rows', 10)
                            ->placeholder(__('labels.backend.jobs.forms.description'))
                            }}
                    </div><!--col-->
                </div><!--form-group-->
                <div class="form-group row">
                    <div class="col-md-12">
                        {{ html()->label(__('labels.backend.jobs.forms.page_content'))
                            ->class('form-control-label')
                            ->for('page_content') }}

                        {{ html()->textarea('page_content')
                            ->class('form-control')
                            ->attribute('rows', 10)
                            ->placeholder(__('labels.backend.jobs.forms.page_content'))
                            }}
                    </div><!--col-->
                </div><!--form-group-->
                @include('backend.jobs.includes.images')
            </div><!--col-->
        </div><!--row-->
    </div><!--card-body-->

    <div class="card-footer">
        <div class="row">
            <div class="col">
                {{ form_cancel(route('admin.jobs.index'), __('buttons.general.cancel')) }}
            </div><!--col-->

            <div class="col text-right">
                {{ form_submit(__('buttons.general.crud.'.$actionText)) }}
            </div><!--col-->
        </div><!--row-->
    </div><!--card-footer-->
</div><!--card-->
{{ html()->closeModelForm() }}
