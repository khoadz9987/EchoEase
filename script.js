particlesJS("particles-js", {
  particles: {
    number: { value: 50 },
    size: { value: 2.5 },
    color: { value: "#ffffff" },
    line_linked: {
      enable: true,
      color: "#ffffff",
      opacity: 0.5,
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "grab" },
    },
  },
});
