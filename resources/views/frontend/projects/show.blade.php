@extends('frontend.layouts.app')

@section('title', app_name() . ' | ' . __('navs.general.projects.show'))

@push('before-styles')
        {{ style(mix('css/frontend/projects/project.css')) }}
@endpush

@section('content')
    <div class="row mb-5" style="margin-top: 100px;">
        <div class="col text-center">
            <h1>{{$project->title}}</h1>
        </div>
    </div>
    <div class="row">
{{--        Carousel--}}
        <div class="col-10 col-md-8 col-lg-6 m-auto">
            <div id="projectImagesCarousel" class="carousel slide m-auto" data-ride="carousel">
                <div class="carousel-inner">
                    @foreach($project->images()->get() as $image)
                        <div class="carousel-item {{$loop->index == 0 ? 'active' : ''}}">
                            <img class="d-block" src="{{Storage::url($image->small_url)}}" alt="{{$image->color}}">
                        </div>
                    @endforeach
                </div>
                <a class="carousel-control-prev" href="#projectImagesCarousel" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#projectImagesCarousel" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
    </div>
    <div class="row justify-content-center mt-5 text-center">
        @if($project->youtube_url)
            <div class="col-xs col-md-1">
                <a href="{{$project->youtube_url}}" target="_blank">
                    <i class="fab fa-3x fa-youtube sm-icons"></i>
                </a>
            </div>
        @endif
        @if($project->github_url)
            <div class="col-xs col-md-1">
                <a href="{{$project->github_url}}" target="_blank">
                    <i class="fab fa-3x fa-github sm-icons"></i>
                </a>
            </div>
        @endif
    </div>
    <div class="row mt-5 mb-5">
        <div class="col-10 m-auto">
            <hr class="color-divider">
        </div>
    </div>
    <div class="row mt-5 mb-5">
        <div class="col-10 m-auto">
{{--            Page Content (from backend editor)--}}
            {!! $project->page_content !!}
        </div>
    </div>
@endsection

@push('after-scripts')
    <script>
        $('.carousel').carousel()
    </script>
    {{--    <script src="https://cdnjs.cloudflare.com/ajax/libs/trianglify/2.0.0/trianglify.min.js"></script>--}}
    {{--    {{script('js/index.js')}}--}}
@endpush
