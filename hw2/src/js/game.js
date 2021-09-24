import showFinalScoreModal from './modals.js';

const cardCovers = document.querySelectorAll('.card-cover');
const timer = document.querySelector('.time-counter');
const score = document.querySelector('.score');

let selectedCards = [];
let clickCounter = 0;
let canUserClick = true;
let isGameStart = false,
  isGameFinished = false;

let minutes = 0,
  seconds = 0,
  miliSeconds = 0;
let scoreValue = 0;

// Checking if the game finished
const gameFinishedControl = () => {
  const cardCoversNumber = document.querySelectorAll('.card-cover');
  if (cardCoversNumber.length === 0) {
    isGameFinished = true;
    showFinalScoreModal(scoreValue, seconds);
  }
};

// Timer start function
const timerStart = () => {
  setInterval(() => {
    if (!isGameFinished) {
      if (miliSeconds === 100) {
        miliSeconds = 0;
        ++seconds;
      }
      if (seconds === 60) {
        seconds = 0;
        ++minutes;
      }
      // options for better view
      if (minutes < 10 && seconds < 10) {
        timer.innerText = `0${minutes}:0${seconds}:${miliSeconds}`;
      } else if (minutes < 10 && seconds > 10) {
        timer.innerText = `0${minutes}:${seconds}:${miliSeconds}`;
      } else if (minutes > 10 && seconds < 10) {
        timer.innerText = `${minutes}:0${seconds}:${miliSeconds}`;
      } else timer.innerText = `${minutes}:${seconds}:${miliSeconds}`;
      ++miliSeconds;
    } else {
      clearInterval();
    }
  }, 10);
};

// For updating score
const updateScoreValue = () => {
  if (scoreValue < 0) scoreValue = 0;
  if (scoreValue < 10) score.innerText = `Score: 00${scoreValue}`;
  else if (scoreValue < 100) score.innerText = `Score: 0${scoreValue}`;
  else score.innerText = `Score: ${scoreValue}`;
};

// For updating score
const cardCoupleCheck = () => {
  // true couple
  if (selectedCards[0] === selectedCards[1]) {
    scoreValue += 20;
    cardCovers.forEach((cardCover) => {
      // name is unique
      if (cardCover.getAttribute('data-name') === selectedCards[0]) {
        setTimeout(() => {
          cardCover.remove();
          gameFinishedControl();
          // card opacity change in .35s, this is why value is 350
        }, 350);
      }
    });
  } else {
    // wrong couple
    scoreValue -= 10;
    // make other cards unclickable for a while
    canUserClick = false;
    const currentCardCovers = document.querySelectorAll('.card-cover');
    currentCardCovers.forEach((cardCover) => {
      cardCover.style.cursor = 'default';
      if (cardCover.style.opacity === '0') {
        setTimeout(() => {
          cardCover.style.opacity = '1';
        }, 1000);
      }
      setTimeout(() => {
        canUserClick = true;
        cardCover.style.cursor = 'pointer';
      }, 1000);
    });
  }
  clickCounter = 0;
  selectedCards = [];
  updateScoreValue();
};

cardCovers.forEach((cardCover) => {
  cardCover.addEventListener('click', () => {
    if (!isGameStart) {
      isGameStart = true;
      timerStart();
    }
    // user can click only 2 card at the same period, don't count if the user click same card twice
    if (clickCounter < 2 && cardCover.style.opacity !== '0' && canUserClick) {
      ++clickCounter;
      cardCover.style.opacity = '0';
      selectedCards.push(cardCover.getAttribute('data-name'));
    }
    if (clickCounter === 2) cardCoupleCheck();
  });
});
