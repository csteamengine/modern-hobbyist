@extends('backend.layouts.app')

@section('title', app_name() . ' | ' . __('labels.backend.projects.management'))

@push('after-styles')
    {!! style('https://cdn.datatables.net/1.10.20/css/dataTables.bootstrap4.min.css') !!}
@endpush

@section('content')
<div class="card">
    <div class="card-body">
        <div class="row">
            <div class="col-sm-5">
                <h4 class="card-title mb-0">
                    {{ __('labels.backend.projects.management') }}
                </h4>
            </div><!--col-->

            <div class="col-sm-7">
                @include('backend.projects.includes.header-buttons')
            </div><!--col-->
        </div><!--row-->

        <div class="row mt-4">
            <div class="col">
                <div class="table-responsive">
                    <table class="table" id="projectsTable">
                        <thead>
                        <tr>
                            <th>Title</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        @foreach($projects as $project)
                            <tr>
                                <td class="align-middle">{{$project->title}}</td>
                                <td class="align-middle">{{$project->started_at}} - {{$project->finished_at}}</td>
                                <td class="align-middle">
                                    @include('backend.projects.includes.actions')
                                </td>
                            </tr>
                        @endforeach
                        </tbody>
                    </table>
                </div>
            </div><!--col-->
        </div><!--row-->
    </div><!--card-body-->
</div><!--card-->
@endsection
@push('after-scripts')
    {!! script('https://cdn.datatables.net/1.10.20/js/jquery.dataTables.min.js') !!}
    {!! script('https://cdn.datatables.net/1.10.20/js/dataTables.bootstrap4.min.js') !!}
    {!! script(mix('js/backend/projects/projects.js')) !!}

@endpush
