let userScore = 0;
let compScore = 0;
let roundLimit = 'free';

document.getElementById('gameMode').addEventListener('change', (e) => {
  roundLimit = e.target.value;
  resetGame();
});

function play(userChoice) {
  if (roundLimit !== 'free' && (userScore >= roundLimit || compScore >= roundLimit)) return;

  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result = '';

  if (userChoice === computerChoice) {
    result = "It's a tie!";
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result = `You win! ${userChoice} beats ${computerChoice}`;
    userScore++;
  } else {
    result = `You lose! ${computerChoice} beats ${userChoice}`;
    compScore++;
  }

  document.getElementById('result').textContent = result;
  document.getElementById('userScore').textContent = userScore;
  document.getElementById('compScore').textContent = compScore;

  checkGameOver();
}

function checkGameOver() {
  if (roundLimit === 'free') return;

  if (userScore >= roundLimit || compScore >= roundLimit) {
    const message = userScore > compScore ? '🎉 You won the game!' : '💀 Computer wins the game!';
    document.getElementById('gameOverMessage').textContent = message;
    document.getElementById('gameOverSection').style.display = 'block';
  }
}

function resetGame() {
  userScore = 0;
  compScore = 0;
  document.getElementById('userScore').textContent = userScore;
  document.getElementById('compScore').textContent = compScore;
  document.getElementById('result').textContent = '---';
  document.getElementById('gameOverSection').style.display = 'none';
}
