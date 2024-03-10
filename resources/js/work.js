import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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
  y: -260,
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
        start: "top 660",
        end: "top 20",
        scrub: 2,
    },
  });

  imgProject2.from(".img-project-2",{
    opacity: 0,
  })
  
  imgProject2.to(".img-project-2", {
    x: 0,
    y: -580,
    duration: 2,
  })
    .to(".img-project-2", {
      opacity:0,
        duration: 6,
        duration: 2,
        scale: .7,
    })

/* let imgProject2 = gsap.timeline({
  scrollTrigger: {
      trigger: ".img-project-2",
      start: "top 360",
      end: "top 25",
      scrub: true,
  },
});

imgProject2.to(".img-project-2",{
  x: 0,
  y: 260,
  duration: 2,
})
  .to(".img-project-2",{
    y: -400,
    opacity:0,
      duration: 6,
      duration: 2,
      scale: .7,
  }) 
  */


