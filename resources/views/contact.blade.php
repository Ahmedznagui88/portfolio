<x-layout>
  
  <div id="cardCont" class="container-3 ">        
    <div  class="row d-flex justify-content-start">           
      <div class="div-cont col-sm-5 border-none d-flex justify-content-start  align-items-start ">
        <h2 class="text-cont my-2 mx-5">Contatto</h2>
      </div>
    </div>
  </div>
  
  @if (session('emailSent'))
  <div class="alert alert-secondary div-alert rounded-0 text-center text-success">
    {{ session('emailSent') }}
  </div> 
  @elseif (session('emailError'))
  
  <div class="fst-italic alert alert-secondary div-alert rounded-0 text-center text-danger">
    {{ session('emailError') }}
  </div> 
  @endif  
  <div class="container cont-form">
    <div class="row">
      <div class="col-6 col-md-4 div-form">
        <form action="{{ route('send.contact') }}" method="POST" class="">
          @csrf {{-- csrf direttiva blade --}}
          <div class="container">
            <div class="row">
              <div class="col-6 ">
                <label for="name" class="form-label "></label>
                <input type="text " name="name " class="form-control bg-transparent" id="name" placeholder="Name">
              </div>
              <div class="col-6 ">
                <label for="email" class="form-label"></label>
                <input type="email" name="email" class=" form-control bg-transparent" id="email" placeholder="Email address">
              </div>
            </div>
          </div>
          
          <div class="mb-3">
            <label for="user_Message" class="form-label "></label>
            <textarea name="user_message" class="form-control bg-transparent text-dark" id="User_Message" cols="30" rows="4" placeholder="Your Message"></textarea>
            
          </div>

          <button type="submit" class="btn btn-secondary rounded-2 ">Send</button>
        </form>
      </div>
    </div>
  </div>
</x-layout>