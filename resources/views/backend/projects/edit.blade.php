@extends('backend.layouts.app')

@section('title', __('labels.backend.projects.management') . ' | ' . __('labels.backend.projects.edit'))

@push('after-styles')
    {!! style('/css/backend/project.css') !!}
    <!-- include summernote css/js-->
    <link href="http://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.1/summernote.css" rel="stylesheet">
@endpush

@push('before-scripts')
    <script src="/js/vendor.js"></script>
@endpush

@section('content')
    @include('backend.projects.includes.project_form', ['project' => $project, 'action' => 'edit', 'actionText' => "update", 'method' => 'PATCH', 'route' => route('admin.projects.update', $project)])
@endsection

@push('after-scripts')
    {!! script(mix('js/backend/projects/project.js')) !!}
    {!! script('https://code.jquery.com/ui/1.12.1/jquery-ui.js') !!}
@endpush
