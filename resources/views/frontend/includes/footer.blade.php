<footer class="footer">
    <div class="row h-100">
        <div class="col my-auto">
            <div class="row mb-5">
                <div class="col-sm-10 m-auto">
                    {{--            <h1>Contact</h1>--}}
                    {{ html()->form('POST', route('frontend.contact.send'))->open() }}
                    <div class="row">
                        <div class="col">
                            <div class="form-group text-left">
                                {{ html()->label(__('validation.attributes.frontend.name'))
                                    ->for('name')
                                    ->class(['col-form-label']) }}

                                {{ html()->text('name', optional(auth()->user())->name)
                                    ->class(['form-control'])
                                    ->placeholder(__('validation.attributes.frontend.name'))
                                    ->attribute('maxlength', 191)
                                    ->required()}}
                            </div><!--form-group-->
                        </div><!--col-->
                    </div><!--row-->

                    <div class="row">
                        <div class="col">
                            <div class="form-group text-left">
                                {{ html()->label(__('validation.attributes.frontend.email'))
                                    ->for('email')
                                    ->class(['col-form-label']) }}

                                {{ html()->email('email', optional(auth()->user())->email)
                                    ->class(['form-control'])
                                    ->placeholder(__('validation.attributes.frontend.email'))
                                    ->attribute('maxlength', 191)
                                    ->required() }}
                            </div><!--form-group-->
                        </div><!--col-->
                    </div><!--row-->

                    <div class="row">
                        <div class="col">
                            <div class="form-group text-left">
                                {{ html()->label(__('validation.attributes.frontend.message'))
                                    ->for('message')
                                    ->class(['col-form-label']) }}

                                {{ html()->textarea('message')
                                    ->class(['form-control'])
                                    ->placeholder(__('validation.attributes.frontend.message'))
                                    ->attribute('rows', 6)
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
                                <button type="submit" class="btn btn-lg btn-outline-primary m-auto">Send</button>
                            </div><!--form-group-->
                        </div><!--col-->
                    </div><!--row-->
                    {{ html()->form()->close() }}
                </div>
            </div>
            <div class="row mt-5">
                <div class="col-sm-6 m-auto text-center p-0">
                    <div class="row m-auto">
                        <div class="col-4">
                            <a href="{{env('YOUTUBE_URL')}}">
                                <i class="fab fa-4x fa-youtube sm-icons"></i>
                            </a>
                        </div>
                        <div class="col-4">
                            <a href="{{env('INSTAGRAM_URL')}}">
                                <i class="fab fa-4x fa-instagram sm-icons"></i>
                            </a>
                        </div>
                        <div class="col-4">
                            <a href="{{env('GITHUB_URL')}}">
                                <i class="fab fa-4x fa-github sm-icons"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</footer>
