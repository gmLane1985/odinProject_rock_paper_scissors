/* Create a new function named getComputerChoice.
Write the code so that getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”.*/

// Variables to store the score
let humanScore = 0;
let computerScore = 0;

// Get the computer's random choice
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

// Get the human player's choice
function getHumanChoice() {
  let playerChoice = prompt('Enter rock, paper, or scissors:');
  return playerChoice.toLowerCase();
}

// Play one round of the game
function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice === computerChoice) {
    console.log(`It's a tie! (${humanChoice} / ${computerChoice})`);
    return;
  }

  // Check if human wins with rock
  if (humanChoice === 'rock' && computerChoice === 'scissors') {
    console.log('You win! Rock beats Scissors');
    humanScore = humanScore + 1;
  }
  // Check if human wins with paper
  else if (humanChoice === 'paper' && computerChoice === 'rock') {
    console.log('You win! Paper beats Rock');
    humanScore = humanScore + 1;
  }
  // Check if human wins with scissors
  else if (humanChoice === 'scissors' && computerChoice === 'paper') {
    console.log('You win! Scissors beats Paper');
    humanScore = humanScore + 1;
  }
  // Computer wins
  else {
    console.log('You lose! ' + computerChoice + ' beats ' + humanChoice);
    computerScore = computerScore + 1;
  }
}

// Play 5 rounds of the game
function playGame() {
  // Round 1
  console.log('--- Round 1 ---');
  let choice1 = getHumanChoice();
  let computerChoice1 = getComputerChoice();
  playRound(choice1, computerChoice1);

  // Round 2
  console.log('--- Round 2 ---');
  let choice2 = getHumanChoice();
  let computerChoice2 = getComputerChoice();
  playRound(choice2, computerChoice2);

  // Round 3
  console.log('--- Round 3 ---');
  let choice3 = getHumanChoice();
  let computerChoice3 = getComputerChoice();
  playRound(choice3, computerChoice3);

  // Round 4
  console.log('--- Round 4 ---');
  let choice4 = getHumanChoice();
  let computerChoice4 = getComputerChoice();
  playRound(choice4, computerChoice4);

  // Round 5
  console.log('--- Round 5 ---');
  let choice5 = getHumanChoice();
  let computerChoice5 = getComputerChoice();
  playRound(choice5, computerChoice5);

  console.log('');
  console.log('GAME OVER!');
  console.log('Your score: ' + humanScore);
  console.log('Computer score: ' + computerScore);
}
