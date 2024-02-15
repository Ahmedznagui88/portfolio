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
        scale: 1,
        ease: "none",
        duration: 2,
    })
    .to(".stack", {
        x: 0,
        y: 0,
        opacity: 0,
        duration: 2,
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
        duration: 10,
        opacity: 0,
        color: "#ed9f29",
        delay: 10,
    });
//!end figma

let tmln = gsap.timeline({
    scrollTrigger: {

        trigger: ".img",
        start: "top 350px",
        end: "top 10",
        smooth: 1,
        opacity: 0,
        markers: true,
        scrub: 2,
    },
});

tmln
tmln.from(".img", {
    duration: 1,
    y: -10,
    opacity: 0,
    
  })

  tmln.to(".img", {
    ease: "none",
    duration: 1,
    y: 0,
    opacity: 1,
    delay: 1,
    pin: true,
    
    
  })

  tmln.to(".img-1", {
    duration: 1,
    y: 0,
    opacity: 0,
    delay: 1,
    
    
  })