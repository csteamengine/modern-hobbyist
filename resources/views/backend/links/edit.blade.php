@extends('backend.layouts.app')

@section('title', __('labels.backend.links.management') . ' | ' . __('labels.backend.links.edit'))

@push('after-styles')
{{--    {!! style('/css/backend/link.css') !!}--}}
    <!-- include summernote css/js-->
    {!! style('/css/backend/summernote.css') !!}
@endpush

@push('before-scripts')
{{--    <script src="/js/vendor.js"></script>--}}
@endpush

@section('content')
    @include('backend.links.includes.link_form', ['link' => $link, 'action' => 'edit', 'actionText' => "update", 'method' => 'PATCH', 'route' => route('admin.links.update', $link)])
@endsection

@push('after-scripts')
    {!! script('/js/vendor.js') !!}
    {!! script(mix('js/backend/links/link.js')) !!}
@endpush
