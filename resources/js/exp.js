


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
    let back = gsap.timeline({
        scrollTrigger: {
            trigger: ".back",
            start: "top 530",
            end: "top 59",
            scrub: 2,
            opacity:0,
        },
    });

    //*backend
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
    //!end prototyping


let tline = gsap.timeline({
    scrollTrigger: {
        trigger: ".text-figma",
        pin: true,
        start: "center center",
        end: "+=590",
        scrub: 2,
        ease: "power3.out",
        
    },
});

tline
    .to(".text-figma", {
        ease: "none",
        x: 0,
        y: 0,
        pin: true,
        scale: 1.7,
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
        end: "+=290",
        scrub: 2,
        smooth: 1,
        delay:19,
        ease: "power3.out",
        },
    });

    
    front.to(".text-front-2", {
            x: 0,
            y: 0,
            scale: 1.9,
        })
        .to(".text-front-2", {
            duration: 10,
            opacity: 0,
            color: "#ed9f29",
           
        });

        //*backend
        let backend = gsap.timeline({
            scrollTrigger: {
                trigger: ".text-backend-2",
                start: "top 520",
                end: "top 340",
                scrub: 2,
                ease: "power3.out",
            },
        });
        
        backend
            .to(".text-backend-2", {
                ease: "none",
                x: 0,
              y: -200,
                scale: 1.8,
            })
            
//!end figma
















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
    

}) 

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
})

tmloi.to(".img-3 , .img-4", {
  ease: "none",
  duration: 5,
  y: 0,
  opacity: 1,
  delay: 1,
  stagger:2,
  

}) 




