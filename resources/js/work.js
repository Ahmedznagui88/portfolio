import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
  //*img project 


//? img 0

let imgProject = gsap.timeline ({
  scrollTrigger: {
      trigger: ".img-project, .img-project-1",
      start: "top 320",
      end: "top 100",
      scrub: true,
      duration: 20,
      ease: "back.out(1.7)"
  },
});

imgProject.to(".img-project, .img-project-1", {
  x: 0,
  y: 0,
  duration: 20,
  ease: "back.out(1.7)", // Aggiunta dell'uscita smooth
})
.to(".img-project, .img-project-1", {
  y: 0,
  opacity: 0,
  duration: 20,
  ease: "back.out(1.7)", // Aggiunta dell'uscita smooth
});



    //? img 1

 let imgProjectOne = gsap.timeline ({
      scrollTrigger: {
          trigger: ".img-project-2",
          start: "top 520",
          end: "top 200",
          scrub: true,

      },
    });
    
    imgProjectOne.to(".img-project-2", {
      x: 0,
      y: -200,
      duration: 16,
    })
      .to(".img-project-2", {
        duration: 16,

        opacity:0,
         
          
          
      }) 

