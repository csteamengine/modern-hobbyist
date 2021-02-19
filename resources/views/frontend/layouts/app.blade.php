<!DOCTYPE html>
@langrtl
    <html lang="{{ str_replace('_', '-', app()->getLocale()) }}" dir="rtl">
@else
    <html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
@endlangrtl
    <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-C33CV6KX0M"></script>
        <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-C33CV6KX0M');
        </script>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>@yield('title', app_name())</title>
        <meta name="description" content="@yield('meta_description', 'Modern Hobbyist')">
        <meta name="author" content="@yield('meta_author', 'Charlie Steenhagen')">
        <meta property="og:image" content="{{asset('storage/'.$active_profile->about_image()->small_url)}}" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="{{env('APP_URL')}}" />
        <meta property="og:title" content="{{app_name()}}" />
        <meta property="og:description" content="@yield('meta_description', 'Modern Hobbyist')" />
        <link rel="icon" href="{{asset('storage/ModHobFaviconFinal.png')}}" type="image/png" sizes="16x16">
        <!-- Global site tag (gtag.js) - Google Analytics -->

        @yield('meta')

        {{-- See https://laravel.com/docs/5.5/blade#stacks for usage --}}
        @stack('before-styles')

        <!-- Check if the language is set to RTL, so apply the RTL layouts -->
        <!-- Otherwise apply the normal LTR layouts -->
        {{ style(mix('css/frontend.css')) }}

        @stack('after-styles')
    </head>
    <body>
        <div id="app">
            @include('frontend.includes.nav')

            <div class="container-fluid">
                @include('includes.partials.messages')
                <div id="project-particles"></div>
                @yield('content')
            </div><!-- container -->
        </div><!-- #app -->

        <!-- Scripts -->
        @stack('before-scripts')
        {!! script(mix('js/manifest.js')) !!}
        {!! script(mix('js/vendor.js')) !!}
        {!! script(mix('js/frontend.js')) !!}
        @stack('after-scripts')

        @include('includes.partials.ga')
    </body>
</html>
