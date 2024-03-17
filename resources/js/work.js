import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
  //*img project 




  let imgProject = gsap.timeline ({
    scrollTrigger: {
        trigger: ".img-project",
        start: "top 320",
        end: "top 200",
        scrub: true,
        markers: true,
    },
  });
  
  imgProject.to(".img-project", {
    x: 0,
    y: -20,
    duration: 2,
  })
    .to(".img-project", {
      y: 0,
      opacity:0,
        duration: 6,
        duration: 2,
        scale: .7,
    }) 
