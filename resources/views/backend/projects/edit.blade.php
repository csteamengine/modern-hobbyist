@extends('backend.layouts.app')

@section('title', __('labels.backend.projects.management') . ' | ' . __('labels.backend.projects.edit'))

@section('content')
    @include('backend.projects.includes.project_form', ['project' => $project, 'action' => 'edit', 'actionText' => "update", 'method' => 'PATCH', 'route' => route('admin.projects.update', $project)])
@endsection
