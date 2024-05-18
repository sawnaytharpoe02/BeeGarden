import "./style.css";
import Glider from "glider-js";
import gsap from "gsap";
import { ScrollTrigger, CSSRulePlugin } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, CSSRulePlugin);

gsap.to(".navbar", {
  duration: 2,
  scrollTrigger: {
    toggleClass: "slideDown",
    trigger: ".navbar",
    start: "700% center",
    end: `10000% top`,
    toggleActions: "restart",
  },
});
var rule = CSSRulePlugin.getRule(".left-content h1 span:after");
gsap.from(".slDown", { y: -60, stagger: 0.5, duration: 1, opacity: 0 });
gsap.from(".right-content .img", {
  opacity: 0,
  y: 60,
  stagger: ".05",
  delay: 2,
});
gsap.to(rule, { cssRule: { scaleY: 0 }, duration: 2 });

new Glider(document.querySelector(".glider"), {
  slidesToShow: 5,
  duration: 2.5,
  draggable: true,
  dragVelocity: 1.5,
  arrows: {
    prev: ".glider-prev",
    next: ".glider-next",
  },
});

var elem = document.querySelector(".grid");
var iso = new Isotope(elem, {
  itemSelector: ".grid-item",
  layoutMode: "fitRows",
});

var filtersElem = document.querySelector(".filters-button-group");
filtersElem.addEventListener("click", function (event) {
  if (!matchesSelector(event.target, "button")) {
    return;
  }
  var filterValue = event.target.getAttribute("data-name");
  iso.arrange({ filter: filterValue });
});

let scrollProgress = () => {
  let scrollProgress = document.getElementById("scrollMe");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);

  scrollProgress.style.background = `conic-gradient(#f86f03 ${scrollValue}%, #c0c0ff ${scrollValue}%)`;
};

window.onscroll = scrollProgress;
window.onload = scrollProgress;
