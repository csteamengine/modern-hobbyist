@extends('backend.layouts.app')

@section('title', __('labels.backend.projects.management') . ' | ' . __('labels.backend.projects.edit'))

@push('after-styles')
    {!! style('/css/backend/project.css') !!}
    <!-- include summernote css/js-->
    {!! style('/css/backend/summernote.css') !!}
@endpush

@push('before-scripts')
{{--    <script src="/js/vendor.js"></script>--}}
@endpush

@section('content')
    @include('backend.projects.includes.project_form', ['project' => $project, 'action' => 'edit', 'actionText' => "update", 'method' => 'PATCH', 'route' => route('admin.projects.update', $project)])
@endsection

@push('after-scripts')
    {!! script('/js/vendor.js') !!}
    {!! script(mix('js/backend/projects/project.js')) !!}
@endpush
