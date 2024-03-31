import { gsap } from "gsap"; 
import { EaselPlugin } from "gsap/EaselPlugin";
import { TextPlugin } from "gsap/TextPlugin";


gsap.registerPlugin(EaselPlugin,TextPlugin);


const tl = gsap.timeline({});

tl.from(".contact , .expertise , .work , .about ", {
  opacity: 0,
  y: -90,
  transformOrigin: "bottom left",
  stagger: 0.1,
  transformStyle: "preserve-3d", 
  ease: "power3.out",
  duration: 1.6,
});


tl.to(" .contact , .expertise , .work , .about", {
  opacity: 1,
  y: 0, 
  stagger: 0.1, 
  transformOrigin: "bottom left",
  transformStyle: "preserve-3d", 
  ease:  "power3.inOut",
});


