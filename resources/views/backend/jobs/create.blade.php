@extends('backend.layouts.app')

@section('title', __('labels.backend.access.users.management') . ' | ' . __('labels.backend.access.users.create'))

@push('after-styles')
    {!! style('/css/backend/job.css') !!}
@endpush

@section('content')
    @include('backend.jobs.includes.job_form', ['job' => new App\Models\Job, 'action' => 'create', 'actionText' => 'create', 'method' => 'POST', 'route' => route('admin.jobs.store')])
@endsection

@push('after-scripts')
    {!! script(mix('js/backend/jobs/job.js')) !!}
@endpush
