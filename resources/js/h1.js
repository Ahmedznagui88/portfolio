
import { gsap } from "gsap"; 
import { EaselPlugin } from "gsap/EaselPlugin";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(EaselPlugin,TextPlugin);


const tml = gsap.timeline({
    
});


tml.from(".name-text, .expertise-2, .about-title, .text-music", {opacity:-2, y:50, duration:1, transformOrigin: "bottom left", stagger: 0.1 , ease: "circ.out",});
tml.to(".name-text, .expertise-2", {opacity:1, stagger: 0.1 , ease: "circ.out",});
