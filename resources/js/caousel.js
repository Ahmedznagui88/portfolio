/* document.addEventListener('DOMContentLoaded', function carousel() {
    let indice = 0;
    setInterval(() => {
  
        document.getElementById("carousel").style.transition = "1s opacity";
        document.getElementById("carousel").style.opacity = "1";
  
        setTimeout(() => {
  
            if (indice == 1) {
                document.getElementById("carousel").src = "./img/proj/Ademi Time.png";
            } else if (indice == 2) {
                document.getElementById("carousel").src = "/img/proj/prototipo 2.png";
            } else if (indice == 3) {
                document.getElementById("carousel").src = "/img/proj/prototype 1.png"; 
  
                indice = 0;
            }
  
  
            document.getElementById("carousel").style.transition = "1s opacity";
            document.getElementById("carousel").style.opacity = "1";

        }, 1000);
  
        indice++;
  
    }, 990);
   
  
  });
  window.addEventListener("load", function () {
  carousel();
  }); */