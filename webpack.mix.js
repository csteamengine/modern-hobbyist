const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.setPublicPath('public')
    .setResourceRoot('../') // turns assets paths in css relative to css file
    .sass('resources/sass/frontend/app.scss', 'css/frontend.css')
    .sass('resources/sass/frontend/projects/project.scss', 'css/frontend/projects/project.css')
    .sass('resources/sass/frontend/projects/index.scss', 'css/frontend/projects/index.css')
    .sass('resources/sass/frontend/index.scss', 'css/index.css')
    .sass('resources/sass/backend/app.scss', 'css/backend.css')
    .sass('resources/sass/backend/projects/project.scss', 'css/backend/project.css')
    .js('resources/js/frontend/app.js', 'js/frontend.js')
    .js('resources/js/frontend/index.js', 'js/index.js')
    .js('resources/js/backend/jobs/jobs.js', 'js/backend/jobs/jobs.js')
    .js('resources/js/backend/projects/projects.js', 'js/backend/projects/projects.js')
    .js('resources/js/backend/projects/project.js', 'js/backend/projects/project.js')
    .js([
        'resources/js/backend/before.js',
        'resources/js/backend/app.js',
        'resources/js/backend/after.js'
    ], 'js/backend.js')
    .extract([
        /* Extract packages from node_modules, only those used by front and
        backend, to vendor.js */
        'jquery',
        'bootstrap',
        'popper.js',
        'axios',
        'sweetalert2',
        'particles.js',
        'lodash'
    ])
    .sourceMaps();

if (mix.inProduction()) {
    mix.version()
        .options({
            // optimize js minification process
            terser: {
                cache: true,
                parallel: true,
                sourceMap: true
            }
        });
} else {
    // Uses inline source-maps on development
    mix.webpackConfig({ devtool: 'inline-source-map' });
}
