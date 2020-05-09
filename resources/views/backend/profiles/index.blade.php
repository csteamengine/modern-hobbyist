@extends('backend.layouts.app')

@section('title', app_name() . ' | ' . __('labels.backend.profiles.management'))

@push('after-styles')
    {!! style('https://cdn.datatables.net/1.10.20/css/dataTables.bootstrap4.min.css') !!}
@endpush

@section('content')
<div class="card">
    <div class="card-body">
        <div class="row">
            <div class="col-sm-5">
                <h4 class="card-title mb-0">
                    {{ __('labels.backend.profiles.management') }}
                </h4>
            </div><!--col-->

            <div class="col-sm-7">
                @include('backend.profiles.includes.header-buttons')
            </div><!--col-->
        </div><!--row-->

        <div class="row mt-4">
            <div class="col">
                <div class="table-responsive">
                    <table class="table" id="profilesTable">
                        <thead>
                        <tr>
                            <th>Status</th>
                            <th>Title</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        @foreach($profiles as $profile)
                            <tr>
                                <td>
                                    {{ html()->modelForm($profile, 'edit', route('admin.profiles.activate', $profile))->class('form-horizontal')->open() }}
                                        {{csrf_field()}}
                                        {{ method_field('PATCH') }}
                                    <label class="switch switch-success m-0 pb-0 pt-1">
                                            {{html()->checkbox('is_active', $checked = $profile->is_active)
                                                    ->id("customSwitch".$profile->id)
                                                    ->class('form-control switch-input')
                                                    ->attribute('onchange',"this.form.submit()")
                                                   }}
                                        <span class="switch-slider"></span>
                                    </label>
                                    {{ html()->closeModelForm() }}
                                </td>
                                <td class="align-middle">{{$profile->title}}</td>
                                <td class="align-middle">{{$profile->started_at}} - {{$profile->finished_at}}</td>
                                <td class="align-middle">
                                    @include('backend.profiles.includes.actions')
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
@endsection
@push('after-scripts')
    {!! script('https://cdn.datatables.net/1.10.20/js/jquery.dataTables.min.js') !!}
    {!! script('https://cdn.datatables.net/1.10.20/js/dataTables.bootstrap4.min.js') !!}
    {!! script(mix('js/backend/profiles/profiles.js')) !!}

@endpush
