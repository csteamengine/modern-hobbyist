@extends('backend.layouts.app')

@section('title', __('labels.backend.projects.management') . ' | ' . __('labels.backend.projects.create'))

@push('after-styles')
    {!! style('/css/backend/project.css') !!}
@endpush

@section('content')
    @include('backend.projects.includes.project_form', ['project' => new App\Models\project, 'action' => 'create', 'actionText' => 'create', 'method' => 'POST', 'route' => route('admin.projects.store')])
@endsection

@push('after-scripts')
    {!! script(mix('js/backend/projects/project.js')) !!}
    {!! script('https://code.jquery.com/ui/1.12.1/jquery-ui.js') !!}
@endpush
