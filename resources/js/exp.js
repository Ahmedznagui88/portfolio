


import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";



gsap.registerPlugin(ScrollTrigger);

//*prototyping
let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".stack",
        start: "top 760",
        end: "top 9",
        scrub: 2,
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
        duration: 2,
    })
    .to(".stack", {
        x: 0,
        y: 0,
        opacity: 0,
        duration: 2,
    });


    let stacks = gsap.timeline({
        scrollTrigger: {
            trigger: ".stacks",
            start: "top 760",
            end: "top 9",
            scrub: 2,
        },
    });
    
    stacks.to(".stacks", {
        ease: "none",
        x: 0,
        y: 0,
    
        duration: 10,
        scale: 4,
    })
        .to(".stacks", {
            duration: 6,
            ease: "none",
            duration: 2,
        })
        .to(".stacks", {
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
    })
    .to(".text-figma", {
        duration: 10,
        opacity: 0,
        color: "#ed9f29",
        delay: 10,
    });


    let front = gsap.timeline({
        scrollTrigger: {
            trigger: ".text-front-2",
            pin: true,
            start: "center center",
            end: "+=590",
            scrub: 2,
            smooth: 1,
        },
    });
    
    front
        .to(".text-front-2", {
            ease: "none",
            x: 0,
            y: 0,
            duration: 3.6,
            scale: 1.7,
            pin: true,
        })
        .to(".text-front-2", {
            duration: 10,
            opacity: 0,
            color: "#ed9f29",
            delay: 10,
        });
//!end figma




let tmln = gsap.timeline({
    scrollTrigger: {
        trigger: ".img , .img-2",
        start: "top 300px",
        end: "top 10",
        smooth: 1,
        opacity: 0,
        markers: true,
        scrub: 2,
    },
});


tmln.from(".img , .img-2", {
    duration: 1,
    y: 20,
    opacity: 0,
  })

  tmln.to(".img , .img-2", {
    ease: "none",
    duration: 5,
    y: 0,
    opacity: 1,
    delay: 1,
    stagger:2,
    

}) 

let tmloi = gsap.timeline({
  scrollTrigger: {
      trigger: ".img-3 , .img-4",
      start: "top 540px",
      end: "top 10",
      smooth: 1,
      opacity: 0,
      markers: true,
      scrub: 2,
  },
});


tmloi.from(".img-3 , .img-4", {
  duration: 1,
  y: 20,
  opacity: 0,
})

tmloi.to(".img-3 , .img-4", {
  ease: "none",
  duration: 5,
  y: 0,
  opacity: 1,
  delay: 1,
  stagger:2,
  

}) 




