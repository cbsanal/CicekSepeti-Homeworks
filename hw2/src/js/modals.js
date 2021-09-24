const blackScreenLayer = document.querySelector('.middle-layer');
const finalScoreModal = document.querySelector('.final-score-modal');
const scoreText = document.querySelector('.score-text');
const timeBonus = document.querySelector('.time-bonus');
const finalScore = document.querySelector('.final-score');
const playAgainBtn = document.querySelector('.play-again-btn');
const closeModalBtn = document.querySelector('.close-btn');
const rulesModal = document.querySelector('.rules-modal');

// Final Score Modal
const showFinalScoreModal = (score, seconds) => {
  blackScreenLayer.style.display = 'block';
  scoreText.innerText = `Score: ${score}`;
  let timeBonusValue = (60 - seconds) * 2;
  if (seconds < 0) timeBonusValue = 0;
  timeBonus.innerText = `Time Bonus: ${timeBonusValue}`;
  finalScore.innerText = `Final Score: ${score + timeBonusValue}`;
  finalScoreModal.style.display = 'flex';
  finalScoreModal.style.justifyContent = 'center';
};

playAgainBtn.addEventListener('click', () => {
  location.reload();
  return false;
});

closeModalBtn.addEventListener('click', () => {
  rulesModal.remove();
  blackScreenLayer.style.display = 'none';
});

export default showFinalScoreModal;
