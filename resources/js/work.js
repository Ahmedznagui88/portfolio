import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

 let ademi = gsap.timeline({
    scrollTrigger: {
        trigger: ".text-ademi",
        start: "top 600",
        end: "bottom top",
        markers: true,
        scrub: true,
    },
});


ademi.from('.text-ademi', {
    x: 0,
    y: 250,
    opacity:0
})

ademi.to('.text-ademi',{
    pin: true,
    opacity:1,
    duration:.9,
    ease: "power3.out",
  });
