<x-layout>
    <x-hello>
    </x-hello>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <h1 class="lets-talk">
                    l<span class="letters">e</span>t's t<span class="letters">a</span>lk!
                </h1>
            </div>

            <div class="col-12 div-mail">
                <svg class="svg-mail" width="535" height="285" viewBox="0 0 535 285" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M51 20C51 8.9543 59.9543 0 71 0L463.5 0C474.546 0 483.5 8.95431 483.5 20V265C483.5 276.046 474.546 285 463.5 285H71C59.9543 285 51 276.046 51 265L51 20Z" fill="white"/>
                    <path d="M51 20C51 8.9543 59.9543 0 71 0L463.5 0C474.546 0 483.5 8.95431 483.5 20V265C483.5 276.046 474.546 285 463.5 285H71C59.9543 285 51 276.046 51 265L51 20Z" fill="url(#paint0_linear_270_32)" fill-opacity="0.5"/>
                    <g filter="url(#filter0_d_270_32)">
                    <path d="M256.552 157.582C262.963 161.52 271.041 161.527 277.459 157.6L474.44 37.0593C491.663 26.5195 484.193 0 464 0L70.7738 0C50.5985 0 43.1148 26.4825 60.3061 37.0419L256.552 157.582Z" fill="white"/>
                    </g>
                    <defs>
                    <filter id="filter0_d_270_32" x="50.7383" y="0" width="433.297" height="164.541" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.912932 0 0 0 0 0.495742 0 0 0 0 0.495742 0 0 0 1 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_270_32"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_270_32" result="shape"/>
                    </filter>
                    <linearGradient id="paint0_linear_270_32" x1="299" y1="357" x2="292.5" y2="116" gradientUnits="userSpaceOnUse">
                    <stop offset="0.18" stop-color="#ffff"/>
                    <stop offset="1" stop-opacity="0"/>
                    </linearGradient>
                    </defs>
                    </svg>
                    
                <h3 class="mail">
                    ahmed.znagui@hotmail.com
                </h3>
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
                                <div class="col-md-6 mt-2">
                                    <label for="name" class="form-label">Full Name</label>
                                    <input type="text" name="name" class="form-control form-control-name"
                                        id="name" placeholder="Full Name">
                                </div>
                                <div class="col-md-6 mt-2">
                                    <label for="email" class="form-label">Email</label>
                                    <input type="email" name="email" class="form-control form-control-email"
                                        id="email" placeholder="Email address">
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12 mt-2">
                            <label for="user_Message" class="form-label">Text me</label>
                            <textarea name="user_message" class="form-control" id="User_Message" cols="30" rows="5"
                                placeholder="Your Message"></textarea>
                        </div>
                        <button type="submit" class="btn-form ">Send</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
    <x-footer>
    </x-footer>
</x-layout>
