import { cardsBtnClick, formBtnClick } from "./animations.js";
const menuIcon = document.querySelector(".menu-icon");
const menuCloseIcon = document.querySelector(".close-icon-container");
const menu = document.querySelector(".menu");
const links = document.querySelectorAll(".link-container span");

menuIcon.addEventListener("click", () => {
  menu.style.display = "flex";
});
menuCloseIcon.addEventListener("click", () => {
  menu.style.display = "none";
});
links.forEach((link) => {
  if (link.innerText === "Form") {
    link.addEventListener("click", () => {
      formBtnClick();
      menu.style.display = "none";
    });
  } else {
    link.addEventListener("click", () => {
      cardsBtnClick();
      menu.style.display = "none";
    });
  }
});
