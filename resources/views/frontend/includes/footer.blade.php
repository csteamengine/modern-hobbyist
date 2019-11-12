<footer class="footer mt-auto">
    <div class="row m-3">
        <div class="col-sm-6 m-auto text-center p-0">
            <div class="row m-auto">
                <div class="col-3 col-sm-6 m-auto">First</div>
                <div class="col-3 col-sm-6 m-auto">Second</div>
                <div class="col-3 col-sm-6 m-auto">Third</div>
                <div class="col-3 col-sm-6 m-auto">Fourth</div>
            </div>
        </div>
        <div class="col-sm-6 m-auto">
            {{--            <h1>Contact</h1>--}}
            {{ html()->form('POST', route('frontend.contact.send'))->open() }}
            <div class="row">
                <div class="col">
                    <div class="form-group">
                        {{ html()->label(__('validation.attributes.frontend.name'))
                            ->for('name')
                            ->class(['col-form-label-sm']) }}

                        {{ html()->text('name', optional(auth()->user())->name)
                            ->class(['form-control', 'form-control-sm'])
                            ->placeholder(__('validation.attributes.frontend.name'))
                            ->attribute('maxlength', 191)
                            ->required()}}
                    </div><!--form-group-->
                </div><!--col-->
            </div><!--row-->

            <div class="row">
                <div class="col">
                    <div class="form-group">
                        {{ html()->label(__('validation.attributes.frontend.email'))
                            ->for('email')
                            ->class(['col-form-label-sm']) }}

                        {{ html()->email('email', optional(auth()->user())->email)
                            ->class(['form-control', 'form-control-sm'])
                            ->placeholder(__('validation.attributes.frontend.email'))
                            ->attribute('maxlength', 191)
                            ->required() }}
                    </div><!--form-group-->
                </div><!--col-->
            </div><!--row-->

            <div class="row">
                <div class="col">
                    <div class="form-group">
                        {{ html()->label(__('validation.attributes.frontend.message'))
                            ->for('message')
                            ->class(['col-form-label-sm']) }}

                        {{ html()->textarea('message')
                            ->class(['form-control', 'form-control-sm'])
                            ->placeholder(__('validation.attributes.frontend.message'))
                            ->attribute('rows', 3)
                            ->required() }}
                    </div><!--form-group-->
                </div><!--col-->
            </div><!--row-->

            @if(config('access.captcha.contact'))
                <div class="row">
                    <div class="col">
                        @captcha
                        {{ html()->hidden('captcha_status', 'true') }}
                    </div><!--col-->
                </div><!--row-->
            @endif

            <div class="row">
                <div class="col">
                    <div class="form-group mb-0 clearfix text-center">
                        {{ form_submit(__('labels.frontend.contact.button'))->class(['btn-dark', 'm-auto']) }}
                    </div><!--form-group-->
                </div><!--col-->
            </div><!--row-->
            {{ html()->form()->close() }}
        </div>
    </div>
</footer>
