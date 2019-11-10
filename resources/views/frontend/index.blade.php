@extends('frontend.layouts.app')

@section('title', app_name() . ' | ' . __('navs.general.home'))

@section('content')
    <div class="fullscreen-bg">
        <div class="overlay"></div>
        <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
            <source src="{{asset('storage/CAD2.mp4')}}" type="video/mp4">
        </video>
    </div>
    <div class="homeText">
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
    <div class="projects content-sections row text-center">
        <div class="col-12">
            <h1>Hello</h1>
        </div>
    </div>

@endsection

@push('after-scripts')
    {{script('js/index.js')}}
@endpush
