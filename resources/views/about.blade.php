<x-layout>

    <header class="container-fluid ">
        <div class="row row-me">
            <div class="col-12 about-me">
                <h2 class="about">about me</h2>
            </div>
        </div>
    </header>


    <article class="container article-about">
        <div class="row row-about">
            <div class="col-md-5 div-about">
                <p class="text-about">As a creative junior front-end developer based in Italy, I am deeply passionate
                    about music and art. Exploring the fascinating world of coding has opened my eyes to the endless
                    possibilities it offers.</p>
            </div>
            <div class="col-md-6 contain-img">
              <a href="/"><button class="bn30">home</button></a>
              <a href="{{ route('expertise') }}"><button class="bn31">expertise</button></a>
              <a href="/"><button class="bn32">work</button></a>
              <a href="{{ route("contact") }}"><button class="bn33">contact</button></a>
            </div>
    
        </div>
    </article>


</x-layout>
