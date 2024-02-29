import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
gsap.registerPlugin(ScrollTrigger);


const mediaQuery = window.matchMedia("(max-width: 1000px)");

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

// Prototyping
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

let back = gsap.timeline({
    scrollTrigger: {
        trigger: ".back",
        start: "top 530",
        end: "top 59",
        scrub: 2,
        opacity:0,
    },
});

back.to(".back", {
    ease: "none",
    x: 0,
    y: 0,
    duration: 10,
    scale: 4,
})
.to(".back", {
    duration: 6,
    ease: "none",
    y: -300,
    duration: 2,
})
.to(".back", {
    x: 0,
    opacity: 0,
    duration: 2,
});


if (mediaQuery.matches && !isMobile) {
    // Aggiungi qui le animazioni o le regole specifiche per dispositivi da 300px in su

    // Esempio: Nuova animazione solo per dispositivi da 300px in su
    let newAnimation = gsap.timeline({
        scrollTrigger: {
            trigger: ".new-element",
            start: "top 200px",
            end: "top 50px",
            scrub: 2,
        },
    });

    newAnimation.to(".new-element", {
        ease: "none",
        x: 0,
        y: 0,
        duration: 5,
        opacity: 1,
    });
}

// Altre animazioni e timeline (non influenzate dalla condizione)
let tmln = gsap.timeline({
    scrollTrigger: {
        trigger: ".img , .img-2",
        start: "top 300px",
        end: "top 10",
        smooth: 1,
        opacity: 0,
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
});

let tmloi = gsap.timeline({
  scrollTrigger: {
      trigger: ".img-3 , .img-4",
      start: "top 540px",
      end: "top 10",
      smooth: 1,
      opacity: 0,
      scrub: 2,
  },
});

tmloi.from(".img-3 , .img-4", {
  duration: 1,
  y: 20,
  opacity: 0,
});

tmloi.to(".img-3 , .img-4", {
  ease: "none",
  duration: 5,
  y: 0,
  opacity: 1,
  delay: 1,
  stagger:2,
});


