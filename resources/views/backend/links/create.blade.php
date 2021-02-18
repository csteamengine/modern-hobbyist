@extends('backend.layouts.app')

@section('title', __('labels.backend.links.management') . ' | ' . __('labels.backend.links.create'))

@push('after-styles')
{{--    {!! style('/css/backend/link.css') !!}--}}
    {!! style('/css/backend/summernote.css') !!}
@endpush

@push('before-scripts')
{{--    <script src="/js/vendor.js"></script>--}}
@endpush


@section('content')
    @include('backend.links.includes.link_form', ['link' => new App\Models\link, 'action' => 'create', 'actionText' => 'create', 'method' => 'POST', 'route' => route('admin.links.store')])
@endsection

@push('after-scripts')
    {!! script(mix('js/backend/links/link.js')) !!}
@endpush
