<section class="footer">
    <div class="container pages">
        <div class="row">
            <div class="col-md-10 nav-links">
                <a href="/" class="nav-link @if (Route::currentRouteName() == 'home') active @endif">
                    <p class="bn30">home</p>
                </a>
                <a href="{{ route('about') }}" class="nav-link @if (Route::currentRouteName() == 'about') active @endif">
                    <p class="bn31">about</p>
                </a>
                <a href="{{ route('expertise') }}" class="nav-link @if (Route::currentRouteName() == 'expertise') active @endif">
                    <p class="bn32">expertise</p>
                </a>
                <a href="{{ route('contact') }}" class="nav-link @if (Route::currentRouteName() == 'contact') active @endif">
                    <p class="bn34">contact</p>
                </a>
            </div>

            <a href="{{ route('music') }}" class="nav-link col-2   @if (Route::currentRouteName() == 'music') active-1 @endif" target="_blank">

                <p class="bn35">experience</p>
            </a>


        </div>
    </div>

</section>
