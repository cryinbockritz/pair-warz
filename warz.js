const regionOne = document.querySelector('.region-one');
const regionTwo = document.querySelector('.region-two');
const container = document.querySelector('.container');

const winThreshold = 202;

let playerOneScore = 0;
let playerTwoScore = 0;

const reset = () => {
  regionOne.removeEventListener('mousemove', handleMouseMoveOne);
  regionTwo.removeEventListener('mousemove', handleMouseMoveTwo);
  playerOneScore = 0;
  playerTwoScore = 0;
  setTimeout(() => {
    regionOne.innerHTML = 'Click To Start';
    regionTwo.innerHTML = '';
    setupGameStartListener();
  }, 100);
}

const handleMouseMoveOne = () => {
  playerOneScore += 1;
  if (playerOneScore === winThreshold) {
    if (window.confirm('Player One Wins!')) {
      reset();
    }
  }
  regionOne.innerHTML = playerOneScore;
  regionTwo.innerHTML = playerTwoScore;
};

const handleMouseMoveTwo = () => {
  playerTwoScore += 1;
  if (playerTwoScore === winThreshold) {
    if(window.confirm('Player Two Wins!')) {
      reset();
    }
  }
  regionOne.innerHTML = playerOneScore;
  regionTwo.innerHTML = playerTwoScore;
};

const startGame = () => {
  document.body.removeEventListener('click', startGame);

  regionOne.addEventListener('mousemove', handleMouseMoveOne);

  regionTwo.addEventListener('mousemove', handleMouseMoveTwo);
}

const setupGameStartListener = () => {
  document.body.addEventListener('click', startGame);
}

setupGameStartListener();

