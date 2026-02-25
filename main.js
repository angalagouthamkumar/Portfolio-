/*=============== HOME SPLIT TEXT ===============*/
function splitText(selector) {
  const element = document.querySelector(selector);
  if (!element) return;

  const text = element.textContent;
  element.innerHTML = text
    .split("")
    .map(char => `<span>${char === " " ? "&nbsp;" : char}</span>`)
    .join("");
}

// Split both profession texts
splitText(".home__profession1");
splitText(".home__profession2");

// Animate Developer
anime({
  targets: ".home__profession1 span",
  translateY: ["100%", "0%"],
  opacity: [0, 1],
  easing: "easeOutExpo",
  duration: 900,
  delay: anime.stagger(80)
});

// Animate Designer
anime({
  targets: ".home__profession2 span",
  translateY: ["100%", "0%"],
  opacity: [0, 1],
  easing: "easeOutExpo",
  duration: 900,
  delay: anime.stagger(80, { start: 400 })
});
// ===== Split text into characters =====



// ===== Split text into characters (manual splitText) =====


// import { animate, splitText, stagger } from 'animejs';

// const { chars : chars1 } = splitText('.home__profession1', {
//   chars: { wrap: 'clip' },
// });

// animate(chars1, {
//   y: [
//     { to: ['100%', '0%'] },
//     { to: '-100%', delay: 400, ease: 'in(3)' }
//   ],
//   duration: 900,
//   ease: 'out(3)',
//   delay: stagger(90),
//   loop: true,
// });


/*=============== SWIPER PROJECTS ===============*/


/*=============== WORK TABS ===============*/


/*=============== SERVICES ACCORDION ===============*/


/*=============== TESTIMONIALS OF DUPLICATE CARDS ===============*/


/*=============== COPY EMAIL IN CONTACT ===============*/


/*=============== CURRENT YEAR OF THE FOOTER ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== CUSTOM CURSOR ===============*/


/* Hide custom cursor on links */


/*=============== SCROLL REVEAL ANIMATION ===============*/
