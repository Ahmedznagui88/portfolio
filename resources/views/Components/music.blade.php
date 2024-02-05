<main class="container-fluid main-music">

    <div class="container">
        <div class="row justify-content-center">

            
                <div class="col-md-12">
                    <h1 class="text-music">Music</h1>
                </div>

                {{-- <div class="col-md-5 p-music">
                    <p class="">
                        I've loved music since childhood, inspiring friends to create it too. Growing up, I became a skilled beat maker, turning my passion into unique sounds. Creating beats isn't just a creative outlet for me; it's a way to connect with others who love the art of sound.
                    </p>
                </div> --}}
        </div>

        <div class="container-fluid cont-music">
            <div class="row">
                <div class="col-md-12">

                    
                    <section class="carousel">

                        @foreach ($musics as $music)
                            
                        <div class="slides">

                          <img class="slide" id="slide-1" src="">
                        </div>
                        @endforeach
                      </section>

                      <div class="media-player">
                        <div class="progress-bar">
                            <div class="played"></div>
                        </div>
                        <div class="controls">
                            <button class="shuffle">Shuffle</button>
                            <button class="previous">Previous</button>
                            <button class="play-pause">Play/Pause</button>
                            <button class="next">Next</button>
                            <button class="repeat">Repeat</button>
                        </div>
                    </div>
                      
                </div>
            </div>
        </div>






    </div>


    

</main>