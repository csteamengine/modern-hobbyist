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
            <div class="col-sm-5">
                <h4 class="card-title mb-0">
                    {{ __('labels.backend.links.management') }}
                </h4>
            </div><!--col-->

            <div class="col-sm-7">
                @include('backend.links.includes.header-buttons')
            </div><!--col-->
        </div><!--row-->

        <div class="row mt-4">
            <div class="col">
                <div class="table-responsive ">
                    <table class="table table-striped" id="linksTable">
                        <thead>
                        <tr>
                            <th>priority</th>
                            <th>ID</th>
                            <th>Status</th>
                            <th>Title</th>
                            <th>URL</th>
                            <th>Dates</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        @foreach($links as $link)
                            <tr>
                                {{--Order--}}
                                <td>{{$loop->index+1}}</td>

                                {{--ID--}}
                                <td>{{$link->id}}</td>
                                <td>
                                    {{ html()->modelForm($link, 'edit', route('admin.links.activate', $link))->class('form-horizontal')->open() }}
                                    {{csrf_field()}}
                                    {{ method_field('PATCH') }}
                                    <label class="switch switch-success m-0 pb-0 pt-1">
                                        {{html()->checkbox('is_active', $checked = $link->is_active)
                                                ->id("customSwitch".$link->id)
                                                ->class('form-control switch-input')
                                                ->attribute('onchange',"this.form.submit()")
                                               }}
                                        <span class="switch-slider"></span>
                                    </label>
                                    {{ html()->closeModelForm() }}
                                </td>
                                <td class="align-middle">{{$link->title}}</td>
                                <td class="align-middle">{{$link->url}}</td>
                                <td class="align-middle">{{$link->start_date}} - {{$link->end_date}}</td>
                                <td class="align-middle">
                                    @include('backend.links.includes.actions')
                                </td>
                            </tr>
                        @endforeach
                        </tbody>
                    </table>
                </div>
            </div><!--col-->
        </div><!--row-->
    </div><!--card-body-->
</div><!--card-->

<input type="hidden" name="order-route" id="orderRoute" value="{{route('admin.links.reorder')}}">
<input type="hidden" name="csrf-value" id="csrfValue" value="{{csrf_token()}}">
@endsection
@push('after-scripts')
    {!! script('https://cdn.datatables.net/1.10.20/js/jquery.dataTables.min.js') !!}
    {!! script('https://cdn.datatables.net/1.10.20/js/dataTables.bootstrap4.min.js') !!}
    {!! script('https://cdn.datatables.net/rowreorder/1.2.5/js/dataTables.rowReorder.min.js') !!}
    {!! script(mix('js/backend/links/links.js')) !!}

@endpush
