@extends('frontend.layouts.app')

@section('title', app_name() . ' | ' . __('navs.general.home'))

@section('content')
    <div class="fullscreen-bg">
        <div class="overlay"></div>
        <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
            <source src="{{asset('storage/CAD-final-short.mp4')}}" type="video/mp4">
        </video>
    </div>
    <div class="homeText" id="home">
        <div class="row p-0 m-0">
            <div class="col mt-auto mb-auto text-center ml-0 mr-0 p-0">
                <h1>Hello,</h1>
                <h1>
                    I'm
                    <span class="typewrite" data-period="2500" data-type='[" an Engineer...", " a Web Developer...", " a Maker...", " Charlie Steenhagen."]'>
                    <span class="wrap"></span>
                </span>
                </h1>
            </div>
        </div>
    </div>
    <div class="row filler-section"></div>
    <div id="projects" class="content-sections row text-center">
        <div class="col-12 m-auto">
            <div class="row justify-content-center">
                @foreach($projects as $project)
                    <div class="col-6 col-md-4">
                        <h1>{{$project->title}}</h1>
                    </div>
                @endforeach
            </div>
        </div>
    </div>
    <div id="career" class="content-sections row text-center">
        <div class="col-12 m-auto">
            <h1>Career</h1>
        </div>
    </div>
    <div id="about" class="content-sections row text-center">
        <div class="col-12 m-auto">
            <h1>About</h1>
        </div>
    </div>
    <div id="contact" class="content-sections row text-center">
        <div class="col-12 m-auto">
{{--            <h1>Contact</h1>--}}
            {{ html()->form('POST', route('frontend.contact.send'))->open() }}
            <div class="row">
                <div class="col">
                    <div class="form-group">
                        {{ html()->label(__('validation.attributes.frontend.name'))->for('name') }}

                        {{ html()->text('name', optional(auth()->user())->name)
                            ->class('form-control')
                            ->placeholder(__('validation.attributes.frontend.name'))
                            ->attribute('maxlength', 191)
                            ->required()}}
                    </div><!--form-group-->
                </div><!--col-->
            </div><!--row-->

            <div class="row">
                <div class="col">
                    <div class="form-group">
                        {{ html()->label(__('validation.attributes.frontend.email'))->for('email') }}

                        {{ html()->email('email', optional(auth()->user())->email)
                            ->class('form-control')
                            ->placeholder(__('validation.attributes.frontend.email'))
                            ->attribute('maxlength', 191)
                            ->required() }}
                    </div><!--form-group-->
                </div><!--col-->
            </div><!--row-->

            <div class="row">
                <div class="col">
                    <div class="form-group">
                        {{ html()->label(__('validation.attributes.frontend.phone'))->for('phone') }}

                        {{ html()->text('phone')
                            ->class('form-control')
                            ->placeholder(__('validation.attributes.frontend.phone'))
                            ->attribute('maxlength', 191)
                            ->required() }}
                    </div><!--form-group-->
                </div><!--col-->
            </div><!--row-->

            <div class="row">
                <div class="col">
                    <div class="form-group">
                        {{ html()->label(__('validation.attributes.frontend.message'))->for('message') }}

                        {{ html()->textarea('message')
                            ->class('form-control')
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
                    <div class="form-group mb-0 clearfix">
                        {{ form_submit(__('labels.frontend.contact.button')) }}
                    </div><!--form-group-->
                </div><!--col-->
            </div><!--row-->
            {{ html()->form()->close() }}
        </div>
    </div>

@endsection

@push('after-scripts')
    {{script('js/index.js')}}
@endpush
