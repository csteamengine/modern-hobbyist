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
            <span class="typewrite" data-period="2500"
                  data-type='[" an Engineer...", " a Web Developer...", " a Maker...", " Charlie Steenhagen."]'>
            <span class="wrap"></span>
        </span>
                </h1>
            </div>
        </div>
    </div>
    <div id="project-particles"></div>
    <div class="row filler-section" id="home"></div>
    <div class="page-content row justify-content-center">
        <div class="scroll-downs">
            <div class="mousey">
                <div class="scroller"></div>
            </div>
        </div>
        <div class="inner-page-content col-12 p-0">
            <div id="about" class="content-sections row text-center align-content-center w-100 p-0 m-0">
                <div class="col-10 m-auto">
                    <div class="row">
                        <div class="col-12 col-sm-5 m-auto">
                            <img src="{{asset('storage/avtar-01.jpg')}}" class="about-image img-fluid">
                        </div>
                        <div class="col-12 col-sm-7 m-auto text-left">
                            <h2>I'm Charlie Steenhagen</h2>
                            <h4 class="text-muted">Software Engineer, Web Developer, Maker</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Vivamus turpis mi, elementum at cursus et, hendrerit ac lectus.
                            </p>
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
            <div id="projects" class="content-sections row text-center w-100 p-0 mr-0 ml-0 justify-content-center">
                <div class="col mt-5 position-relative h-100">
                    <div class="row justify-content-center m-5">
                        <h1>Projects</h1>
                    </div>
                    <div class="row justify-content-center m-auto">
                        @foreach($projects as $project)
                            @if($project->images()->first())
                                <div class="col mb-5">
                                    <div class="project-bg row m-auto">
                                        <div class="project-bg-image"
                                             data-image="{{asset('storage/'.$project->images()->first()->url)}}"
                                             style="background-color: #{{$project->images()->first()->color}}"></div>
                                        <div class="project-text col m-auto">
                                            <h3 class="project-title">{{$project->title}}</h3>
                                            <h5 class="project-description">{{$project->short_description}}</h5>
                                        </div>
                                        <a href="#" class="text-decoration-none">
                                            <div class="project-overlay"></div>
                                        </a>
                                    </div>
                                </div>
                            @endif
                        @endforeach
                    </div>
                </div>
            </div>
            {{--            <div id="projects" class="content-sections row text-center w-100 p-0 mr-0 ml-0">--}}
            {{--                <ol class="carousel-indicators mb-5">--}}
            {{--                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>--}}
            {{--                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>--}}
            {{--                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>--}}
            {{--                </ol>--}}
            {{--                <div class="col-12 col-sm-10 m-auto">--}}
            {{--                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">--}}
            {{--                        <div class="carousel-inner">--}}
            {{--                            @foreach($projects as $project)--}}
            {{--                                @if($project->images()->first())--}}
            {{--                                    <div class="project carousel-item {{$loop->index == 0 ? 'active' : ''}}">--}}
            {{--                                        <div class="row p-5">--}}
            {{--                                            <div class="col-12 col-md-6">--}}
            {{--                                                <img class="project-image w-100" data-image="{{asset('storage/'.$project->images()->first()->url)}}">--}}
            {{--                                            </div>--}}
            {{--                                            <div class="col-12 col-md-6 m-md-auto order-1 {{$loop->index %2 ? 'order-md-0' : 'order-md-1'}}">--}}
            {{--                                                <h3 class="mb-0">{{$project->title}}</h3>--}}
            {{--                                                <p class="mt-0"><small>{{$project->started_at}}</small></p>--}}
            {{--                                                <p>{{$project->short_description}}</p>--}}
            {{--                                            </div>--}}
            {{--                                        </div>--}}
            {{--                                    </div>--}}
            {{--                                @endif--}}
            {{--                            @endforeach--}}
            {{--                        </div>--}}
            {{--                    </div>--}}
            {{--                </div>--}}
            {{--            </div>--}}
            <div id="services" class="content-sections row text-center w-100 p-0 m-0">
                <div class="col-md-10 m-auto">
                    @foreach($jobs as $job)
                        <!-- timeline item 1 -->
                        <div class="row no-gutters my-5">
                            @if($loop->index % 2)
                                <div class="ml-auto d-none d-md-block col-2">
                                    <div class="row m-auto h-100">
                                        <div class="vertical-line {{$loop->index == 0 ? "vertical-line-first" : ""}} {{$loop->last ? "vertical-line-last" : ""}}"></div>
                                        <span class="m-auto">
                                            <i class="fa fa-circle m-auto"></i>
                                        </span>
                                    </div>
                                </div>
                                <div class="card col-12 col-md-5" style="width: 18rem;">
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-12 col-md-6 m-auto">
                                                <img src="https://cdn.freebiesupply.com/logos/large/2x/john-deere-6-logo-png-transparent.png" class="job-image">
                                            </div>
                                            <div class="col-12 col-md-6 m-auto">
                                                <h1 class="card-title">{{$job->title}}</h1>
                                                <h4 class="card-subtitle mb-2 text-muted">{{$job->company}}</h4>
                                                <h6 class="card-subtitle mb-2 text-secondary">{{date_format(date_create($job->started_at), 'm-d-Y')}} - {{date_format(date_create($job->finished_at), 'm-d-Y')}}</h6>
                                                <p class="card-text">{{$job->short_description}}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            @else
                                <div class="card col-12 col-md-5" style="width: 18rem;">
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-12 col-md-6 m-auto">
                                                <h1 class="card-title">{{$job->title}}</h1>
                                                <h4 class="card-subtitle mb-2 text-muted">{{$job->company}}</h4>
                                                <h6 class="card-subtitle mb-2 text-secondary">{{date_format(date_create($job->started_at), 'm-d-Y')}} - {{date_format(date_create($job->finished_at), 'm-d-Y')}}</h6>
                                                <p class="card-text">{{$job->short_description}}</p>
                                            </div>
                                            <div class="col-12 col-md-6 m-auto">
                                                <img src="https://cdn.freebiesupply.com/logos/large/2x/john-deere-6-logo-png-transparent.png" class="job-image">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-none d-md-block col-2">
                                    <div class="row m-auto h-100">
                                        <div class="vertical-line {{$loop->index == 0 ? "vertical-line-first" : ""}} {{$loop->last ? "vertical-line-last" : ""}}"></div>
                                        <span class="m-auto">
                                            <i class="fa fa-circle m-auto"></i>
                                        </span>
                                    </div>
                                </div>
                            @endif
                        </div>
                        <!--/row-->
                    @endforeach
                </div>
            </div>
        </div>
    </div>

@endsection

@push('after-scripts')
    <script src="https://cdnjs.cloudflare.com/ajax/libs/trianglify/2.0.0/trianglify.min.js"></script>
    {{script('js/index.js')}}
@endpush
