<div class="row form-group">
    <div class="col-md-12">
{{--        {{ html()->label(__('labels.backend.projects.forms.images'))--}}
{{--                            ->class('form-control-label')--}}
{{--                            ->for('images') }}--}}

{{--        {{ html()->file('images')--}}
{{--            ->class('form-control')--}}
{{--            }}--}}
        <label class="form-control-label mt-4" for="images">
            Images
        </label>
        <div id="newImageDiv" class="float-right mb-3">
            <a class="btn btn-secondary btn-lg" href="javascript:void(0)" onclick="$('#images').click()">
                <i class="fas fa-plus-square"></i>
            </a>
            <input type="file" id="images" name="images[]" style="display: none;" class="form-control" multiple>
        </div>
        <div class="images-zone">
            <div class="preview-images-zone form-control col" id="preview-images-zone-existing">
                @foreach($job->images()->get() as $image)
                    <div class="preview-image preview-show-{{$image->id}}">
                        <input type="hidden" name="existing_images[]" value="{{$image->id}}"/>
                        <div class="image-url" data-url="{{$image->url}}" data-id="{{$image->id}}" data-toggle="tooltip" data-placement="top" title="Tooltip on top">
                            <i class="fas fa-copy fa-xs text-secondary" title="Copy URL"></i>
                            <input class="image-url-input" type="text" name="image-url" value="{{$image->url}}" hidden>
                        </div>
                        <div class="image-cancel" data-no="{{$image->id}}" data-id="{{$image->id}}">
                            <i class="fas fa-trash fa-xs text-secondary" title="Delete Image"></i>
                        </div>
                        {{--                <div class="tools-edit-image">--}}
                        {{--                    <a href="javascript:void(0)" data-no="1" class="fas fa-edit fa-xs text-success"></a>--}}
                        {{--                </div>--}}
                        <div class="image-zone">
                            <img id="pro-img-{{$image->id}}" src="{{asset('storage/'.$image->small_url)}}">
                        </div>
                    </div>
                @endforeach
            </div>
        </div>
    </div>
</div>
<div class="row form-group">
    <div class="col-md-12">
        <label class="form-control-label" for="images" id="newImagesLabel" >
            Images To Be Added
        </label>
        <div class="preview-images-zone form-control col" id="preview-images-zone">
            <button type="button" class="btn btn-secondary" id="clearImages">
                Clear
            </button>
        </div>
    </div>
</div>
