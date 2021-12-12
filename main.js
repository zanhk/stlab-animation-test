const {
	gsap: { timeline, set, registerPlugin },
	ScrollTrigger
} = window;

registerPlugin(ScrollTrigger);

ScrollTrigger.addEventListener("refresh", () => {
	document.documentElement.scrollTop = 0;
});

const getPos = (el, pos) => {
	const BOUND = el.getBoundingClientRect();
	return BOUND.top + BOUND.height * pos;
};

const INTRO_EL = document.querySelector(".section-design");

const INTRO = () =>
	timeline({
		scrollTrigger: {
			trigger: ".section-design",
			pin: ".section-design .content",
			start: "top top",
			end: "bottom bottom"
		}
	})
		.set(".section-design .content .text", { y: "+=100%", opacity: 0 })
		.to(".section-design .content .text", {
			y: 0,
			opacity: 1,
			stagger: 0.1,
			scrollTrigger: {
				scrub: 0.5,
				trigger: ".section-design",
				start: () => getPos(INTRO_EL, 0.1),
				end: () => getPos(INTRO_EL, 0.2)
			}
		})
		.fromTo(
			".section-design .content .text",
			{
				y: 0,
				opacity: 1
			},
			{
				y: "-=100%",
				opacity: 0,
				stagger: 0.1,
				scrollTrigger: {
					scrub: 0.5,
					trigger: ".section-design",
					start: () => getPos(INTRO_EL, 0.3),
					end: () => getPos(INTRO_EL, 0.4)
				}
			}
		);

const REALIZE_EL = document.querySelector(".section-realize");

const REALIZE = () =>
		timeline({
			scrollTrigger: {
				trigger: ".section-realize",
				pin: ".section-realize .content",
				start: "top top",
				end: "bottom bottom"
			}
		})
			.set(".section-realize .content .text", { y: "+=100%", opacity: 0 })
			.to(".section-realize .content .text", {
				y: 0,
				opacity: 1,
				stagger: 0.1,
				scrollTrigger: {
					scrub: 0.5,
					trigger: ".section-realize",
					start: () => getPos(REALIZE_EL, 0.1),
					end: () => getPos(REALIZE_EL, 0.2)
				}
			})
			.fromTo(
				".section-realize .content .text",
				{
					y: 0,
					opacity: 1
				},
				{
					y: "-=100%",
					opacity: 0,
					stagger: 0.1,
					scrollTrigger: {
						scrub: 0.5,
						trigger: ".section-realize",
						start: () => getPos(REALIZE_EL, 0.3),
						end: () => getPos(REALIZE_EL, 0.4)
					}
				}
			);

const COMUNICATE_EL = document.querySelector(".section-communicate");

const COMUNICATE = () =>
		timeline({
			scrollTrigger: {
				trigger: ".section-communicate",
				pin: ".section-communicate .content",
				start: "top top",
				end: "bottom bottom"
			}
		})
			.set(".section-communicate .content .text", { y: "+=100%", opacity: 0 })
			.to(".section-communicate .content .text", {
				y: 0,
				opacity: 1,
				stagger: 0.1,
				scrollTrigger: {
					scrub: 0.5,
					trigger: ".section-communicate",
					start: () => getPos(COMUNICATE_EL, 0.1),
					end: () => getPos(COMUNICATE_EL, 0.2)
				}
			})
			.fromTo(
				".section-communicate .content .text",
				{
					y: 0,
					opacity: 1
				},
				{
					y: "-=100%",
					opacity: 0,
					stagger: 0.1,
					scrollTrigger: {
						scrub: 0.5,
						trigger: ".section-communicate",
						start: () => getPos(COMUNICATE_EL, 0.3),
						end: () => getPos(COMUNICATE_EL, 0.4)
					}
				}
			);

const ZOOM_EL = document.querySelector(".section-zoom");
const ZOOM = () =>
	timeline({
		scrollTrigger: {
			scrub: true,
			pin: ".section-intro",
			trigger: ".section-intro",
			endTrigger: ".section-zoom",
			start: "top top",
			end: "bottom bottom"
		}
	})
		.to(
			{},
			{
				// '--clip': 0,
				scrollTrigger: {
					scrub: true,
					trigger: ".section-zoom",
					// pin: '.section-zoom .content',
					start: "top +=15%",
					end: "top -=30%",
					onEnter: () => {
						set(".section-intro", { zIndex: 3 });
					},
					onLeaveBack: () => {
						document.querySelector(".section-intro").style.removeProperty("z-index");
					},
					onEnterBack: () => {
						set(".section-intro", { zIndex: 3 });
					},
					onLeave: () => {
						document.querySelector(".section-intro").style.removeProperty("z-index");
					},
					onUpdate: (self) => {
						set(".section-intro .text", {
							"--clip": 100 - self.progress * 100
						});
					}
				}
			}
		)
		.fromTo(
			".triangle-graphic",
			{
				x: 250
			},
			{
				x: () => -document.querySelector(".section-intro .text").getBoundingClientRect().width,
				rotation:50,
  				duration:1, 
				ease:'none',
				scale: 10, 
				scrollTrigger: {
					scrub: true,
					trigger: ".section-zoom",
					start: "top +=30%",
					end: "top -=30%"
				},
			}
		)



		
timeline().add(INTRO()).add(REALIZE()).add(COMUNICATE()).add(ZOOM());
