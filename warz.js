const regionOne = document.querySelector('.region-one');
const regionTwo = document.querySelector('.region-two');
const regionOneText = document.querySelector('.region-one-text');
const regionTwoText = document.querySelector('.region-two-text');
const container = document.querySelector('.container');
const textDisplay = document.querySelector('.text-display');

const winThreshold = 300;
let countdown = 3;
let playerOneScore = 0;
let playerTwoScore = 0;

const reset = () => {
  regionOne.removeEventListener('mousemove', handleMouseMoveOne);
  regionTwo.removeEventListener('mousemove', handleMouseMoveTwo);
  playerOneScore = 0;
  playerTwoScore = 0;
  countdown = 3;
  textDisplay.style.animation = '';
  regionOneText.style.animation = '';
  regionTwoText.style.animation = '';
  requestAnimationFrame(() => {
    textDisplay.innerHTML = 'Click To Start';
    regionOneText.innerHTML = '';
    regionTwoText.innerHTML = '';
    setupGameStartListener();
  });
}

const handleMouseMoveOne = () => {
  playerOneScore += 1;
  regionOneText.innerHTML = playerOneScore;
  regionOneText.style.animation = 'jitter .1s linear infinite';
  regionTwoText.style.animation = '';
  requestAnimationFrame(() => {
    if (playerOneScore === winThreshold) {
      requestAnimationFrame(() => {
        window.alert('Player One Wins!');
        reset();
      });
    }
  });
};

const handleMouseMoveTwo = () => {
  playerTwoScore += 1;
  regionTwoText.innerHTML = playerTwoScore;
  regionTwoText.style.animation = 'jitter .1s linear infinite';
  regionOneText.style.animation = '';
  requestAnimationFrame(() => {
    if (playerTwoScore === winThreshold) {
      requestAnimationFrame(() => {
        window.alert('Player Two Wins!');
        reset();
      });
    }
  });
};

const handleAnimationEnd = () => {
  if (countdown === 0) {
    textDisplay.removeEventListener('animationend', handleAnimationEnd);
    textDisplay.innerHTML = '';
    regionOneText.innerHTML = '0';
    regionTwoText.innerHTML = '0';
    regionOne.addEventListener('mousemove', handleMouseMoveOne);
    regionTwo.addEventListener('mousemove', handleMouseMoveTwo);
    return;
  }
  requestAnimationFrame(() => {
    textDisplay.innerHTML = countdown--;
    textDisplay.style.animation = '';
    requestAnimationFrame(() => {
      textDisplay.style.animation = 'fade-out 1s ease-in 1';
    });
  });
}

const beginCountdown = () => {
  textDisplay.style.animation = 'jitter-fade-out .5s linear 1';
  textDisplay.addEventListener('animationend', handleAnimationEnd);
}

const startGame = () => {
  document.body.removeEventListener('click', startGame);
  beginCountdown();
};

const setupGameStartListener = () => {
  document.body.addEventListener('click', startGame);
};

setupGameStartListener();

