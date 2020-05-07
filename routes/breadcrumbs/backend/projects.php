<?php

Breadcrumbs::for('admin.projects.index', function ($trail) {
    $trail->push(__('labels.backend.projects.index'), route('admin.projects.index'));
});

Breadcrumbs::for('admin.projects.create', function ($trail) {
    $trail->parent('admin.projects.index');
    $trail->push(__('labels.backend.projects.create'), route('admin.projects.create'));
});

Breadcrumbs::for('admin.projects.show', function ($trail, $id) {
    $trail->parent('admin.projects.index');
    $trail->push(__('menus.backend.projects.view'), route('admin.projects.show', $id));
});

Breadcrumbs::for('admin.projects.edit', function ($trail, $id) {
    $trail->parent('admin.projects.index');
    $trail->push(__('menus.backend.projects.edit'), route('admin.projects.edit', $id));
});
