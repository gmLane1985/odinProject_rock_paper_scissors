let humanScore = 0;
let computerScore = 0;
const resultsDiv = document.getElementById('results');

// computer choice
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 0) {
    return 'rock';
  } else if (randomNumber === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  let roundResult = '';

  if (humanChoice === computerChoice) {
    roundResult = `It's a tie! (${humanChoice} / ${computerChoice})`;
  }
  // human wins with rock if
  else if (humanChoice === 'rock' && computerChoice === 'scissors') {
    roundResult = 'You win! Rock beats Scissors';
    humanScore++;
  }
  // human wins with paper if
  else if (humanChoice === 'paper' && computerChoice === 'rock') {
    roundResult = 'You win! Paper beats Rock';
    humanScore++;
  }
  // human wins with scissors if
  else if (humanChoice === 'scissors' && computerChoice === 'paper') {
    roundResult = 'You win! Scissors beats Paper';
    humanScore++;
  } else {
    roundResult = 'You lose! ' + computerChoice + ' beats ' + humanChoice;
    computerScore++;
  }

  updateDisplay(roundResult);
  checkForWinner();
}

function updateDisplay(roundResult) {
  resultsDiv.classList.add('active');
  resultsDiv.innerHTML = `
    <p><strong>${roundResult}</strong></p>
    <p>Your Score: ${humanScore}</p>
    <p>Computer Score: ${computerScore}</p>
  `;
}

function checkForWinner() {
  if (humanScore === 5) {
    resultsDiv.innerHTML = `
      <h2>🎉 You Win the Game!</h2>
      <p>Final Score - You: ${humanScore}, Computer: ${computerScore}</p>
      <p>Refresh the page to play again.</p>
    `;
    disableButtons();
  } else if (computerScore === 5) {
    resultsDiv.innerHTML = `
      <h2>😔 Computer Wins the Game!</h2>
      <p>Final Score - You: ${humanScore}, Computer: ${computerScore}</p>
      <p>Refresh the page to play again.</p>
    `;
    disableButtons();
  }
}

function disableButtons() {
  ['rock-btn', 'paper-btn', 'scissors-btn'].forEach((id) => {
    document.getElementById(id).disabled = true;
  });
}

// add event listeners to buttons
const choices = ['rock', 'paper', 'scissors'];
choices.forEach((choice) => {
  document.getElementById(`${choice}-btn`).addEventListener('click', () => {
    playRound(choice, getComputerChoice());
  });
});
