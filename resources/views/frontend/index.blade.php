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

    <div class="row filler-section" id="home"></div>
    <div class="page-content row justify-content-center">
        <div class="scroll-downs">
            <div class="mousey">
                <div class="scroller"></div>
            </div>
        </div>
        <div class="inner-page-content col-12 p-0">
            <div id="about" class="content-sections row text-center align-content-center w-100 p-0 m-0">
                <div class="col-10 mb-5 ml-auto mr-auto mt-auto m-lg-auto">
                    <div class="row">
                        <div class="col-12 col-lg-5 mb-3 m-lg-auto">
                            <img src="{{asset('storage/charlie.jpeg')}}" class="about-image img-fluid">
                        </div>
                        <div class="col-12 col-lg-6 mt-3 mb-5 m-lg-auto text-left">
                            <h1><span class="text-secondary">I'm </span>Charlie Steenhagen</h1>
                            <h3 class="text-secondary">Software Engineer, Web Developer, Maker</h3>
                            <p class="text-secondary">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Vivamus turpis mi, elementum at cursus et, hendrerit ac lectus.
                            </p>
                            <button class="btn btn-lg btn-outline-primary">
                                More About Me
                                <i class="fas fa-arrow-right"></i>
                            </button>
                            <button class="btn btn-lg btn-outline-primary">
                                Download Resume
                                <i class="fas fa-download"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row row-overlap w-100 p-0 m-0 d-none d-sm-block">
                <div class="row-overlap-child col-10 m-auto align-items-center">
                    <div class="row m-auto h-100">
                        <div class="row-overlap-child-counter col-6 col-sm-3 text-center m-auto">
                            <div class="row h-100">
                                <h2 class="col-12 mt-auto">{{$projects->count()}}</h2>
                                <p class="col-12 text-muted mb-auto">Completed Projects</p>
                            </div>
                        </div>
                        <div class="row-overlap-child-counter col-6 col-sm-3 text-center m-auto">
                            <div class="row h-100">
                                <h2 class="col-12 mt-auto" id="youtubeVideoCount">{{$videoCount}}</h2>
                                <p class="col-12 text-muted mb-auto">YouTube Videos</p>
                            </div>
                        </div>
                        <div class="row-overlap-child-counter col-6 col-sm-3 text-center m-auto">
                            <div class="row h-100">
                                <h2 class="col-12 mt-auto">375</h2>
                                <p class="col-12 text-muted mb-auto">Cups of Coffee</p>
                            </div>
                        </div>
                        <div class="row-overlap-child-counter col-6 col-sm-3 text-center m-auto">
                            <div class="row h-100">
                                <h2 class="col-12 mt-auto">
                                    <i class="fas fa-infinity"></i>
                                </h2>
                                <p class="col-12 text-muted mb-auto">Things Learned</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div id="projects" class="content-sections row text-center w-100 p-0 mr-0 ml-0 justify-content-center">
                <div class="col mt-5 position-relative">
{{--                    <div class="row justify-content-center m-5">--}}
{{--                        <h1>Projects</h1>--}}
{{--                    </div>--}}
                    <div class="row justify-content-center mt-5">
                        @foreach($projects as $project)
                            @if($project->images()->first())
                                <div class="col mb-5">
                                    <div class="project-bg row m-auto">
                                        <div class="project-bg-image"
                                             data-image="{{asset('storage/'.$project->images()->first()->url)}}"
                                             style="background-color: #{{$project->images()->first()->color}}">
                                        </div>
                                        <a href="{{route('frontend.projects.show', $project)}}">
                                            <div class="project-overlay">
                                                <div class="project-text row m-auto h-100">
                                                    <div class="col m-auto">
                                                        <h3 class="project-title" v-cloak>{{$project->title}}</h3>
                                                        <h5 class="project-description">{{$project->short_description}}</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>

                                    </div>
                                </div>
                            @endif
                        @endforeach
                    </div>
                    <div class="row m-5">
                        <a class="m-auto" href="{{route('frontend.projects.index')}}">
                            <button class="btn btn-lg btn-outline-primary m-auto">View All Projects</button>
                        </a>
                    </div>
                </div>
            </div>
            <div id="career" class="content-sections row text-center w-100 p-0 m-0">
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
                                <div class="job card col-12 col-md-5">
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
                                <div class="job card col-12 col-md-5">
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
                <div class="col-12 mb-5">
                    <button class="btn btn-lg btn-outline-primary m-auto">Download Resume</button>
                </div>
            </div>
            <div class="row" id="contact"></div>
        </div>
    </div>

@endsection

@push('after-scripts')
    <script src="https://cdnjs.cloudflare.com/ajax/libs/trianglify/2.0.0/trianglify.min.js"></script>
    {{script('js/index.js')}}
@endpush
