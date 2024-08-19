function handleKeyboardBtnPress(event) {
  const userPressKey = event.key;

//   console.log(userPressKey);
  if(userPressKey === 'Escape'){
    gameOver();
  }

  const currentKey = document.getElementById("current-alphabet");
  const expectedKey = currentKey.innerText.toLowerCase();
//   console.log(userPressKey, expectedKey);
  // check
  if (userPressKey === expectedKey) {
    // update score
    const scoreElement = document.getElementById("current-score");
    const currentScore = scoreElement.innerText;
    const updateScore = parseInt(currentScore) + 1;
    scoreElement.innerText = updateScore;
    d;

    // change bgcolor and restart
    elementBackgroundRemove(expectedKey);
    playGame();
  } else {
    // console.log("wroung key");
    // reduce life
    const lifeElement = document.getElementById("current-life");
    const currentLife = lifeElement.innerText;
    const updateLife = parseInt(currentLife) - 1;
    lifeElement.innerText = updateLife;

    if (updateLife === 0) {
      gameOver();
    }
  }
}

document.addEventListener("keyup", handleKeyboardBtnPress);

function playGame() {
  hideElement("home");
  showElement("play-ground");

  const alphabet = randomAlphabets();
  const currentAlphabet = document.getElementById("current-alphabet");
  currentAlphabet.innerText = alphabet;

  elementBackgroundChange(alphabet);
}

function gameOver() {
  hideElement("play-ground");
  showElement("final-score");
  const finalScore = document.getElementById("last-score");
  const newScore = document.getElementById("current-score").innerText;
  finalScore.innerText = newScore;
}

function playAgain() {
  hideElement("final-score");
  showElement("play-ground");
  const resetScore = document.getElementById("current-score");
  resetScore.innerText = 0;
  const resetLife = document.getElementById("current-life");
  resetLife.innerText = 3;
}
