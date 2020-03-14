@extends('frontend.layouts.app')

@section('title', app_name() . ' | ' . __('navs.general.home'))

@push('before-styles')
    {{--    {{ style(mix('css/index.css')) }}--}}
@endpush

@section('content')
    <div class="row">
        <div class="col">
            <h1>Job</h1>
        </div>
    </div>
@endsection

@push('after-scripts')
    {{--    <script src="https://cdnjs.cloudflare.com/ajax/libs/trianglify/2.0.0/trianglify.min.js"></script>--}}
    {{--    {{script('js/index.js')}}--}}
@endpush
