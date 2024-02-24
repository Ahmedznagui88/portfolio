
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
                {{-- <a href="/" class="nav-link @if (Route::currentRouteName() == 'work') active @endif">
                    <p class="bn33">work</p>
                </a> --}}
                <a href="{{ route('contact') }}" class="nav-link @if (Route::currentRouteName() == 'contact') active @endif">
                    <p class="bn34">contact</p>
                </a>
            </div>
            
            <a href="{{ route('music') }}" class="nav-link col-2  @if (Route::currentRouteName() == 'music') active-1 @endif" target="_blank">
                {{-- <svg class="svg-no-footer" width="59" height="59" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="29.5" cy="29.5" r="29.5" fill="#FE9739" fill-opacity="0.92"/>
                    <path d="M12 28.5C11.7239 28.5 11.5 28.7239 11.5 29C11.5 29.2761 11.7239 29.5 12 29.5V28.5ZM45.3536 29.3536C45.5488 29.1583 45.5488 28.8417 45.3536 28.6464L42.1716 25.4645C41.9763 25.2692 41.6597 25.2692 41.4645 25.4645C41.2692 25.6597 41.2692 25.9763 41.4645 26.1716L44.2929 29L41.4645 31.8284C41.2692 32.0237 41.2692 32.3403 41.4645 32.5355C41.6597 32.7308 41.9763 32.7308 42.1716 32.5355L45.3536 29.3536ZM12 29.5H45V28.5H12V29.5Z" fill="#F6F1EE"/>
                </svg> --}}
                <p class="bn35">experience</p>
            </a>
            
    
        </div>
    </div>            

</section>

