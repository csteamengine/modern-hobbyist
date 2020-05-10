<div class="job card col-12 col-lg-5">
    <div class="card-body" data-toggle="modal" data-target="#jobHighlightModal"
         data-title="{{$job->title}}"
         data-company="{{$job->company}}"
         data-url="{{$job->company_url}}"
         data-description="{{$job->description}}"
         data-tenure="{{date_format(date_create($job->started_at), 'm-d-Y')}} - {{date_format(date_create($job->finished_at), 'm-d-Y')}}"
         data-image="{{$job->images()->first() ? Storage::url($job->images()->first()->small_url) : ""}}"
    >
        <div class="row">
            <div class="col-12 col-md-6 m-auto {{$order == 'even' ? 'order-md-1' : 'order-md-12'}}">
                <img src="{{$job->images()->first() ? Storage::url($job->images()->first()->small_url) : ""}}" class="job-image">
            </div>
            <div class="col-12 col-md-6 m-auto {{$order == 'even' ? 'order-md-12' : 'order-md-1'}} ">
                <h1 class="card-title">{{$job->title}}</h1>
                <h4 class="card-subtitle mb-2 text-muted">{{$job->company}}</h4>
                <h6 class="card-subtitle mb-2 text-secondary">{{date_format(date_create($job->started_at), 'm-d-Y')}} - {{$job->finished_at == "" ? "Present" : date_format(date_create($job->finished_at), 'm-d-Y')}}</h6>
                <p class="card-text">{{$job->short_description}}</p>
            </div>
        </div>
    </div>
</div>
