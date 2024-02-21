import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);


let ademi = gsap.timeline({
    scrollTrigger: {
        trigger: ".text-ademi",
        start: "top 600",
        end: "bottom top",
        markers: true,
        
    },
});


ademi.from('.text-ademi', {
    x: 0,
    y: 250,
    opacity:0
})

ademi.to('.text-ademi',{
    y: -40,
    pin: true,
    opacity:1,
    duration:.9,
    ease: "power3.out",
  });
