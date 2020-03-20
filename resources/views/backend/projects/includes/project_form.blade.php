{{ html()->modelForm($project, $method, $route)->class('form-horizontal')->acceptsFiles()->open() }}
<div class="card">
    <div class="card-body">
        <div class="row">
            <div class="col-sm-5">
                <h4 class="card-title mb-0">
                    @lang('labels.backend.projects.main')
                    <small class="text-muted">@lang('labels.backend.projects.'.$action)</small>
                </h4>
            </div><!--col-->
        </div><!--row-->

        <hr>

        <div class="row mt-4">
            <div class="col">
                <div class="form-group row">
                    <div class="col-md-1">
                        {{ html()->label(__('labels.backend.projects.forms.is_active'))
                            ->class('form-control-label')
                            ->for('is_active') }}
                        <br>
                        <label class="switch switch-success m-0 pb-0 pt-1">
                            {{html()->checkbox('is_active', $checked = $project->is_active)
                                ->id("customSwitch".$project->id)
                                ->class('form-control switch-input')
                                ->attribute('maxlength', 250)
                               }}
                            <span class="switch-slider"></span>
                        </label>
                    </div><!--col-->
                    <div class="col-md-11">
                        {{ html()->label(__('labels.backend.projects.forms.title'))
                            ->class('form-control-label')
                            ->for('title') }}

                        {{ html()->text('title')
                            ->class('form-control')
                            ->placeholder(__('labels.backend.projects.forms.title'))
                            ->attribute('maxlength', 191)
                            ->required()
                            ->autofocus() }}
                    </div><!--col-->
                </div><!--form-group-->
                <div class="form-group row">
                    <div class="col-md-12">
                        {{ html()->label(__('labels.backend.projects.forms.project_url'))
                            ->class('form-control-label')
                            ->for('project_url') }}

                        {{ html()->text('project_url')
                            ->class('form-control')
                            ->placeholder(__('labels.backend.projects.forms.project_url'))
                            ->attribute('maxlength', 500)
                            ->required()
                            ->autofocus() }}
                    </div><!--col-->
                </div>
                <div class="form-group row">
                    <div class="col-md-6">
                        {{ html()->label(__('labels.backend.projects.forms.started_at'))
                            ->class('form-control-label')
                            ->for('started_at') }}

                        {{ html()->date('started_at')
                            ->class('form-control')
                            ->attribute('rows', 10)
                            ->placeholder(__('labels.backend.projects.forms.started_at'))
                            }}
                    </div><!--col-->
                    <div class="col-md-6">
                        {{ html()->label(__('labels.backend.projects.forms.finished_at'))
                            ->class('form-control-label')
                            ->for('finished_at') }}

                        {{ html()->date('finished_at')
                            ->class('form-control')
                            ->attribute('rows', 10)
                            ->placeholder(__('labels.backend.projects.forms.finished_at'))
                            }}
                    </div><!--col-->
                </div><!--form-group-->
                <div class="form-group row">
                    <div class="col-md-12">
                        {{ html()->label(__('labels.backend.projects.forms.short_description'))
                            ->class('form-control-label')
                            ->for('short_description') }}

                        {{ html()->text('short_description')
                            ->class('form-control')
                            ->placeholder(__('labels.backend.projects.forms.short_description'))
                            ->attribute('maxlength', 250)
                            }}
                    </div><!--col-->
                </div><!--form-group-->
                <div class="form-group row">
                    <div class="col-md-12">
                        {{ html()->label(__('labels.backend.projects.forms.description'))
                            ->class('form-control-label')
                            ->for('long_description') }}

                        {{ html()->textarea('description')
                            ->class('form-control')
                            ->attribute('rows', 10)
                            ->placeholder(__('labels.backend.projects.forms.description'))
                            }}
                    </div><!--col-->
                </div><!--form-group-->
                <div class="form-group row">
                    <div class="col-md-12">
                        {{ html()->label(__('labels.backend.projects.forms.page_content'))
                            ->class('form-control-label')
                            ->for('page_content') }}

                        {{ html()->textarea('page_content')
                            ->class('form-control')
                            ->id('summernote')
                            ->value($project->page_content)
                            ->placeholder(__('labels.backend.projects.forms.page_content'))
                            }}
                    </div><!--col-->
                </div><!--form-group-->
                @include('backend.projects.includes.images')
            </div><!--col-->
        </div><!--row-->
    </div><!--card-body-->

    <div class="card-footer">
        <div class="row">
            <div class="col">
                {{ form_cancel(route('admin.projects.index'), __('buttons.general.cancel')) }}
            </div><!--col-->

            <div class="col text-right">
                {{ form_submit(__('buttons.general.crud.'.$actionText)) }}
            </div><!--col-->
        </div><!--row-->
    </div><!--card-footer-->
</div><!--card-->
{{ html()->closeModelForm() }}
