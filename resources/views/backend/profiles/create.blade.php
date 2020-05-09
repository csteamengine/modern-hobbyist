@extends('backend.layouts.app')

@section('title', __('labels.backend.profiles.management') . ' | ' . __('labels.backend.profiles.create'))

@push('after-styles')
    {!! style('/css/backend/profile.css') !!}
    {!! style('/css/backend/summernote.css') !!}
@endpush

@push('before-scripts')
{{--    <script src="/js/vendor.js"></script>--}}
@endpush


@section('content')
    @include('backend.profiles.includes.profile_form', ['profile' => new App\Models\Profile, 'action' => 'create', 'actionText' => 'create', 'method' => 'POST', 'route' => route('admin.profiles.store')])
@endsection

@push('after-scripts')
    {!! script(mix('js/backend/profiles/profile.js')) !!}
@endpush
