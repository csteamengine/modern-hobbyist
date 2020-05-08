@extends('frontend.layouts.app')

@section('title', app_name() . ' | ' . __('navs.general.career.index'))

@push('before-styles')
    {{ style(mix('css/frontend/jobs/index.css')) }}
    {{ style(mix('css/frontend/jobs/jobModal.css')) }}
@endpush

@section('content')
    <div id="career" class="row text-center w-100 p-0 m-0 mt-5">
        <div class="col-12 text-center m-auto">
            <h1>Career</h1>
        </div>
        <div class="col-md-10 m-auto">
            <div class="row">
                <div class="col">
                    @foreach($jobs as $job)
                    <!-- timeline item 1 -->
                        <div class="row no-gutters my-5">
                            @if($loop->index % 2)
                                <div class="ml-auto d-none d-lg-block col-2">
                                    <div class="row m-auto h-100">
                                        <div class="vertical-line {{$loop->index == 0 ? "vertical-line-first" : ""}} {{$loop->last ? "vertical-line-last" : ""}}"></div>
                                        <span class="m-auto">
                                            <i class="fa fa-circle m-auto"></i>
                                        </span>
                                    </div>
                                </div>
                                @include('frontend.jobs.jobcard', ['order'=>'even'])
                            @else
                                @include('frontend.jobs.jobcard', ['order' => 'odd'])
                                <div class="d-none d-lg-block col-2">
                                    <div class="row m-auto h-100">
                                        <div class="vertical-line {{$loop->index == 0 ? "vertical-line-first" : ""}} {{$loop->last ? "vertical-line-last" : ""}}"></div>
                                        <span class="m-auto">
                                            <i class="fa fa-circle m-auto"></i>
                                        </span>
                                    </div>
                                </div>
                            @endif
                        </div>
                        <!--/row-->
                    @endforeach
                </div>
            </div>
        </div>
    </div>
    @include('frontend.jobs.jobmodal')
    <div class="row mt-5 mb-5">
        <div class="col m-auto text-center">
            <button class="btn btn-outline-primary">Download Resume</button>
        </div>
    </div>
@endsection

@push('after-scripts')
{{--    <script src="https://cdnjs.cloudflare.com/ajax/libs/trianglify/2.0.0/trianglify.min.js"></script>--}}
    {{script('js/jobs.js')}}
    {{script('js/jobModal.js')}}
@endpush
