const home = document.querySelector(".home");
const notifications = document.querySelector(".notifications");
const messages = document.querySelector(".messages");

//* Home animations
gsap.set(".feather", { scale: 0, transformOrigin: "center" });
home.addEventListener("click", () => {
  gsap.fromTo(
    ".home__icon",
    { scale: 1 },
    { scale: 0.9, yoyo: true, repeat: 1 }
  );
  gsap.fromTo(
    ".feather",
    { y: -5, scale: 0 },
    { y: 20, scale: 1.5, duration: 1, stagger: 0.2 }
  );
  gsap.fromTo(".right-feather", { x: 0 }, { x: 5 });
});

//* Notifications animations
gsap.set(".bell", { transformOrigin: "top center" });
gsap.set(".ringer", { transformOrigin: "top center" });
gsap.set(".wave", { opacity: 0, transformOrigin: "bottom" });
notifications.addEventListener("click", () => {
  gsap.fromTo(
    ".bell",
    { rotation: -5 },
    { rotation: 0, duration: 2, ease: "elastic.out(5, 0.2)" }
  );
  gsap.fromTo(
    ".ringer",
    { rotation: -3, x: 0.5 },
    { rotation: 0, x: 0, duration: 1, ease: "elastic.out(5, 0.2)" }
  );
  gsap.fromTo(
    ".wave",
    { scale: 0, opacity: 2 },
    { scale: 1.3, opacity: 0, duration: 1, stagger: 0.1 }
  );
});

//* Messages animations
const timeline = gsap.timeline({
  defaults: { duration: 0.35, ease: "power2.easeOut" },
});
// gsap.set(".flap", { transformOrigin: "top" });
//? Trying out alternate .flap animations:
gsap.set(".flap", { transformOrigin: "center" });
messages.addEventListener("click", () => {
  timeline.fromTo(".messages__icon", { scale: 1 }, { scale: 0.9 });
  // timeline.fromTo(".flap", { scale: 1 }, { scale: -1 }, "<50%");
  //? rotationX (and other 3d transforms) doesn't seem to be supported for SVGs,
  //? but we can still do regular transforms just fine
  timeline.fromTo(
    ".flap",
    { transform: "rotateX(0deg)" },
    { transform: "rotateX(180deg)" },
    "<50%"
  );
  timeline.to(".messages__icon", { scale: 1 }, "<50%");
  timeline.fromTo(
    ".note",
    { y: 0, opacity: 1 },
    { y: -40, opacity: 0, duration: 0.75 }
  );
  // timeline.to(".flap", { scale: 1 }, "<50%");
  //? rotationX (and other 3d transforms) doesn't seem to be supported for SVGs,
  //? but we can still do regular transforms just fine
  timeline.to(".flap", { transform: "rotateX(0deg)" }, "<50%");
});
