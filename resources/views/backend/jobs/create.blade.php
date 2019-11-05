@extends('backend.layouts.app')

@section('title', __('labels.backend.access.users.management') . ' | ' . __('labels.backend.access.users.create'))

@section('content')
    @include('backend.jobs.includes.job_form', ['job' => new App\Models\Job, 'action' => 'create', 'actionText' => 'create', 'method' => 'POST', 'route' => route('admin.jobs.store')])
@endsection
