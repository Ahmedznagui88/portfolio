import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

//*prototyping
let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".stack",
        start: "top 730",
        end: "top 10",
        scrub: 2,
        /* markers: true, */
    },
});

tl.to(".stack", {
    ease: "none",
    x: 0,
    y: 0,
    duration: 10,
    scale: 4,
})
    .to(".stack", {
        duration: 6,
        
        ease: "none",
    })
    .to(".stack", {
        x: 0,
        y: 0,
        duration: 3,
        opacity: 0,
    });
//!end prototyping

//*figma
let tline = gsap.timeline({
    scrollTrigger: {
        trigger: ".text-figma",
        pin: true,
        start: "center center",
        end: "+=590",
        scrub: 2,
        smooth: 1,
    },
});

tline
    .to(".text-figma", {
        ease: "none",
        x: 0,
        y: 0,
        duration: 3.6,
        scale: 1.7,
        pin: true,
        smooth: 1,
    })
    .to(".text-figma", {
        x: 0,
        y: -600,
        duration: 3,
        opacity: 0,
        color: "#ed9f29",
        
    });
//!end figma


//*change color

gsap.registerPlugin(ScrollTrigger);

const tlo = gsap.timeline({
  scrollTrigger: {
    trigger: ".exp-page",
    start: "top 10%",
    markers: true,
 
    onEnter: () => {
        
      tlo.play(
        
      );
    },
    onLeaveBack: () => {
      tl.reverse();
    }
  }
});

tlo.to(".exp-page", {
  backgroundColor: "#fff",
  color:"#000",
  duration: 1,
  ease: "power2.inOut"
});