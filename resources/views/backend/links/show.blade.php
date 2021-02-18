@extends('backend.layouts.app')

@section('title', app_name() . ' | ' . __('labels.backend.links.management'))

@push('after-styles')
    {!! style('https://cdn.datatables.net/1.10.20/css/dataTables.bootstrap4.min.css') !!}

    <link rel="stylesheet" href="https://cdn.datatables.net/select/1.3.0/css/select.dataTables.min.css">
    <link rel="stylesheet" href="https://cdn.datatables.net/rowreorder/1.2.5/css/rowReorder.dataTables.min.css">
@endpush

@section('content')
    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="card">
                    <div class="card-header">Link Analytics
                        <div class="card-header-actions">
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="c-chart-wrapper">
                            <div class="chartjs-size-monitor">
                                <div class="chartjs-size-monitor-expand">
                                    <div class=""></div>
                                </div>
                                <div class="chartjs-size-monitor-shrink">
                                    <div class=""></div>
                                </div>
                            </div>
                            <canvas id="link-analytics" style="display: block; width: 100%;" width="758"
                                    height="378" class="chartjs-render-monitor"></canvas>
                            <div id="chart-data" data-visits="{{$visits}}" hidden></div>
                        </div>
                    </div>
                </div>
            </div>
        </div><!--card-body-->
    </div><!--card-->

    <input type="hidden" name="order-route" id="orderRoute" value="{{route('admin.links.reorder')}}">
    <input type="hidden" name="csrf-value" id="csrfValue" value="{{csrf_token()}}">
@endsection
@push('after-scripts')
    {{--    {!! script('https://cdn.datatables.net/1.10.20/js/jquery.dataTables.min.js') !!}--}}
    {{--    {!! script('https://cdn.datatables.net/1.10.20/js/dataTables.bootstrap4.min.js') !!}--}}
    {{--    {!! script('https://cdn.datatables.net/rowreorder/1.2.5/js/dataTables.rowReorder.min.js') !!}--}}
    {{--    {!! script(mix('js/backend/links/links.js')) !!}--}}
    {!! script(mix('js/backend/links/show.js')) !!}
    {!! script(mix('js/vendor.js')) !!}

@endpush
