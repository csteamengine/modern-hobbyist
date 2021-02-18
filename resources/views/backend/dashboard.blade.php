@extends('backend.layouts.app')

@section('title', app_name() . ' | ' . __('strings.backend.dashboard.title'))

@section('content')
    <div class="row">
        <div class="col">
            <div class="card">
                <div class="card-header">
                    <strong>@lang('strings.backend.dashboard.welcome') {{ $logged_in_user->name }}!</strong>
                </div><!--card-header-->
                <div class="card-body">
                    <div class="card-group mb-4">
                        <div class="card">
                            <div class="card-body">
                                <div class="text-muted text-right mb-4">
                                    <i class="nav-icon fa-3x fas fa-chart-line"></i>
                                </div>
                                <div class="text-value-lg">{{$visits}}</div><small class="text-muted text-uppercase font-weight-bold">Visits in Last 24hrs</small>
                                <div class="progress progress-xs mt-3 mb-0">
                                    <div class="progress-bar bg-info" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <div class="text-muted text-right mb-4">
                                    <i class="nav-icon fa-3x fas fa-rocket"></i>
                                </div>
                                <div class="text-value-lg">{{$projects}}</div><small class="text-muted text-uppercase font-weight-bold">Active Projects</small>
                                <div class="progress progress-xs mt-3 mb-0">
                                    <div class="progress-bar bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <div class="text-muted text-right mb-4">
                                    <i class="nav-icon fa-3x fas fa-shopping-bag"></i>
                                </div>
                                <div class="text-value-lg">1238</div><small class="text-muted text-uppercase font-weight-bold">Products sold</small>
                                <div class="progress progress-xs mt-3 mb-0">
                                    <div class="progress-bar bg-warning" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <div class="text-muted text-right mb-4">
                                    <i class="nav-icon fa-3x fas fa-suitcase"></i>
                                </div>
                                <div class="text-value-lg">{{$jobs}}</div><small class="text-muted text-uppercase font-weight-bold">Past Jobs</small>
                                <div class="progress progress-xs mt-3 mb-0">
                                    <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <div class="text-muted text-right mb-4">
                                    <i class="nav-icon fa-3x fas fa-play-circle"></i>
                                </div>
                                <div class="text-value-lg">12</div><small class="text-muted text-uppercase font-weight-bold">YouTube Videos</small>
                                <div class="progress progress-xs mt-3 mb-0">
                                    <div class="progress-bar bg-danger" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><!--card-body-->
            </div><!--card-->
        </div><!--col-->
    </div><!--row-->
@endsection
