import { gsap } from "gsap"; 
import { EaselPlugin } from "gsap/EaselPlugin";
import { TextPlugin } from "gsap/TextPlugin";


gsap.registerPlugin(EaselPlugin,TextPlugin);


const tl = gsap.timeline({
    
});

tl.from("h6 , .contact , .expertise , .work , .about , .expertise-2",  {opacity:-2, y:-50, duration:1, ease: "circ.out", });
tl.to("h6 , .contact , .expertise , .work , .about , .expertise-2 ", {opacity:1, ease: "circ.out",});
