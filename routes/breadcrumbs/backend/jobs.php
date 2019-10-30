<?php

Breadcrumbs::for('admin.jobs.index', function ($trail) {
    $trail->parent('admin.dashboard');
    $trail->push(__('labels.backend.jobs.index'), route('admin.jobs.index'));
});

Breadcrumbs::for('admin.jobs.create', function ($trail) {
    $trail->parent('admin.jobs.index');
    $trail->push(__('labels.backend.jobs.create'), route('admin.jobs.create'));
});

Breadcrumbs::for('admin.jobs.show', function ($trail, $id) {
    $trail->parent('admin.jobs.index');
    $trail->push(__('menus.backend.jobs.view'), route('admin.jobs.show', $id));
});

Breadcrumbs::for('admin.jobs.edit', function ($trail, $id) {
    $trail->parent('admin.jobs.index');
    $trail->push(__('menus.backend.jos.edit'), route('admin.jobs.edit', $id));
});
