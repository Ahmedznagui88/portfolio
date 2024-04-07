import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);

const myText = new SplitType('#my-text');

gsap.from('.word',{
  opacity: 0,
  durata: 1,
  
} )

gsap.to('.word',{
  y: 0,
  stagger: {
    grid: [8,50],
    from: "top",
    axis: "null",
    amount: .3,
    
  },
  duration:.9,
  ease: "circ.out",
  force3D: true
});