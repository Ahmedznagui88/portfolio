import { gsap } from "gsap"; 
import { EaselPlugin } from "gsap/EaselPlugin";
import { TextPlugin } from "gsap/TextPlugin";


gsap.registerPlugin(EaselPlugin,TextPlugin);


const tl = gsap.timeline({
    
});

tl.from(".expertise, h6", {opacity:0, y:50, duration:2,  ease: "circ.out",});
tl.to(".expertise, h6", {opacity:1, ease: "circ.out",});
