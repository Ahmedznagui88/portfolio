import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
/* gsap.registerPlugin(ScrollTrigger);

 let ademi = gsap.timeline({
    scrollTrigger: {
        trigger: ".text-ademi",
        start: "top 600",
        end: "center topm top",
        scrub: true,
    },
});

ademi.from('.text-ademi', {
    x: 0,
    y: 50,
    opacity:0
})

ademi.to('.text-ademi',{
    pin: true,
    opacity:1,
    duration:.9,
    ease: "power3.out",
  }); */

  //*img project 

  const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".img-project",
        start: "top 600",
        end: "top 20",
        ease: "circ.out",
        scrub: 1,
    }
  });

tl.from(".img-project", {
  opacity: 1,
  x:0,
  y: 0,
  duration: 1.6,
});

tl.to(".img-project", {
  opacity: 0,
  x:0,
  y: 0, 
  scale: .7,
});







let imgProject = gsap.timeline({
  scrollTrigger: {
      trigger: ".img-project-1",
      start: "top 660",
      end: "top 20",
      scrub: 2,
  },
});

imgProject.to(".img-project-1", {
  x: 0,
  y: 0,
  duration: 2,
})
  .to(".img-project-1", {
    opacity:0,
      duration: 6,
      duration: 2,
      scale: .7,
  })


let imgProject2 = gsap.timeline({
  scrollTrigger: {
      trigger: ".img-project-2",
      ease: "power4.out",
      start: "top 660",
      end: "top 25",
      scrub: 1,
  },
});

imgProject2.to(".img-project-2",{
  stagger: .1,
  ease: "power4.out",
  x: 0,
  y: 0,
  duration: 2,
})
  .to(".img-project-2",{
    ease: "power4.out",
    y: -10,
    opacity:0,
      duration: 6,
      duration: 2,
      scale: .7,
  })
 


