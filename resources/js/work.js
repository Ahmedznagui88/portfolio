import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
  //*img project 

gsap.registerPlugin(ScrollTrigger);
//? img 0

let imgProject = gsap.timeline ({
  scrollTrigger: {
      trigger: ".img-project, .img-project-1",
      start: "top 320",
      end: "top 100",
      scrub: true,
      duration: 20,
      ease: "back.out(1.7)",
      markers: true,
  },
});

imgProject.to(".img-project, .img-project-1", {
  x: 0,
  y: 0,
  duration: 20,
  ease: "back.out(1.7)",
  
})
.to(".img-project, .img-project-1", {
  y: 0,
  opacity: 0,
  ease: "back.out(1.7)",
});



    //? img 1

 let imgProjectOne = gsap.timeline ({
      scrollTrigger: {
          trigger: ".img-project-2",
          start: "top 520",
          end: "top 200",
          scrub: true,
          ease: "slow(0.7,0.7,false)",
      },
    });
    
    imgProjectOne.to(".img-project-2", {
      x: 0,
      y: -200,
      duration: 16,
      ease: "slow(0.7,0.7,false)",
    })
      .to(".img-project-2", {
        opacity:0,
        ease: "slow(0.7,0.7,false)",
      }) 

