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
                <img class="img rounded-circle m-auto" src="https://scontent-lga3-1.cdninstagram.com/v/t51.2885-19/s320x320/83308978_1068139800203072_7224162110295506944_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_ohc=hQQSxFKQR7MAX93mUfd&oh=f073a53c8cc38e75b2402bf521ee0f41&oe=5EACD5FC">
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
