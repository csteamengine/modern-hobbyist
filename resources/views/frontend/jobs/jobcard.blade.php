<div class="job card col-12 col-lg-5">
    <div class="card-body" data-toggle="modal" data-target="#jobHighlightModal"
         data-title="{{$job->title}}"
         data-company="{{$job->company}}"
         data-description="{{$job->description}}"
         data-tenure="{{date_format(date_create($job->started_at), 'm-d-Y')}} - {{date_format(date_create($job->finished_at), 'm-d-Y')}}"
         data-image="https://cdn.freebiesupply.com/logos/large/2x/john-deere-6-logo-png-transparent.png"
    >
        <div class="row">
            <div class="col-12 col-md-6 m-auto {{$order == 'even' ? 'order-1' : 'order-12'}}">
                <img src="https://cdn.freebiesupply.com/logos/large/2x/john-deere-6-logo-png-transparent.png" class="job-image">
            </div>
            <div class="col-12 col-md-6 m-auto {{$order == 'even' ? 'order-12' : 'order-1'}} ">
                <h1 class="card-title">{{$job->title}}</h1>
                <h4 class="card-subtitle mb-2 text-muted">{{$job->company}}</h4>
                <h6 class="card-subtitle mb-2 text-secondary">{{date_format(date_create($job->started_at), 'm-d-Y')}} - {{date_format(date_create($job->finished_at), 'm-d-Y')}}</h6>
                <p class="card-text">{{$job->short_description}}</p>
            </div>
        </div>
    </div>
</div>
