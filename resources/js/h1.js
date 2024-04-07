import { gsap } from "gsap";
import { EaselPlugin } from "gsap/EaselPlugin";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(EaselPlugin, TextPlugin);

const tml = gsap.timeline({});

tml.from(
    ".name-text, .expertise-2, .about-title, .text-music, .div-svg-identity",
    {
        opacity: 0,
        y: 90,
        duration: 1,
        transformOrigin: "bottom left",
        stagger: 0.1,
        ease: "circ.out",
    }
);
tml.to(".name-text, .expertise-2, .div-svg-identity", {
    opacity: 1,
    stagger: 0.1,
    ease: "circ.out",
});

