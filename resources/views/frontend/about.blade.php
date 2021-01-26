@extends('frontend.layouts.app')

@section('title', app_name() . ' | ' . __('navs.general.about'))

@push('before-styles')
    {{ style(mix('css/about.css')) }}
@endpush

@section('content')
    <div class="row mt-5">
        <div class="col mt-5">
            <div class="row" id="about">
                <div class="col-10 col-sm-8 col-md-6 col-lg-4 m-auto">
                    <div class="row">
                        <div class="about-image-container col-12 col-lg-5 mb-3 mt-5 m-lg-auto">
                            <div class="about-image"
                                 data-image="{{asset('storage/'.$active_profile->about_image()->small_url)}}"
                                 style="background-color: #{{$active_profile->about_image()->color}};">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mt-5">
                <div class="col-10 col-sm-8 col-md-6 col-lg-4 m-auto text-center">
                    <h2>{{$active_profile->name}}</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-sm-10 m-auto">
                    {!! $active_profile->about_page_content !!}
                </div>
            </div>
            <div class="row mt-5">
                <div class="col m-auto text-center">
                    <h2>A Look Into My Life</h2>
                </div>
            </div>
            <div class="row mt-5 mb-5">
                <div class="col-12 col-sm-10 m-auto">
                    <div class="row mb-5">
                        @foreach($active_profile->images()->get() as $image)
                            <div class="col-6 col-md-4 col-lg-3 m-auto">
                                <img class="w-100 about-image-small" data-image="{{asset('/storage/'.$image->small_url)}}">
                            </div>
                        @endforeach
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

@push('after-scripts')
{{--    <script src="https://cdnjs.cloudflare.com/ajax/libs/trianglify/2.0.0/trianglify.min.js"></script>--}}
    {{script('js/about.js')}}
@endpush
