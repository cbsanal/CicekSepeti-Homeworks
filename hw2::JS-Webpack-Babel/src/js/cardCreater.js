const cardsContainer = document.querySelector('.cards-container');
const cardsArray = [];

// Randomly append cards to the container
const randomAppendCards = () => {
  while (cardsArray.length !== 0) {
    const randomNumber = Math.floor(Math.random() * cardsArray.length);
    cardsContainer.appendChild(cardsArray[randomNumber]);
    cardsArray.splice(randomNumber, 1);
  }
};

// Create animal cards by using their data
const createCards = (animal) => {
  const gridItemDOM = `
    <div class="card-cover" data-name='${animal.name}'>
      <div class="card-cover-text">Show the image!<br>(Click)</div>
    </div>
    <div class="img-container">
      <img src='${animal.image}' alt="animal-image">
    </div>
    <div class="name">${animal.name}</div>
    <div class="age">Age: ${animal.age}</div>`;
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = gridItemDOM;
  cardsArray.push(card);
  if (cardsArray.length === 12) randomAppendCards();
};

export default createCards;
