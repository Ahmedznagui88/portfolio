import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);
const myText = new SplitType('#my-text');
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
});