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
    <div class="page-content">
        <div id="projects" class="content-sections row text-center">
            <div class="col-12 m-auto">
                <div class="row justify-content-around">
                    @foreach($projects as $project)
                        @if($project->images()->first())
                            <a href="{{route('frontend.projects.show', $project)}}">
                                <div class="project" data-image="{{asset('storage/'.$project->images()->first()->url)}}" style="background-color: #{{$project->images()->first()->color}};">
                                    <div class="project-overlay d-flex align-items-center justify-content-center">
                                        <div class="row">
                                            <div class="col">
                                                <h2>{{$project->title}}</h2>
                                                <h4 class="project-date">{{date_format(date_create($project->started_at), 'Y')}}</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        @else
                            <a href="{{route('frontend.projects.show', $project)}}">
                                <div class="project" data-image="" style="background-color: #2B2B2B;">
                                    <div class="project-overlay d-flex align-items-center justify-content-center">
                                        <div class="row">
                                            <div class="col">
                                                <h2>{{$project->title}}</h2>
                                                <h4 class="project-date">{{date_format(date_create($project->started_at), 'Y')}}</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        @endif
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
    </div>

@endsection

@push('after-scripts')
    <script src="https://cdnjs.cloudflare.com/ajax/libs/trianglify/2.0.0/trianglify.min.js"></script>
    {{script('js/index.js')}}
@endpush
