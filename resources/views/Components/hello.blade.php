

<div class="container-fluid container-hello border">
    <div class="div-alert-message w-100 d-flex justify-content-center">
        @if (session('emailSent'))
            <div id="message" class="alert alert-secondary div-alert-s">
                {{ session('emailSent') }}
            </div>
        @elseif (session('emailError'))
            <div id="message" class="fst-italic div-alert">
                {{ session('emailError') }}
            </div>
        @endif
    </div>
    <div class="row">
        <div class="col-12">
            <h1 class="hello">
                S<span class="letters">A</span>Y HELL<span class="letters">O</span>!
            </h1>
        </div>
        
        <div class="container container-links">
            <div class="row">

                <div class="col-md-6 link-social">
                    <a class="link-git" href="https://github.com/Ahmedznagui88" target="_blank">
                         <img class="git-hub" src="/img/github-mark.png" alt="">
                        <p class="links-page">
                            GitHub
                        </p>
                    </a>
                    <a class="link-linkedin" href="https://www.linkedin.com/in/ahmed-znagui/" target="_blank">
                         <img class="linkedin " src="/img/icons8-linkedin-100.png" alt="">
                        <p class="links-page">
                            LinkedIn
                        </p>
                    </a>
                    <a class="resume" href="/media/Ahmed Znagui.pdf" download="Ahmed Znagui.pdf">
                         <img class="linkedin" src="/img/curriculum-vitae-100.png" alt="">
                        <p class="links-page">
                            Resume
                        </p>
                    </a>
                </div>
 
                <div class="col-md-6 div-discover">
                    <p class="discover">
                        I enjoy meeting new people, learning about fresh opportunities, and understanding various types of businesses. Feel free to reach out—I'd love to connect!
                    </p>
                </div>
            </div>
        </div>


    </div>
</div>
