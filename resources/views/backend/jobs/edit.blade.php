@extends('backend.layouts.app')

@push('after-styles')
    {!! style('/css/backend/job.css') !!}
@endpush

@section('title', __('labels.backend.jobs.management') . ' | ' . __('labels.backend.jobs.edit'))

@section('content')
    @include('backend.jobs.includes.job_form', ['job' => $job, 'action' => 'edit', 'actionText' => "update", 'method' => 'PATCH', 'route' => route('admin.jobs.update', $job)])
@endsection

@push('after-scripts')
    {!! script(mix('js/backend/jobs/job.js')) !!}
@endpush
