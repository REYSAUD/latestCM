const menu = document.getElementById("menu-icon");
const navList = document.querySelector(".nav-list");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navList.classList.toggle("open");
};

const sr = ScrollReveal({
  distance: "65px",
  duration: 2600,
  delay: 450,
  reset: true
});
// Set delay and origin for elements
sr.reveal(".hero-text", { delay: 200, origin: "top" });
sr.reveal(".hero-img", { delay: 450, origin: "top" });
sr.reveal(".icons", { delay: 500, origin: "left" });
sr.reveal(".scroll-down", { delay: 500, origin: "right" });