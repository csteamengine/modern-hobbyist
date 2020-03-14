@extends('frontend.layouts.app')

@section('title', app_name() . ' | ' . __('navs.general.projects.show'))

@push('before-styles')
{{--        {{ style(mix('css/particles.css')) }}--}}
@endpush

@section('content')
    <div class="row" style="margin-top: 200px;">
        <div class="col text-center">
            <h1>{{$project->title}}</h1>
        </div>
    </div>
    <div class="row">
{{--        Carousel--}}
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block w-100" src="..." alt="First slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="..." alt="Second slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="..." alt="Third slide">
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </div>
    <div class="row">
        <div class="col">
{{--            Page Content (from backend editor)--}}
        </div>
    </div>
@endsection

@push('after-scripts')
    {{--    <script src="https://cdnjs.cloudflare.com/ajax/libs/trianglify/2.0.0/trianglify.min.js"></script>--}}
    {{--    {{script('js/index.js')}}--}}
@endpush
