<x-layout>

    <x-hello>
    </x-hello> 

    <div class="container">
        <div class="row">
            <div class="col-12">
                <h1 class="lets-talk">
                    l<span class="letters">e</span>t's t<span class="letters">a</span>lk!
                </h1>
            </div>
        </div>
    </div>

    <section class="cont-form">
        <div class="container container-form">
            <div id="form" class="row row-form">
                <div class="col-md-12 div-form">
                    <form action="{{ route('send.contact') }}" method="POST" class="w-100">
                        @csrf
                        <div class="container">
                            <div class="row ">
                                <div class="col-md-6">
                                    <label for="name" class="form-label">Full Name</label>
                                    <input type="text" name="name" class="form-control form-control-name" id="name"
                                        placeholder="Full Name">
                                </div>
                                <div class="col-md-6">
                                    <label for="email" class="form-label">Email</label>
                                    <input type="email" name="email" class="form-control form-control-email" id="email"
                                        placeholder="Email address">
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12 mt-4">
                            <label for="user_Message" class="form-label">Text me</label>
                            <textarea name="user_message" class="form-control" id="User_Message" cols="30" rows="5"
                                placeholder="Your Message"></textarea>
                        </div>
                        <button type="submit" class="btn-form mt-4">Send</button>
                    </form>
                </div>
            </div>
        </div>
        <x-footer>
    
        </x-footer>
    </section>
</x-layout>
