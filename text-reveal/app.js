const timeline = gsap.timeline({
  defaults: { duration: 0.75, ease: "power3.easeOut" },
});

timeline.fromTo(
  ".hero__img",
  { scale: 1.3, borderRadius: "0rem" },
  { scale: 1, borderRadius: "2rem", duration: 2.5, ease: "elastic.out(1.5, 1)" }
);
timeline.fromTo(
  ".cta__1",
  { x: "100%", opacity: 0 },
  { x: 0, opacity: 1 },
  "<20%"
);
timeline.fromTo(
  ".cta__3",
  { x: "-100%", opacity: 0 },
  { x: 0, opacity: 1 },
  "<20%"
);
timeline.fromTo(
  ".cta__2",
  { y: "100%", opacity: 0 },
  { y: 0, opacity: 1 },
  "<20%"
);
timeline.fromTo(
  ".cta__4",
  { x: "100%", opacity: 0 },
  { x: 0, opacity: 1 },
  "<20%"
);
timeline.fromTo(
  ".cta__6",
  { x: "-100%", opacity: 0 },
  { x: 0, opacity: 1 },
  "<20%"
);
timeline.fromTo(
  ".cta__5",
  { y: "100%", opacity: 0 },
  { y: 0, opacity: 1 },
  "<20%"
);
timeline.fromTo(".cta__btn", { y: 20, opacity: 0 }, { y: 0, opacity: 1 }, "<");
