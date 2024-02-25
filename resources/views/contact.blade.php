<x-layout>
  <div id="swup" class="transition-fade">
    <section class="cont-form">
        {{-- <h2 class="contact text-align-center">Contact</h2> --}}
      

        <div class="container mt-5">
            @if (session('emailSent'))
                <div id="message" class="alert alert-secondary div-alert-s">
                    {{ session('emailSent') }}
                </div>
            @elseif (session('emailError'))
                <div id="message" class="fst-italic div-alert">
                    {{ session('emailError') }}
                </div>
            @endif

            <div id="form" class="row row-form">
                <div class="col-6 col-md-12 div-form">
                    <form action="{{ route('send.contact') }}" method="POST" class="">
                        @csrf
                        <div class="container">

                            <div class="row">
                                <div class="col-6 ">
                                    <label for="name" class="form-label"> Name</label>
                                    <input type="text" name="name" class="form-control " id="name"
                                        placeholder="Name">
                                </div>
                                <div class="col-6 ">
                                    <label for="email" class="form-label ">Email</label>
                                    <input type="email" name="email" class="form-control" id="email"
                                        placeholder="Email address">
                                </div>
                            </div>
                        </div>

                        <div class="mt-4">
                            <label for="user_Message" class="form-label ">Text me</label>
                            <textarea name="user_message" class="form-control" id="User_Message" cols="20" rows="4"
                                placeholder="Your Message"></textarea>
                        </div>

                        <button type="submit" class="btn-form shadow mt-4">Send</button>
                    </form>
                </div>


                <div class="link-social ">
                    <a class="link-git" href="https://github.com/Ahmedznagui88" target="_blank">
                        <img class="git-hub" src="/img/github-mark.png" alt="">
                        <p class="links-pages">
                            GitHub
                        </p>
                    </a>

                    <a class="link-linkedin" href="https://www.linkedin.com/in/ahmed-znagui/" target="_blank">
                        <img class="linkedin " src="/img/icons8-linkedin-100.png" alt="">
                        <p class="links-pages">
                            LinkedIn
                        </p>
                    </a>
                    <a class="link-linkedin" href="/media/Ahmed Znagui.pdf" download="Ahmed Znagui.pdf">
                        <img class="linkedin" src="/img/curriculum-vitae-100.png" alt="">
                        <p class="links-pages">
                            Resume
                        </p>
                    </a>
                </div>

                
            </div>

           


            <x-footer />
        </div>
    </section>

  </div>
</x-layout>
