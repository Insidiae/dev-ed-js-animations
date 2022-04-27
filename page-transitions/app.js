barba.init({
  preventRunning: true,
  transitions: [
    {
      name: "default",
      leave(data) {
        const done = this.async();
        let currentContainer = data.current.container;
        gsap.fromTo(
          currentContainer,
          { opacity: 1 },
          { opacity: 0, duration: 1, onComplete: done }
        );
      },
      enter(data) {
        const done = this.async();
        let nextContainer = data.next.container;
        gsap.fromTo(
          nextContainer,
          { opacity: 0 },
          { opacity: 1, duration: 1, onComplete: done }
        );
      },
    },
  ],
});
