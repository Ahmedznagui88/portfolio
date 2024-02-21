import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

 let ademi = gsap.timeline({
    scrollTrigger: {
        trigger: ".text-ademi",
        start: "top 600",
        end: "bottom top",
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

  //*img project

  const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".img-project",
        markers : true,
        start: "top 600",
        end: "top 30",
        scrub: true,
    }
  });

tl.from(".img-project", {
  opacity: 0,
  x:0,
  y: 300,
  stagger: 0.1,
  transformStyle: "preserve-3d",
  ease: "power3.inout",
  duration: 1.6,
});

tl.to(".img-project", {
  opacity: 1,
  x:0,
  y: -100, 
  scale: .2,
  stagger: 0.1, 
  transformStyle: "preserve-3d",
  ease: " elastic.out(1, .8)",
});

tl.to(".img-project", {
    opacity: 0,
})