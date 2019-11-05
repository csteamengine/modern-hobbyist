@extends('backend.layouts.app')

@section('title', __('labels.backend.projects.management') . ' | ' . __('labels.backend.projects.create'))

@section('content')
    @include('backend.projects.includes.project_form', ['project' => new App\Models\project, 'action' => 'create', 'actionText' => 'create', 'method' => 'POST', 'route' => route('admin.projects.store')])
@endsection
