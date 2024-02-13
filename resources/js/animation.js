import { gsap } from "gsap"; 
import { EaselPlugin } from "gsap/EaselPlugin";
import { TextPlugin } from "gsap/TextPlugin";


gsap.registerPlugin(EaselPlugin,TextPlugin);


const tl = gsap.timeline({});

tl.from("h6 , .contact , .expertise , .work , .about , .expertise-2", {
    opacity: 0, // Change from -8 to 0
    y: -90,
    transformOrigin: "bottom left",
    stagger: 0.1,
    ease: "power2.inOut",
  transformStyle: "preserve-3d", 
    ease: "circ.out",
});

tl.to("h6 , .contact , .expertise , .work , .about , .expertise-2", {
    opacity: 1,
    stagger: 12,
    duration: 2,
    ease: "circ.out",
    transformOrigin: "bottom left",
    ease: "circ.out",
    ease: "power2.inOut",
  transformStyle: "preserve-3d", 
});
