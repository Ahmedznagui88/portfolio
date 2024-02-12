
import { gsap } from "gsap"; 
import { EaselPlugin } from "gsap/EaselPlugin";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(EaselPlugin,TextPlugin);


const tml = gsap.timeline({
    
});


tml.from(".name-text", {opacity:-2, y:50, duration:1,  ease: "circ.out",});
tml.to(".name-text", {opacity:1,  ease: "circ.out",});
