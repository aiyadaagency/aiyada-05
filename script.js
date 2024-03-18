// ? Website Animations

gsap.from(".features .bottom .left .card", {
  x: -150,
  opacity: 0,
  duration: 1,
  stagger: 0.4,
  scrollTrigger: {
    trigger: ".features .bottom .left .card",
  },
});

gsap.from(".features .bottom .right .card", {
  x: 150,
  opacity: 0,
  duration: 1,
  stagger: 0.4,
  scrollTrigger: {
    trigger: ".features .bottom .right .card",
  },
});

gsap.from("header ul li", {
  opacity: 0,
  stagger: 0.3,
});

gsap.from("header .logo", {
  x: -750,
  duration: 1.5,
});

gsap.from("header button", {
  x: 750,
  duration: 1.5,
});

gsap.from(".hero .left", {
  x: -800,
  opacity: 0,
  duration: 1.3,
});

gsap.from(".hero .right", {
  x: 800,
  opacity: 0,
  duration: 1.3,
});

gsap.from(".discover .card-slider .card", {
  opacity: 0,
  stagger: 0.4,
  scrollTrigger: {
    trigger: ".discover .card-slider .card",
  },
});

gsap.from(".blog .cards .card", {
  opacity: 0,
  y: -80,
  stagger: 0.4,
  scrollTrigger: {
    trigger: ".blog .cards .card",
  },
});

gsap.from(".customer-reviews .customers .group1 .card", {
  opacity: 0,
  rotate: 5,
  stagger: 0.4,
  duration: 1,
  scrollTrigger: {
    trigger: ".customer-reviews .customers  ",
  },
});

gsap.from(".customer-reviews .customers .group2 .card", {
  opacity: 0,
  rotate: -5,
  stagger: 0.4,
  duration: 1,
  scrollTrigger: {
    trigger: ".customer-reviews .customers .group2",
  },
});

gsap.from(".arts *", {
  opacity: 0,
  stagger: 0.1,
  duration: 1,
  scrollTrigger: {
    trigger: ".arts",
  },
});

gsap.from(".footer .top *", {
  opacity: 0,
  stagger: 0.02,
  duration: 1,
  scrollTrigger: {
    trigger: ".footer .top",
  },
});

gsap.from(".footer .bottom ", {
  opacity: 0,
  stagger: 0.02,
  duration: 1,
  scrollTrigger: {
    trigger: ".footer .top",
  },
});

gsap.from(".about", {
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".about .card",
  },
});

gsap.from(".about .card *", {
  opacity: 0,
  stagger: 0.06,
  duration: 1,
  scrollTrigger: {
    trigger: ".about .card ",
  },
});

// ? Scroll Effect

// const scroll = new LocomotiveScroll({
//   el: document.querySelector("[data-scroll-container]"),
//   smooth: true,
//   lerp: 0.1,
// });

let arrowsLeft = document.querySelector(".discover .arrows #left");
let arrowsRight = document.querySelector(".discover .arrows #right");
let firstCard = document.querySelector(".discover .card-slider .card");
let discoverSlider = document.querySelector(".discover .card-slider");

arrowsLeft.addEventListener("click", () => {
  if (discoverSlider.scrollLeft < 20) {
    arrowsRight.querySelector("rect").setAttribute("fill-opacity", "1");
    arrowsLeft.querySelector("rect").setAttribute("fill-opacity", "0.72");
  } else {
    arrowsRight.querySelector("rect").setAttribute("fill-opacity", "0.72");
    arrowsLeft.querySelector("rect").setAttribute("fill-opacity", "1");
  }
  discoverSlider.style.scrollBehavior = "smooth";
  discoverSlider.scrollLeft -= 300;
});

arrowsRight.addEventListener("click", () => {
  if (discoverSlider.scrollLeft > 20) {
    arrowsLeft.querySelector("rect").setAttribute("fill-opacity", "1");
    arrowsRight.querySelector("rect").setAttribute("fill-opacity", "0.72");
  } else {
    arrowsLeft.querySelector("rect").setAttribute("fill-opacity", "0.72");
    arrowsRight.querySelector("rect").setAttribute("fill-opacity", "1");
  }
  discoverSlider.style.scrollBehavior = "smooth";
  discoverSlider.scrollLeft += 300;
});

let leftA = document.querySelector(".blog .center #left");
let rightA = document.querySelector(".blog .center #right");
let firstBlogCard = document.querySelector(".blog .cards card");
let blogSlider = document.querySelector(".blog .cards");

leftA.addEventListener("click", () => {
  blogSlider.style.scrollBehavior = "smooth";
  blogSlider.scrollLeft -= 300;
});

rightA.addEventListener("click", () => {
  blogSlider.style.scrollBehavior = "smooth";
  blogSlider.scrollLeft += 300;
});
