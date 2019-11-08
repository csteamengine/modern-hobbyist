<div class="row form-group">
    <div class="col-md-12">
{{--        {{ html()->label(__('labels.backend.projects.forms.images'))--}}
{{--                            ->class('form-control-label')--}}
{{--                            ->for('images') }}--}}

{{--        {{ html()->file('images')--}}
{{--            ->class('form-control')--}}
{{--            }}--}}

        <div class="preview-images-zone form-control col" id="preview-images-zone-existing">
            @foreach($project->images()->get() as $image)
                <div class="preview-image preview-show-{{$image->id}}">
                    <input type="hidden" name="existing_images[]" value="{{$image->id}}"/>
                    <div class="image-cancel" data-no="{{$image->id}}" data-id="{{$image->id}}">
                        <i class="fas fa-trash fa-xs text-secondary"></i>
                    </div>
                    {{--                <div class="tools-edit-image">--}}
                    {{--                    <a href="javascript:void(0)" data-no="1" class="fas fa-edit fa-xs text-success"></a>--}}
                    {{--                </div>--}}
                    <div class="image-zone">
                        <img id="pro-img-{{$image->id}}" src="{{asset('storage/'.$image->url)}}">
                    </div>
                </div>
            @endforeach
        </div>
        <fieldset class="form-group">
            <a href="javascript:void(0)" onclick="$('#images').click()">Upload Image</a>
            <input type="file" id="images" name="images[]" style="display: none;" class="form-control" multiple>
        </fieldset>
        <button type="button" class="btn btn-secondary" id="clearImages">
            Clear
        </button>
        <div class="preview-images-zone form-control col" id="preview-images-zone">

        </div>
    </div>
</div>
