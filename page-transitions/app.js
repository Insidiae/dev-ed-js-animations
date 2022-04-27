const leaveTimeline = gsap.timeline({
  defauls: { duration: 0.75, ease: "power2.easeOut" },
});
const enterTimeline = gsap.timeline({
  defauls: { duration: 0.75, ease: "power2.easeOut" },
});

const leaveAnimation = (currentContainer, done) => {
  const product = currentContainer.querySelector(".showcase__image-container");
  const text = currentContainer.querySelector(".showcase__text");
  const circles = currentContainer.querySelectorAll(".circle");
  const arrow = currentContainer.querySelector(".showcase__arrow");

  return (
    leaveTimeline.fromTo(
      arrow,
      { opacity: 1, y: 0 },
      { opacity: 0, y: "100%" }
    ),
    leaveTimeline.fromTo(
      product,
      { opacity: 1, y: 0 },
      { opacity: 0, y: "100%" },
      "<"
    ),
    leaveTimeline.fromTo(
      text,
      { opacity: 1, y: 0 },
      { opacity: 0, y: "100%", onComplete: done },
      "<"
    ),
    leaveTimeline.fromTo(
      circles,
      { opacity: 1, y: 0 },
      {
        opacity: 0,
        y: "-100%",
        duration: 1,
        ease: "back.out(1.7)",
        stagger: 0.15,
      },
      "<"
    )
  );
};

const enterAnimation = (nextContainer, done, gradient) => {
  const product = nextContainer.querySelector(".showcase__image-container");
  const text = nextContainer.querySelector(".showcase__text");
  const circles = nextContainer.querySelectorAll(".circle");
  const arrow = nextContainer.querySelector(".showcase__arrow");

  return (
    enterTimeline.fromTo(
      arrow,
      { opacity: 0, y: "100%" },
      { opacity: 1, y: 0 }
    ),
    enterTimeline.to("body", { backgroundImage: gradient }, "<"),
    enterTimeline.fromTo(
      product,
      { opacity: 0, y: "100%" },
      { opacity: 1, y: 0 },
      "<"
    ),
    enterTimeline.fromTo(
      text,
      { opacity: 0, y: "100%" },
      { opacity: 1, y: 0, onComplete: done },
      "<"
    ),
    enterTimeline.fromTo(
      circles,
      { opacity: 0, y: "-100%" },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "back.out(1.7)",
        stagger: 0.15,
      },
      "<"
    )
  );
};

barba.init({
  preventRunning: true,
  transitions: [
    {
      name: "default",
      once(data) {
        const done = this.async();
        const nextContainer = data.next.container;
        const gradient = getGradient(data.next.namespace);
        gsap.set("body", { backgroundImage: gradient });
        enterAnimation(nextContainer, done, gradient);
      },
      leave(data) {
        const done = this.async();
        const currentContainer = data.current.container;
        leaveAnimation(currentContainer, done);
      },
      enter(data) {
        const done = this.async();
        const nextContainer = data.next.container;
        const gradient = getGradient(data.next.namespace);
        enterAnimation(nextContainer, done, gradient);
      },
    },
  ],
});

function getGradient(name) {
  switch (name) {
    case "handbag":
      return "linear-gradient(260deg, hsl(357deg 38% 54%), hsl(357deg 21% 38%))";
    case "boot":
      return "linear-gradient(260deg, hsl(164deg 18% 45%), hsl(235deg 19% 37%))";
    case "hat":
      return "linear-gradient(260deg, hsl(21deg 36% 53%), hsl(353deg 20% 41%))";
  }
}
