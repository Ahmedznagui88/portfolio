import { gsap } from "gsap"; 
import { EaselPlugin } from "gsap/EaselPlugin";
import { TextPlugin } from "gsap/TextPlugin";


gsap.registerPlugin(EaselPlugin,TextPlugin);


const tl = gsap.timeline({
    
});

tl.from("h6 , .contact , .expertise , .work , .about , .expertise-2",  {opacity:-8, y:-90, duration:1});
