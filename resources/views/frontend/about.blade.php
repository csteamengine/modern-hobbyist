@extends('frontend.layouts.app')

@section('title', app_name() . ' | ' . __('navs.general.about'))

@push('before-styles')
{{--    {{ style(mix('css/index.css')) }}--}}
@endpush

@section('content')
    <div class="row mt-5">
        <div class="col mt-5">
            <div class="row">
                <div class="col-4 m-auto about-image">
                    <img src="{{asset('storage/charlie.jpeg')}}" class="img-fluid">
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-4 m-auto text-center">
                    <h2>Charlie Steenhagen</h2>
                </div>
            </div>
            <div class="row mt-5 mb-5">
                <div class="col-10 m-auto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque gravida tristique euismod.
                    Proin vel convallis dui. Maecenas vitae ultrices lectus. Donec nulla felis, euismod vitae hendrerit
                    vel, aliquam eu metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse
                    platea dictumst. Nunc gravida sapien enim, eget finibus est pharetra quis. In non elementum nisi.
                    Phasellus feugiat, magna nec consequat vestibulum, massa neque dictum ante, id venenatis dolor
                    diam sed nisi. Duis ante neque, tristique vel orci id, ultrices convallis est. Aliquam non placerat
                    urna, ut vehicula elit. In porta leo massa, sed vulputate lacus ornare in. Praesent metus dui,
                    iaculis quis vehicula non, placerat sit amet ligula.
                </div>
            </div>
        </div>
    </div>
@endsection

@push('after-scripts')
{{--    <script src="https://cdnjs.cloudflare.com/ajax/libs/trianglify/2.0.0/trianglify.min.js"></script>--}}
{{--    {{script('js/index.js')}}--}}
@endpush
