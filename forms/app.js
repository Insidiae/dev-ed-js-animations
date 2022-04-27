const form = document.querySelector("form");
const inputContainers = document.querySelectorAll(".input-container");
const checkbox = document.querySelector(".checkbox");
const tickMarkPath = document.querySelector(".tick-mark path");

const inputTimeline = gsap.timeline({ defaults: { duration: 1 } });
const checkboxTimeline = gsap.timeline({
  defaults: { duration: 0.5, ease: "power2.easeOut" },
});

function validateEmail(email) {
  const regex = /\S+@\S+\.\S+/;
  return regex.test(email);
}

function validatePhone(phone) {
  const regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  return regex.test(phone);
}

function colorize(color, line, placeholder) {
  gsap.to(line, { stroke: color, duration: 0.75 });
  gsap.to(placeholder, { color: color, duration: 0.75 });
}

const startPath =
  "M0 0.999512C0 0.999512 60.5 0.999512 150 0.999512C239.5 0.999512 300 0.999512 300 0.999512";
const endPath =
  "M1 0.999512C1 0.999512 61.5 7.5 151 7.5C240.5 7.5 301 0.999512 301 0.999512";
inputContainers.forEach((container) => {
  const placeholder = container.querySelector(".placeholder");
  const input = container.querySelector(".input");
  const line = container.querySelector(".elastic-line");

  input.addEventListener("focus", () => {
    if (!input.value) {
      inputTimeline.fromTo(
        line,
        { attr: { d: startPath } },
        { attr: { d: endPath }, duration: 0.75, ease: "power2.easeOut" }
      );
      inputTimeline.to(
        line,
        {
          attr: { d: startPath },
          ease: "elastic.out(3, 0.5)",
        },
        "<50%"
      );

      inputTimeline.to(
        placeholder,
        {
          y: -15,
          x: 0,
          scale: 0.7,
          duration: 0.5,
          ease: "power2.easeOut",
        },
        "<15%"
      );
    }
  });

  input.addEventListener("blur", () => {
    if (!input.value) {
      gsap.to(placeholder, {
        y: 0,
        x: 0,
        scale: 1,
        duration: 0.5,
        ease: "power2.easeOut",
      });
    }
  });

  input.addEventListener("input", (event) => {
    if (event.target.type === "text") {
      const inputText = event.target.value;
      // if (inputText.length > 2) {
      //   colorize("#6391e8", line, placeholder);
      // } else {
      //   colorize("#fe8c99", line, placeholder);
      // }
      colorize(inputText.length > 2 ? "#6391e8" : "#fe8c99", line, placeholder);
    } else if (event.target.type === "email") {
      const inputText = event.target.value;
      colorize(
        validateEmail(inputText) ? "#6391e8" : "#fe8c99",
        line,
        placeholder
      );
    } else if (event.target.type === "tel") {
      const inputText = event.target.value;
      colorize(
        validatePhone(inputText) ? "#6391e8" : "#fe8c99",
        line,
        placeholder
      );
    }
  });
});

const pathLength = tickMarkPath.getTotalLength();
gsap.set(tickMarkPath, {
  strokeDashoffset: pathLength,
  strokeDasharray: pathLength,
});
checkbox.addEventListener("click", () => {
  if (checkbox.checked) {
    checkboxTimeline.to(".checkbox-fill", { y: 0 });
    checkboxTimeline.fromTo(
      tickMarkPath,
      { strokeDashoffset: pathLength },
      { strokeDashoffset: 0 },
      "<50%"
    );
    checkboxTimeline.to(".checkbox-label", { color: "#6391e8" }, "<");
  } else {
    checkboxTimeline.fromTo(
      tickMarkPath,
      { strokeDashoffset: 0 },
      { strokeDashoffset: pathLength }
    );
    checkboxTimeline.to(".checkbox-fill", { y: "100%" }, "<50%");
    checkboxTimeline.to(".checkbox-label", { color: "#c5c5c5" }, "<");
  }
});

//? Fix for Firefox sometimes persisting checkbox being checked when the page reloads
document.addEventListener("DOMContentLoaded", (event) => {
  if (checkbox.checked) {
    gsap.set(".checkbox-fill", { y: 0 });
    gsap.set(tickMarkPath, { strokeDashoffset: 0 });
    gsap.set(".checkbox-label", { color: "#6391e8" });
  }
});
