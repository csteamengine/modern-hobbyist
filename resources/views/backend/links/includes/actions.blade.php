<div class="btn-group btn-group-sm" role="group" aria-label="@lang('labels.backend.boxes.actions')">
    <a href="{{ route('admin.links.show', $link) }}" class="btn btn-outline-success" data-toggle="tooltip"
       data-placement="top" title="Analytics">
        <i class="fas fa-chart-line"></i>
    </a>
    <a href="{{ route('admin.links.edit', $link) }}" class="btn btn-outline-success" data-toggle="tooltip"
       data-placement="top" title="Edit">
        <i class="fas fa-edit"></i>
    </a>
{{--    <a href="{{ route('frontent.links.view', $box) }}" class="btn btn-outline-primary" data-toggle="tooltip"--}}
{{--       data-placement="top" title="Manage">--}}
{{--        <i class="fas fa-tasks"></i>--}}
{{--    </a>--}}
    <a href="{{ route('admin.links.destroy', $link) }}"
       data-method="delete"
       data-trans-button-cancel="@lang('buttons.general.cancel')"
       data-trans-button-confirm="@lang('buttons.general.crud.delete')"
       data-trans-title="@lang('strings.backend.general.are_you_sure')"
       class="btn btn-outline-danger" data-toggle="tooltip" data-placement="top"
       title="@lang('buttons.general.crud.delete')">
        <i class="fas fa-trash"></i>
    </a>
</div>

