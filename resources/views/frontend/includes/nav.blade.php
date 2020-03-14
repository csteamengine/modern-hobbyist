<nav id="nav" class="navbar navbar-expand-lg fixed-top navbar-dark bg-none mb-4">
    <button class="navbar-toggler navbar-toggler-right ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="@lang('labels.general.toggle_navigation')">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse justify-content-end float-right" id="navbarSupportedContent">
        <ul class="navbar-nav">
            @if(active_class(Active::checkRoute('frontend.index')))
                <li class="nav-item ml-auto"><a href="#home" class="nav-link">@lang('navs.frontend.index')</a></li>
                <li class="nav-item ml-auto"><a href="#about" class="nav-link">@lang('navs.frontend.about')</a></li>
                <li class="nav-item ml-auto"><a href="#projects" class="nav-link">@lang('navs.frontend.projects')</a></li>
                <li class="nav-item ml-auto"><a href="#career" class="nav-link">@lang('navs.frontend.career')</a></li>
                <li class="nav-item ml-auto"><a href="#contact" class="nav-link">@lang('navs.frontend.contact')</a></li>
            @else
                <li class="nav-item ml-auto"><a href="{{route('frontend.index')}}" class="nav-link {{ active_class(Active::checkRoute('frontend.index')) }}">@lang('navs.frontend.index')</a></li>
                <li class="nav-item ml-auto"><a href="{{route('frontend.about')}}" class="nav-link {{ active_class(Active::checkRoute('frontend.about')) }}">@lang('navs.frontend.about')</a></li>
                <li class="nav-item ml-auto"><a href="{{route('frontend.projects.index')}}" class="nav-link {{ active_class(Active::checkRoute('frontend.projects.*')) }}">@lang('navs.frontend.projects')</a></li>
                <li class="nav-item ml-auto"><a href="{{route('frontend.jobs.index')}}" class="nav-link {{ active_class(Active::checkRoute('frontend.jobs.*')) }}">@lang('navs.frontend.career')</a></li>
                <li class="nav-item ml-auto"><a href="{{route('frontend.contact')}}" class="nav-link {{ active_class(Active::checkRoute('frontend.contact')) }}">@lang('navs.frontend.contact')</a></li>
            @endif
        </ul>
    </div>
</nav>
