<main id="myPage" class="container">
    <article class="article-sec container-fluid">
        <div class="row">
            <div class="col-md-7 div-par">
                <a href="{{ route('about') }}" class="ref-1">
                    <p class="about">about</p>
                </a>
                <a href="{{ route('expertise') }}" class="ref-1">
                    <p class="expertise">expertise</p>
                </a>
                {{-- <a href="" class="ref-1">
                    <p class="work">work</p>
                </a> --}}
                <a href="{{ route('contact') }}" class="ref-1">
                    <p class="contact">contact</p>
                </a>
            </div>
            <div id="divOpera" class="col-md-5 div-opera ">
                <p class="text-header">Multidisciplinary, creative websites, visual experiences, and composing unique
                    melodies.</p>
                <div class=" h-25">
                    <a href="{{ route('music') }}">
                        <svg class="svg-no-grayscale" width="59" height="59" viewBox="0 0 59 59" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <circle cx="29.5" cy="29.5" r="29.5" fill=" #ed9f29" />
                            <path
                                d="M12 28.5C11.7239 28.5 11.5 28.7239 11.5 29C11.5 29.2761 11.7239 29.5 12 29.5V28.5ZM45.3536 29.3536C45.5488 29.1583 45.5488 28.8417 45.3536 28.6464L42.1716 25.4645C41.9763 25.2692 41.6597 25.2692 41.4645 25.4645C41.2692 25.6597 41.2692 25.9763 41.4645 26.1716L44.2929 29L41.4645 31.8284C41.2692 32.0237 41.2692 32.3403 41.4645 32.5355C41.6597 32.7308 41.9763 32.7308 42.1716 32.5355L45.3536 29.3536ZM12 29.5H45V28.5H12V29.5Z"
                                fill="white" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </article>
    
    <x-footer />   
</main>

