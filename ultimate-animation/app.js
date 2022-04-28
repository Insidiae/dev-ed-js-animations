const introTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".first-page",
    start: "0%",
    end: "100%",
    pin: true,
    pinSpacing: false,
  },
});

const highlightEnterTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".second-page",
    start: "-40%",
    end: "40%",
    scrub: true,
  },
});

highlightEnterTimeline.fromTo(
  ".highlight",
  { color: "rgba(255, 255, 255, 0.4)" },
  { color: "rgba(255, 255, 255, 1)", stagger: 1 }
);

const highlightLeaveTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".second-page",
    start: "-20%",
    end: "60%",
    scrub: true,
  },
});

highlightLeaveTimeline.to(".highlight", {
  color: "rgba(255, 255, 255, 0.4)",
  stagger: 1,
});

const phoneSplitTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".third-page",
    start: "-25%",
    end: "30%",
    scrub: true,
  },
});

phoneSplitTimeline.fromTo(".phone--large", { x: "40%" }, { x: "20%" });
phoneSplitTimeline.fromTo(
  ".product-text--left",
  { x: 50, opacity: 0 },
  { x: -50, opacity: 1 },
  "<"
);
phoneSplitTimeline.fromTo(".phone--small", { x: "-40%" }, { x: "-20%" }, "<");
phoneSplitTimeline.fromTo(
  ".product-text--right",
  { x: -50, opacity: 0 },
  { x: 50, opacity: 1 },
  "<"
);

const phoneSplitPinTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".third-page",
    start: "0%",
    end: "100%",
    pin: true,
    pinSpacing: false,
  },
});

const swatches = document.querySelectorAll(".swatch-color");
const gallery = document.querySelector(".phone-gallery");
const slides = document.querySelectorAll(".phone-gallery__item");
const allCloseUps = Array.from(document.querySelectorAll(".phone-closeup"));

gsap.set(".phone-closeup--blue", { opacity: 1, zIndex: 1 });

swatches.forEach((swatch, index) => {
  const coord = slides[index].getBoundingClientRect().left;

  swatch.addEventListener("click", (event) => {
    const swatchName = event.target.dataset.swatch;
    const closeUp = document.querySelector(`.phone-closeup--${swatchName}`);
    const others = allCloseUps.filter(
      (c) => !c.classList.contains(`phone-closeup--${swatchName}`)
    );

    gsap.set(closeUp, { zIndex: 1 });
    gsap.to(others, { opacity: 0, duration: 1 });
    gsap.fromTo(closeUp, { opacity: 0 }, { opacity: 1, duration: 1 });
    gsap.to(gallery, { x: -coord, duration: 1, ease: "back.out(1)" });
  });
});

const videoTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".fifth-page",
    start: "0%",
    end: "150%",
    pin: true,
    scrub: true,
  },
});

videoTimeline.fromTo(
  ".product-video",
  { currentTime: 0 },
  { currentTime: 3, duration: 1 }
);
videoTimeline.fromTo(
  ".product-features",
  { opacity: 0 },
  { opacity: 1, duration: 0.5, stagger: 0.25 },
  "<"
);

const parallaxTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".sixth-page",
    start: "-25%",
    end: "50%",
    scrub: true,
  },
});

parallaxTimeline.fromTo(".photo-description", { y: 0 }, { y: -80 });
parallaxTimeline.fromTo(".portrait-container", { y: 0 }, { y: -80 }, "<");
parallaxTimeline.fromTo(".camera", { y: 0 }, { y: -350 }, "<");
