@extends('frontend.layouts.app')

@section('title', app_name() . ' | ' . __('navs.general.projects.index'))

@push('before-styles')
    {{ style(mix('css/frontend/projects/index.css')) }}
@endpush

@section('content')
    <div class="row mt-5">
        <div class="col-12 m-auto text-center">
            <h1 class="m-auto">Projects</h1>
        </div>
    </div>
    <div id="projects" class="content-sections row text-center w-100 p-0 mr-0 ml-0 justify-content-center">
        <div class="col position-relative">
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
                @endforeach
            </div>

        </div>
    </div>
@endsection

@push('after-scripts')
    {{script('js/projects.js')}}
@endpush
