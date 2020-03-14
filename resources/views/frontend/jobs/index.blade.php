@extends('frontend.layouts.app')

@section('title', app_name() . ' | ' . __('navs.general.home'))

@push('before-styles')
{{--    {{ style(mix('css/index.css')) }}--}}
@endpush

@section('content')
    <h1>Jobs</h1>
@endsection

@push('after-scripts')
{{--    <script src="https://cdnjs.cloudflare.com/ajax/libs/trianglify/2.0.0/trianglify.min.js"></script>--}}
{{--    {{script('js/index.js')}}--}}
@endpush
