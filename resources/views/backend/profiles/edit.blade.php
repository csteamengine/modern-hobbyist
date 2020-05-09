@extends('backend.layouts.app')

@section('title', __('labels.backend.profiles.management') . ' | ' . __('labels.backend.profiles.edit'))

@push('after-styles')
    {!! style('/css/backend/profile.css') !!}
    <!-- include summernote css/js-->
    {!! style('/css/backend/summernote.css') !!}
@endpush

@push('before-scripts')
{{--    <script src="/js/vendor.js"></script>--}}
@endpush

@section('content')
    @include('backend.profiles.includes.profile_form', ['profile' => $profile, 'action' => 'edit', 'actionText' => "update", 'method' => 'PATCH', 'route' => route('admin.profiles.update', $profile)])
@endsection

@push('after-scripts')
    {!! script('/js/vendor.js') !!}
    {!! script(mix('js/backend/profiles/profile.js')) !!}
@endpush
