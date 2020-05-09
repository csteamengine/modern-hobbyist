<?php

Breadcrumbs::for('admin.profiles.index', function ($trail) {
    $trail->push(__('labels.backend.profiles.index'), route('admin.profiles.index'));
});

Breadcrumbs::for('admin.profiles.create', function ($trail) {
    $trail->parent('admin.profiles.index');
    $trail->push(__('labels.backend.profiles.create'), route('admin.profiles.create'));
});

Breadcrumbs::for('admin.profiles.show', function ($trail, $id) {
    $trail->parent('admin.profiles.index');
    $trail->push(__('menus.backend.profiles.view'), route('admin.profiles.show', $id));
});

Breadcrumbs::for('admin.profiles.edit', function ($trail, $id) {
    $trail->parent('admin.profiles.index');
    $trail->push(__('menus.backend.profiles.edit'), route('admin.profiles.edit', $id));
});
