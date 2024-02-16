import { gsap } from "gsap"; 
import { EaselPlugin } from "gsap/EaselPlugin";
import { TextPlugin } from "gsap/TextPlugin";


gsap.registerPlugin(EaselPlugin,TextPlugin);


const tl = gsap.timeline({});

// Animazione iniziale con opacità 0 e spostamento verso l'alto
tl.from("h6 , .contact , .expertise , .work , .about ", {
  opacity: 0,
  y: -90,
  transformOrigin: "bottom left",
  stagger: 0.1,
  transformStyle: "preserve-3d", 
  ease: "power3.out",
  duration: 1.6,
});

// Animazione finale con opacità 1 e altri parametri
tl.to("h6 , .contact , .expertise , .work , .about", {
  opacity: 1,
  y: 0, // Spostamento verso la posizione originale (se necessario)
  stagger: 0.1, // Puoi mantenere lo stesso intervallo di stagger
  transformOrigin: "bottom left",
  transformStyle: "preserve-3d", 
  ease:  "power3.inOut",
});


