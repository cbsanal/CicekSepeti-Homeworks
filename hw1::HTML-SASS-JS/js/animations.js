const formContainer = document.querySelector(".form-container");
const cardsContainer = document.querySelector(".cards-container");
const formBtn = document.querySelector(".form-btn");
const cardsbtn = document.querySelector(".cards-btn");
const logo = document.querySelector(".logo-img");
const searchInput = document.querySelector(".search-input");
let logoDocument = null;
let sLetter = null;

export const cardsBtnClick = () => {
  formContainer.style.transform = "translateY(-100%)";
  cardsContainer.style.transform = "translateY(-100%)";
  cardsbtn.classList.add("active-btn");
  formBtn.classList.remove("active-btn");
  sLetter.style.transform = "rotateZ(360deg)";
  searchInput.placeholder = "Search...";
  searchInput.disabled = false;
  searchInput.style.cursor = "pointer";
};
export const formBtnClick = () => {
  formContainer.style.transform = "translateY(0%)";
  cardsContainer.style.transform = "translateY(0%)";
  formBtn.classList.add("active-btn");
  cardsbtn.classList.remove("active-btn");
  sLetter.style.transform = "rotateZ(0deg)";
  searchInput.placeholder = `Can't touch me...`;
  searchInput.style.cursor = "none";
  searchInput.disabled = true;
};

logo.addEventListener("load", () => {
  logoDocument = logo.contentDocument;
  sLetter = logoDocument.querySelector("#s");
  sLetter.style.transition = "transform 0.8s ease";
  sLetter.style.transformOrigin = "center";
});
cardsbtn.addEventListener("click", cardsBtnClick);
formBtn.addEventListener("click", formBtnClick);
