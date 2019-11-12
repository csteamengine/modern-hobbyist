@extends('frontend.layouts.app')

@section('title', app_name() . ' | ' . __('navs.general.home'))

@section('content')
    <div class="fullscreen-bg">
        <div class="overlay"></div>
        <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
            <source src="{{asset('storage/CAD-final-short.mp4')}}" type="video/mp4">
        </video>
    </div>
    <div class="homeText">
        <div class="row p-0 m-0">
            <div class="col mt-auto mb-auto text-center ml-0 mr-0 p-0">
                <h1>Hello, I'm</h1>
                <h1>
                    <span class="typewrite" data-period="2500" data-type='[" an Engineer...", " a Web Developer...", " a Maker...", " Charlie Steenhagen."]'>
                    <span class="wrap"></span>
                </span>
                </h1>
            </div>
        </div>
    </div>
    <div class="row filler-section" id="home"></div>
    <div id="projects" class="content-sections row text-center">
        <div class="col-12 m-auto">
            <div class="row justify-content-around">
                <div class="project col-lg-3 col-6">

                </div>
                <div class="project col-lg-3 col-6">

                </div>
                <div class="project col-lg-3 col-6">

                </div>
{{--                @foreach($projects as $project)--}}
{{--                    @if($project->images()->first())--}}
{{--                        <div class="m-auto text-center project" data-image="{{asset('storage/'.$project->images()->first()->url)}}" style="background-color: #{{$project->images()->first()->color}};">--}}
{{--                            <h1>Temp 1</h1>--}}
{{--                        </div>--}}
{{--                    @else--}}
{{--                        <div class="m-auto text-center project" style="background-color: #3B3F41;">--}}
{{--                            <h1>Temp</h1>--}}
{{--                        </div>--}}
{{--                    @endif--}}
{{--                @endforeach--}}
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

@endsection

@push('after-scripts')
    {{script('js/index.js')}}
@endpush
