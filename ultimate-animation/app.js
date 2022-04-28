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
