const button = document.querySelector(".btn--menu");
const icon = document.querySelector(".hamburger");
const navLinks = document.querySelectorAll(".navbar__links");
const navbarMenu = document.querySelector(".navbar__menu");
const body = document.querySelector("body");

button.addEventListener("click", () => {
  navbarMenu.classList.toggle("active");
  body.classList.toggle("disabled-scroll");
  if (navbarMenu.classList.contains("active")) {
    icon.src = "/images/icon-close.svg";
  } else {
    icon.src = "/images/icon-hamrburger.svg";
  }
});
