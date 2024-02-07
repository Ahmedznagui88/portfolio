<x-layout>

    <div id="cardCont" class="container">
        <div class="row d-flex justify-content-start">
            <div class="div-cont col-sm-5 border-none d-flex justify-content-start align-items-start ">
                <h2 class="expertise">expertise</h2>
            </div>
        </div>
    </div>

    <div class="container cont-figma">
        <div class="row row-prot">
            <div class="col-md-6 div-prot">
                <h6 class="stack">prototyping</h6>
            </div>
        </div>

        <div class="row row-figma">
            <div class="col-md-6 div-figma-2">
                <p class="text-figma">The first step, is to study and define how the website will look, through the
                    design and creation of a mock-up to get an idea of the visual, studying all aspects of UI and UX
                    based on the client's needs.</p>
            </div>

            <div class="col-md-6 div-figma">
                <p class="stack">figma</p>
            </div>
        </div>

    </div>

    <div class="container containee">

        <div class="row row-cont">
            <div class="col-md-3">
                <img src="./img/Esercizio di stile 3.png" class="w-100 rounded" alt="">
            </div>

            <div class="col-md-3">
                <img src="./img/Esercizio di stile 4.png" class="w-100 rounded" alt="">
            </div>

            <div class="col-md-3">
                <img src="./img/Esercizio di stile 5.png" class="w-100 rounded" alt="">
            </div>

            <div class="col-md-3">
                <img src="./img/MacBook Pro 14_ - 1.png" class="w-100 rounded" alt="">
            </div>
        </div>
    </div>

    <div class="container cont-expertise">
        <div class="row row-expertise">
            <div class="col-md-12 div-expertise">
                <p class="stack">front-end</p>
            </div>
        </div>


        <div class="row row-expertise-2">
            <div class="col-md-6 div-expertise-2 text-center">
                <h5>html</h5>
                <h5>css</h5>
                <h5>bootstrap</h5>
                <h5>gsap</h5>
                <h5>javascript</h5>
                <h5>react</h5>
            </div>

            <div class="col-md-5 div-front-2">
                <p class="text-figma text-dark">HTML structures web content, CSS styles it, and JavaScript adds
                    interactivity. GSAP refines animations, providing a seamless user experience. React streamlines
                    dynamic UI creation by efficiently managing components.</p>
            </div>
        </div>
    </div>

    <div class="container cont-expertise ">
        <div class="row row-expertise">
            <div class="col-md-6 div-expertise">
                <p class="stack">back-end</p>
            </div>
        </div>

        <div class="row row-expertise-2">
            <div class="col-md-6 div-expertise-3 text-center d-flex align-items-center justify-content-center">
                <h5>php</h5>
                <h5>laravel</h5>
                <h5>mySql</h5>
            </div>

            <div class="col-md-5 div-front-2">
                <p class="text-figma text-dark">
                    PHP handles server-side logic, Laravel is a PHP framework that streamlines web development with
                    elegant syntax and built-in tools. MySQL is a relational database management system used with PHP to
                    store and retrieve data efficiently.</p>
            </div>
        </div>
    </div>






{{-- 

    <svg class="" width="1425" height="150" viewBox="0 0 1728 151" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="864" cy="400.5" rx="1260" ry="320.5" fill="url(#paint0_linear_999_30)"/>ewrewr
        <defs>
        <linearGradient id="paint0_linear_999_30" x1="864" y1="0" x2="864" y2="150" gradientUnits="userSpaceOnUse">
        <stop stop-color="rgba(0,0,0,1)"/>
        </linearGradient>
        </defs>
        </svg>  --}}

    {{--  <x-music /> --}}

    <main class="container-fluid main-music">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-12">
                    @foreach ($musics as $music)
                    @endforeach
                    <p class="text-music">{{ $music->artist }}</p>
                </div>
                {{-- <div class="col-md-5 p-music">
                        <p class="text-light">
                            I've loved music since childhood, inspiring friends to create it too. Growing up, I became a skilled beat maker, turning my passion into unique sounds. Creating beats isn't just a creative outlet for me; it's a way to connect with others who love the art of sound.
                        </p>
                    </div>  --}}
            </div>

            <div class="container-fluid cont-music">
                <div class="row">
                    <div class="col-md-12">
                        <section class="carousel">
                            <div class="row flex-column ">
                                @foreach ($musics as $music)
                                    <article class="col-3 div-img-tit">
                                        <div class="slides">
                                            <img class="slide" src="{{ $music->cover }}">
    
                                        </div>
                                        <div class="">
                                            <button class="play-pause-button" data-audio-id="{{ $music->id }}"
                                                data-progress-id="progress_{{ $music->id }}">
                                                <svg width="14" height="15" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M14 7.26795C15.3333 8.03775 15.3333 9.96225 14 10.7321L3.5 16.7942C2.16667 17.564 0.499999 16.6018 0.499999 15.0622L0.5 2.93782C0.5 1.39822 2.16667 0.43597 3.5 1.20577L14 7.26795Z" fill="#e4cdc0"/>
                                                    </svg>
                                            </button>
                                            <audio id="audio_{{ $music->id }}" class="w-75"
                                                src="{{ $music->file }}"></audio>
                                        </div>
                                        <div class="w-75 mx-5">
                                            <p class="title-song">{{ $music->title }}</p>
                                        </div>
                                       
                                        
{{--                                         <progress class="w-50 mx-5" id="progress_{{ $music->id }}" value="0" max="100"></progress>
 --}}                                        <div class="custom-progress-bar w-50 mx-5" id="progress_{{ $music->id }}">
                                            <div class="progress-bar-fill"></div>
                                        </div>
                                    </article>
                                @endforeach
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>

    </main>
</x-layout>
