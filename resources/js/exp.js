import { gsap } from "gsap"; 
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
    scrollTrigger:{
        trigger: ".stack",
        start:"top 730",
        end: "top 10",
        scrub: 2,
        markers: true,
    },
});

tl.to(".stack",{
    ease: "none",
    x: 0,
    y: 0,
    duration: 10, 
    scale: 3,

  })
.to(".stack",{
    background: "linear-gradient(to right, #00ffff, #ff00ff)",
    borderRadius: "10px",
    duration: 3,
    markers: true,
    ease: "none",
})
.to(".stack" ,{
    x: 0,
    y: 0,
    duration: 3,
    scale: 1,
    opacity: 0,
});

