const cardsContainerDOM = document.querySelector(".cards-container");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const searchBar = document.querySelector(".search-input");
let data = null;
let currentIndex = 0;
let firstItem = true;
let contentNumber = 1;

const createEightElement = (data) => {
  const dataBetween = contentNumber * 8;
  const tempData = data.slice(dataBetween - 8, dataBetween);
  const gridContainer = document.createElement("div");
  gridContainer.className = "grid-container";
  tempData.map((oneItem) => {
    const gridItem = document.createElement("div");
    gridItem.className = "grid-item";
    const random = Math.floor(Math.random() * 100);
    const gridItemDOM = `
          <div class="img-container">
              <img src='https://source.unsplash.com/collection/${random}/250x250' alt="image">
          </div>
          <div class="title">${oneItem.title}</div>
          <div class="body">${oneItem.body}</div>
          `;
    gridItem.innerHTML = gridItemDOM;
    gridContainer.appendChild(gridItem);
  });
  if (!firstItem) gridContainer.style.display = "none";
  firstItem = false;
  cardsContainerDOM.appendChild(gridContainer);
  ++contentNumber;
};
rightArrow.addEventListener("click", () => {
  if (currentIndex === 11) {
    rightArrow.style.opacity = "0.25";
    rightArrow.style.cursor = "default";
  }
  if (currentIndex < 12) {
    createEightElement(data);
    const gridContainerAll = document.querySelectorAll(".grid-container");
    gridContainerAll[currentIndex].style.display = "none";
    ++currentIndex;
    gridContainerAll[currentIndex].style.display = "grid";
    if (currentIndex != 0) {
      leftArrow.style.opacity = "1";
      leftArrow.style.cursor = "pointer";
    }
  }
});
leftArrow.addEventListener("click", () => {
  if (currentIndex === 1) {
    leftArrow.style.opacity = "0.25";
    leftArrow.style.cursor = "default";
  }
  if (currentIndex !== 0) {
    rightArrow.style.opacity = "1";
    rightArrow.style.cursor = "pointer";
    const gridContainerAll = document.querySelectorAll(".grid-container");
    gridContainerAll[currentIndex].style.display = "none";
    --currentIndex;
    gridContainerAll[currentIndex].style.display = "grid";
  }
});
searchBar.addEventListener("keyup", (e) => {
  firstItem = true;
  contentNumber = 1;
  currentIndex = 0;
  if (e.target.value !== "") {
    const value = e.target.value;
    const filteredData = data.filter(
      (item) => item.body.includes(value) || item.title.includes(value)
    );
    const gridContainerAll = document.querySelectorAll(".grid-container");
    gridContainerAll.forEach((gridContainer) => {
      gridContainer.remove();
    });
    rightArrow.style.display = "none";
    leftArrow.style.display = "none";
    createEightElement(filteredData);
  } else {
    rightArrow.style.display = "block";
    leftArrow.style.display = "block";
    leftArrow.style.opacity = "0.25";
    leftArrow.style.cursor = "default";
    const gridContainerAll = document.querySelectorAll(".grid-container");
    gridContainerAll.forEach((gridContainer) => {
      gridContainer.remove();
    });
    createEightElement(data);
  }
});
(() => {
  axios("https://jsonplaceholder.typicode.com/posts").then((response) => {
    data = response.data;
    createEightElement(data);
  });
})();
