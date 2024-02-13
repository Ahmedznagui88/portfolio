setTimeout(function() {

    let message = document.getElementById('message');
    
    message.style.transform = "translateY(100px)";
    message.style.opacity = "-40";
    message.style.transition = "3s";

    let form = document.getElementById('form');
    form.style.transition = "2.8s";
    form.style.transform = "translateY(-50px)";


}, 4000);
