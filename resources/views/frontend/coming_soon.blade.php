@extends('frontend.layouts.coming_layout')

@section('title', app_name() . ' | ' . __('navs.general.home'))

@push('before-styles')
    {{ style(mix('css/index.css')) }}
    <style>
        .coming-soon-contact{
            position: fixed;
            height: 100%;
            width: 100%;
            top: 0;
            left: 0;
        }
        .coming-soon-contact img{
            border: 1px solid #FEC901;
        }
    </style>
@endpush

@section('content')

<div class="row m-auto coming-soon-contact">
    <div class="page-title col text-center m-auto">
        <div class="row">
            <div class="col">
                <img class="img rounded-circle m-auto" src="{{asset('storage/ModernHobbyistInstagramLogo.png')}}">
            </div>
        </div>
        <div class="row">
            <div class="col">
                <h1>Coming Soon!</h1>
            </div>
        </div>
    </div>
</div>

@endsection

@push('after-scripts')
    <script src="https://cdnjs.cloudflare.com/ajax/libs/trianglify/2.0.0/trianglify.min.js"></script>
{{--    {{script('js/index.js')}}--}}
@endpush
