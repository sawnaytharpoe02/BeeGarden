import './style.scss';
import * as bootstrap from 'bootstrap';
import gsap from 'gsap';
import { ScrollTrigger, CSSRulePlugin } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger, CSSRulePlugin);

// ScrollTrigger.create({
// 	markers: true,
// 	trigger: '.home_section',
// 	start: '60% 50%',
// 	end: 'bottom 30%',
// 	scrub: 4,
// 	onEnter: () => enter(),
// 	onLeaveBack: () => leaveBack(),
// });

gsap.to('.navbar', {
	// position: 'fixed',
	// top: 0,
	// backgroundColor: 'white',
	duration: 2,
	scrollTrigger: {
		toggleClass: 'slideDown',
		trigger: '.navbar',
		start: '700% center',
		end: `10000% top`,
		toggleActions: 'restart',
		//onEnter leave onEnterback onLeaveBack
		markers: {
			startColor: 'black',
			endColor: 'black',
			fontSize: '1rem',
		},
	},
});
var rule = CSSRulePlugin.getRule('.left-content h1 span:after');
gsap.from('.slDown', { y: -60, stagger: 0.5, duration: 1, opacity: 0 });
gsap.from('.right-content .img', { opacity: 0, y: 60, stagger: '.05', delay: 2 });
gsap.to(rule, { cssRule: { scaleY: 0 }, duration: 2 });

new Glider(document.querySelector('.glider'), {
	slidesToShow: 5,
	// dots: ".dots",
	duration: 2.5,
	draggable: true,
	dragVelocity: 1.5,
	arrows: {
		prev: '.glider-prev',
		next: '.glider-next',
	},
});
