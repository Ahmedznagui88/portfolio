import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

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
    })
    .to(".text-figma", {
        duration: 10,
        opacity: 0,
        color: "#ed9f29",
        delay: 10,
    });
//!end figma



/* 
let tmln = gsap.timeline({
    scrollTrigger: {
        trigger: ".img",
        start: "top 550px",
        end: "top 10",
        smooth: 1,
        opacity: 0,
        markers: true,
        scrub: 2,
    },
});


tmln.from(".img", {
    duration: 1,
    y: -10,
    opacity: 0,
  })

  tmln.to(".img", {
    ease: "none",
    duration: 5,
    y: 0,
    opacity: 1,
    delay: 1,
    stagger:2,
    pin: true,
    x: 500,
    y: 500,
}) */



//!img
// Utilizzo della libreria GSAP
const one = gsap.timeline({
    scrollTrigger: {
      trigger: ".img", // l'elemento su cui si basa il trigger
/*       start: "top 50%", // avvia l'animazione quando il 50% dell'elemento è visibile */
      end: "+=1400", // l'animazione durerà per 600px di scroll
      scrub: 2, // 'scrub' rende l'animazione più fluida durante lo scroll
      pin: true, // fissa l'elemento durante l'animazione
      markers: true, // mostra i marker di scroll
    },
  });
  
  // Prima animazione
  one.from(".img", {
    duration: 1,
    stragger: 2,
    pin: true
  });
  
  // Seconda animazione
  one.to(".img", {
    duration: 2,
    ease: "power4.out",
    stragger: 2,
    pin: true
  });
  
  // Terza animazione
  one.to(".img", {
    duration: 1,
    delay: 1,
    
  });

  //!img-2
// Utilizzo della libreria GSAP



const tlone = gsap.timeline({
    scrollTrigger: {
      trigger: ".img-2", // l'elemento su cui si basa il trigger
/*       start: "top 50%", // avvia l'animazione quando il 50% dell'elemento è visibile */
      end: "+=1400", // l'animazione durerà per 600px di scroll
      scrub: 2, // 'scrub' rende l'animazione più fluida durante lo scroll
      pin: true, // fissa l'elemento durante l'animazione
      markers: true, // mostra i marker di scroll
    },
  });
  
  // Prima animazione
  tlone.from(".img-2", {
    duration: 1,
    stragger: 2,
    pin: true
  });
  
  // Seconda animazitlone
  tlone.to(".img-2", {
    duration: 2,
    ease: "power4.out",
    stragger: 2,
    pin: true
  });
  
  // Terza animazitlone
  tlone.to(".img-2", {
    duration: 1,
    delay: 1,
    opacity: 0,

  });

  //!img-3

  const imgTre = gsap.timeline({
    scrollTrigger: {
      trigger: ".img-3", // l'elemento su cui si basa il trigger
/*       start: "top 50%", // avvia l'animaziimgTre quando il 50% dell'elemento è visibile */
      end: "+=860", // l'animaziimgTre durerà per 600px di scroll
      scrub: 2, // 'scrub' rende l'animaziimgTre più fluida durante lo scroll
      pin: true, // fissa l'elemento durante l'animaziimgTre
      markers: true, // mostra i marker di scroll
    },
  });
  
  // Prima animaziimgTre
  imgTre.from(".img-3", {
    duration: 1,
    stragger: 2,
    pin: true
  });
  
  // Seconda animaziimgTre
  imgTre.to(".img-3", {
    duration: 2,
    ease: "power4.out",
    stragger: 2,
    pin: true
  });
  
  // Terza animaziimgTre
  imgTre.to(".img-3", {
    duration: 1,
    delay: 1,
    opacity: 0,
    
  });

  //!img-4

  const tili = gsap.timeline({
    scrollTrigger: {
      trigger: ".img-4", // l'elemento su cui si basa il trigger
/*       start: "top 50%", // avvia l'animazitili quando il 50% dell'elemento è visibile */
      end: "+=460", // l'animazitili durerà per 600px di scroll
      scrub: 2, // 'scrub' rende l'animazitili più fluida durante lo scroll
      pin: true, // fissa l'elemento durante l'animazitili
      markers: true, // mostra i marker di scroll
    },
  });
  
  // Prima animazitili
  tili.from(".img-4", {
    duration: 1,
    stragger: 2,
    pin: true
  });
  
  // Seconda animazitili
  tili.to(".img-4", {
    duration: 2,
    ease: "power4.out",
    stragger: 2,
    pin: true,

  });
  
  // Terza animazitili
  tili.to(".img-4", {
    duration: 1,
    delay: 1,

    
  });
