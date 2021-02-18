<?php

Breadcrumbs::for('admin.links.index', function ($trail) {
    $trail->push(__('labels.backend.links.index'), route('admin.links.index'));
});

Breadcrumbs::for('admin.links.create', function ($trail) {
    $trail->parent('admin.links.index');
    $trail->push(__('labels.backend.links.create'), route('admin.links.create'));
});

Breadcrumbs::for('admin.links.show', function ($trail, $id) {
    $trail->parent('admin.links.index');
    $trail->push(__('menus.backend.links.view'), route('admin.links.show', $id));
});

Breadcrumbs::for('admin.links.edit', function ($trail, $id) {
    $trail->parent('admin.links.index');
    $trail->push(__('menus.backend.links.edit'), route('admin.links.edit', $id));
});
