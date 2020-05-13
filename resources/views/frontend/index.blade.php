@extends('frontend.layouts.index')

@section('title', app_name() . ' | ' . __('navs.general.home'))

@push('before-styles')
    {{ style(mix('css/index.css')) }}
    {{ style(mix('css/frontend/jobs/jobModal.css')) }}
@endpush

@section('content')
    <div class="fullscreen-bg">
        <div class="overlay"></div>
        @if($active_profile->background_video_active)
            <video class="lazy"
                   playsinline="playsinline"
                   autoplay="autoplay"
                   muted="muted"
                   loop="loop">
                <data-src src="{{asset('storage/'.$active_profile->background_video_file)}}" type="video/mp4"></data-src>
            </video>
        @endif
    </div>
    <div class="homeText">
        <div class="row p-0 m-0">
            <div class="col mt-auto mb-auto text-center ml-0 mr-0 p-0">
                <h1>Hello, I'm</h1>
                <h1>
            <span class="typewrite" data-period="2500"
                  data-type='[" an Engineer...", " a Web Developer...", " a Maker...", " a Modern Hobbyist."]'>
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
                        <div class="col-12 col-lg-5 mb-3 mt-5 m-lg-auto">
                            <img src="{{asset('storage/'.$active_profile->about_image()->small_url)}}" class="about-image img-fluid">
                        </div>
                        <div class="col-12 col-lg-6 mt-3 mb-5 m-lg-auto text-left">
                            <h1><span class="text-secondary">I'm </span>Charlie Steenhagen</h1>
                            <h3 class="text-secondary">Software Engineer, Web Developer, Maker</h3>
                            <p class="text-secondary">
                                {{$active_profile->short_about_description}}
                            </p>
                            <a class="m-auto" href="{{route('frontend.about')}}">
                                <button class="btn btn-lg btn-outline-primary m-auto" >
                                    More About Me
                                    <i class="fas fa-arrow-right"></i>
                                </button>
                            </a>
                            @if($active_profile->resume_download_active)
                                <a href="{{asset('storage/'.$active_profile->resume_file)}}" download>
                                    <button class="btn btn-lg btn-outline-primary">
                                        Download Resume
                                        <i class="fas fa-download"></i>
                                    </button>
                                </a>
                            @endif
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
                    <div class="row justify-content-center m-5">
                        <h1>Projects</h1>
                    </div>
                    <div class="row justify-content-center mt-5">
                        @foreach($projects as $project)
                            @if($project->images()->first())
                                <div class="col mb-5">
                                    <div class="project-bg row m-auto">
                                        <div class="project-bg-image"
                                             data-image="{{asset('storage/'.$project->images()->first()->small_url)}}"
                                             style="background-color: #{{$project->images()->first()->color}}">
                                        </div>
                                        <a href="{{route('frontend.projects.show', $project)}}">
                                            <div class="project-overlay">
                                                <div class="project-text row m-auto h-100">
                                                    <div class="col m-auto">
                                                        <h3 class="project-title" v-cloak>{{$project->title}}</h3>
                                                        <h5 class="project-description">{{date_format($project->created_at, 'm-d-Y')}}</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>

                                    </div>
                                </div>
                            @endif
                            @if ($loop->index >= 3)
                                @break
                            @endif
                        @endforeach
                    </div>
                    <div class="row m-5">
                        <a class="m-auto" href="{{route('frontend.projects.index')}}">
                            <button class="btn btn-lg btn-outline-primary m-auto" >See More!</button>
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
                                <div class="ml-auto d-none d-lg-block col-2">
                                    <div class="row m-auto h-100">
                                        <div class="vertical-line {{$loop->index == 0 ? "vertical-line-first" : ""}} {{$loop->last ? "vertical-line-last" : ""}}"></div>
                                        <span class="m-auto">
                                            <i class="fa fa-circle m-auto"></i>
                                        </span>
                                    </div>
                                </div>
                                @include('frontend.jobs.jobcard', ['order'=>'even'])
                            @else
                                @include('frontend.jobs.jobcard', ['order' => 'odd'])
                                <div class="d-none d-lg-block col-2">
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
                    @include('frontend.jobs.jobmodal')
                </div>
                <div class="col-12 mb-5">
                    <a href="{{route('frontend.jobs.index')}}" class="btn btn-lg btn-outline-primary m-auto" data-toggle="tooltip" data-placement="bottom" title="Nosy Little Bugger">Keep Digging</a>
                </div>
            </div>
            <div class="row" id="contact"></div>
        </div>
    </div>

@endsection

@push('after-scripts')
    {{script('js/index.js')}}
    {{script('js/jobModal.js')}}
@endpush
