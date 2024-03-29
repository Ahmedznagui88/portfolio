document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        let message = document.getElementById('message');

        if (message) {
            message.style.transform = "translateY(-60px)";
            message.style.opacity = "0";
            message.style.transition = "3s";
        }

        let form = document.getElementById('form');

        if (form) {
            form.style.transition = "2.8s";
            form.style.transform = "translateY(0)";
        }
    }, 4000);
});
