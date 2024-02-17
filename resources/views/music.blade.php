<x-layout>
    <main class="container-fluid main-music">
        
            <div class="row justify-content-center">
                <div class="col-md-12">
                    <p class="text-music">Brown Complexion</p>
                </div>
            </div>

            <div class="container-fluid cont-music">
                <div class="row">
                    <div class="col-md-12">
                        <section>
                            <div class="row flex-column ">
                                @foreach ($musics as $music)
                                    <article class="col-3 div-img-tit">
                                        <div class="slides">
                                            <img class="slide" src="{{ $music->cover }}">
                                        </div>
                                        <div>
                                            <button id="play" class="play-pause-button" data-audio-id="{{ $music->id }}"
                                                data-progress-id="progress_{{ $music->id }}">
                                                <svg width="14" height="15" viewBox="0 0 15 18" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M14 7.26795C15.3333 8.03775 15.3333 9.96225 14 10.7321L3.5 16.7942C2.16667 17.564 0.499999 16.6018 0.499999 15.0622L0.5 2.93782C0.5 1.39822 2.16667 0.43597 3.5 1.20577L14 7.26795Z"
                                                        fill="#e4cdc0" />
                                                </svg>
                                            </button>
                                            <audio id="audio_{{ $music->id }}" class="w-75"
                                                src="{{ $music->file }}"></audio>

                                        </div>
                                        <div class="w-75 mx-5">
                                            <p class="title-song">{{ $music->title }}</p>
                                        </div>
                                        <div class="custom-progress-bar w-50 mx-5" id="progress_{{ $music->id }}">
                                            <div class="progress-bar-fill"></div>
                                        </div>
                                    </article>
                                @endforeach
                            </div>
                        </section>
                    </div>
                </div>
            </div>

    </main>


    <x-footer />   
   
</x-layout>

