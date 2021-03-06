@extends('backend.layouts.app')

@section('title', app_name() . ' | ' . __('labels.backend.jobs.management'))

@push('after-styles')
    {!! style('https://cdn.datatables.net/1.10.20/css/dataTables.bootstrap4.min.css') !!}
@endpush

@section('content')
<div class="card">
    <div class="card-body">
        <div class="row">
            <div class="col-sm-5">
                <h4 class="card-title mb-0">
                    {{ __('labels.backend.jobs.management') }}
                </h4>
            </div><!--col-->

            <div class="col-sm-7">
                @include('backend.jobs.includes.header-buttons')
            </div><!--col-->
        </div><!--row-->

        <div class="row mt-4">
            <div class="col">
                <div class="table-responsive">
                    <table class="table" id="jobsTable">
                        <thead>
                        <tr>
                            <th>Title</th>
                            <th>Company</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        @foreach($jobs as $job)
                            <tr>
                                <td class="align-middle">{{$job->title}}</td>
                                <td class="align-middle"><a href="{{$job->company_url}}" target="_blank">{{$job->company}}</a></td>
                                <td class="align-middle">{{$job->started_at}} - {{$job->finished_at}}</td>
                                <td class="align-middle">
                                    @include('backend.jobs.includes.actions')
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
    {!! script(mix('js/backend/jobs/jobs.js')) !!}

@endpush
