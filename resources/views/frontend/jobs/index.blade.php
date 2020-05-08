@extends('frontend.layouts.app')

@section('title', app_name() . ' | ' . __('navs.general.career.index'))

@push('before-styles')
    {{ style(mix('css/frontend/jobs/index.css')) }}
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
    <!-- Modal -->
    <div class="modal fade" id="jobHighlightModal" tabindex="-1" role="dialog" aria-labelledby="jobHighlightModal" aria-hidden="true">
        <div class="modal-dialog modal-xl modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row mb-0">
                        <div class="col m-auto text-center">
                            <img class="m-auto modal-body-image" src="" title="Job Image">
                        </div>
                    </div>
                    <div class="row mt-0 mb-3">
                        <div class="col">
                            <div class="row">
                                <div class="col text-center modal-body-company"></div>
                            </div>
                            <div class="row">
                                <div class="col text-center">
                                    <small class="text-secondary modal-body-date "></small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col modal-body-content text-center"></div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary m-auto" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
    <div class="row mt-5 mb-5">
        <div class="col m-auto text-center">
            <button class="btn btn-outline-primary">Download Resume</button>
        </div>
    </div>
@endsection

@push('after-scripts')
{{--    <script src="https://cdnjs.cloudflare.com/ajax/libs/trianglify/2.0.0/trianglify.min.js"></script>--}}
    {{script('js/jobs.js')}}
@endpush
