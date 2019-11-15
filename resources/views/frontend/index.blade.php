@extends('frontend.layouts.app')

@section('title', app_name() . ' | ' . __('navs.general.home'))

@push('before-styles')
    {{ style(mix('css/index.css')) }}
@endpush

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
    <div class="poly-background"></div>
    <div class="row filler-section" id="home"></div>
    <div class="page-content row justify-content-center">
        <div class="inner-page-content col-12 p-0">
            <div id="about" class="content-sections row text-center align-content-center w-100 p-0 m-0">
                <div class="col-10 m-auto">
                    <div class="row">
                        <div class="col-12 col-sm-6 m-auto text-left">
                            <h2>I'm Charlie Steenhagen</h2>
                            <h4 class="text-muted">Software Engineer, Web Developer, Maker</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Vivamus turpis mi, elementum at cursus et, hendrerit ac lectus.
                            </p>
                        </div>
                        <div class="col-12 col-sm-6 m-auto">
                            <img src="{{asset('storage/man.jpg')}}" class="img-fluid">
                        </div>
                    </div>
                </div>
            </div>
            <div class="row row-overlap w-100 p-0 m-0">
                <div class="row-overlap-child col-10 m-auto align-items-center">
                    <div class="row m-auto h-100">
                        <div class="row-overlap-child-counter col-6 col-sm-3 text-center m-auto">
                            <div class="row h-100">
                                <h2 class="col-12 mt-auto">375</h2>
                                <p class="col-12 text-muted mb-auto">Test Categories</p>
                            </div>
                        </div>
                        <div class="row-overlap-child-counter col-6 col-sm-3 text-center m-auto">
                            <div class="row h-100">
                                <h2 class="col-12 mt-auto">375</h2>
                                <p class="col-12 text-muted mb-auto">Test Categories</p>
                            </div>
                        </div>
                        <div class="row-overlap-child-counter col-6 col-sm-3 text-center m-auto">
                            <div class="row h-100">
                                <h2 class="col-12 mt-auto">375</h2>
                                <p class="col-12 text-muted mb-auto">Test Categories</p>
                            </div>
                        </div>
                        <div class="row-overlap-child-counter col-6 col-sm-3 text-center m-auto">
                            <div class="row h-100">
                                <h2 class="col-12 mt-auto">375</h2>
                                <p class="col-12 text-muted mb-auto">Test Categories</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div id="projects" class="content-sections row text-center w-100 p-0 m-0">
                <div class="col-10 m-auto">
                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        {{--                        <ol class="carousel-indicators">--}}
                        {{--                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>--}}
                        {{--                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>--}}
                        {{--                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>--}}
                        {{--                        </ol>--}}
                        <div class="carousel-inner">
                            @foreach($projects as $project)
                                @if($project->images()->first())
                                    <div class="project carousel-item {{$loop->index == 0 ? 'active' : ''}}">
                                        <div class="row">
                                            <div class="col-12 col-md-6 m-auto {{$loop->index %2 ? 'order-1' : 'order-0'}} order-md-0">
                                                <div class="mb-5 m-auto project-bg" data-image="{{asset('storage/'.$project->images()->first()->url)}}"  style="background-color: #{{$project->images()->first()->color}};"></div>
                                            </div>
                                            <div class="col-12 col-sm-6 m-auto {{$loop->index %2 ? 'order-0' : 'order-1'}} order-md-1">
                                                <h3 class="mb-0">{{$project->title}}</h3>
                                                <p class="mt-0"><small>{{$project->started_at}}</small></p>
                                                <p>{{$project->short_description}}</p>
                                            </div>
                                        </div>
                                    </div>
                                    {{--                                    <a href="{{route('frontend.projects.show', $project)}}">--}}
                                    {{--                                        <div class="project" data-image="{{asset('storage/'.$project->images()->first()->url)}}" style="background-color: #{{$project->images()->first()->color}};">--}}
                                    {{--                                            <div class="project-overlay d-flex align-items-center justify-content-center">--}}
                                    {{--                                                <div class="row">--}}
                                    {{--                                                    <div class="col">--}}
                                    {{--                                                        <h2>{{$project->title}}</h2>--}}
                                    {{--                                                        <h4 class="project-date">{{date_format(date_create($project->started_at), 'Y')}}</h4>--}}
                                    {{--                                                    </div>--}}
                                    {{--                                                </div>--}}
                                    {{--                                            </div>--}}
                                    {{--                                        </div>--}}
                                    {{--                                    </a>--}}
                                @endif
                            @endforeach
                        </div>
                        {{--                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">--}}
                        {{--                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>--}}
                        {{--                            <span class="sr-only">Previous</span>--}}
                        {{--                        </a>--}}
                        {{--                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">--}}
                        {{--                            <span class="carousel-control-next-icon" aria-hidden="true"></span>--}}
                        {{--                            <span class="sr-only">Next</span>--}}
                        {{--                        </a>--}}
                    </div>
                </div>
            </div>
            <div id="career" class="content-sections row text-center w-100 p-0 m-0">
                <div class="col-12 m-auto">
                    <h1>Career</h1>
                </div>
            </div>

        </div>
    </div>

@endsection

@push('after-scripts')
    <script src="https://cdnjs.cloudflare.com/ajax/libs/trianglify/2.0.0/trianglify.min.js"></script>
    {{script('js/index.js')}}
@endpush
