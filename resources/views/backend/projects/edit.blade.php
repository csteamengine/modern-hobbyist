@extends('backend.layouts.app')

@section('title', __('labels.backend.projects.management') . ' | ' . __('labels.backend.projects.edit'))

@push('after-styles')
    {!! style('/css/backend/project.css') !!}
@endpush

@section('content')
    @include('backend.projects.includes.project_form', ['project' => $project, 'action' => 'edit', 'actionText' => "update", 'method' => 'PATCH', 'route' => route('admin.projects.update', $project)])
@endsection

@push('after-scripts')
    {!! script(mix('js/backend/projects/project.js')) !!}
    {!! script('https://code.jquery.com/ui/1.12.1/jquery-ui.js') !!}
@endpush
