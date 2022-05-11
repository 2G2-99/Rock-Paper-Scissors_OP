// Logic Variables
let round = 1;
let userScore = 0;
let computerScore = 0;

// 
// Computer Play
function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3);

    switch (randomNumber) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
    };
};

// 
// User Play
function userPlay() {
    let userInput = window.prompt('Rock, Paper or Scissors?', '').toLowerCase();

    if (userInput.includes('rock') || userInput.includes('paper') || userInput.includes('scissors')) {
        return (userInput);
    } else {
        alert('Are sure?');
        userInput = prompt('Rock, Paper or Scissors?').toLowerCase();
        return (userInput);
    };
};

// 
// Defining Parameters
const userSelection = userPlay();
console.log(userSelection);

const computerSelection = computerPlay();
console.log(computerSelection);

//
// Game Round 
function playRound(userSelection, computerSelection) {
    if (userSelection === computerSelection) {
        return ('It\'s a tie, no one scores!');
    } else if (
        (userSelection === 'rock' && computerSelection === 'scissors') ||
        (userSelection === 'paper' && computerSelection === 'rock') ||
        (userSelection === 'scissors' && computerSelection === 'paper')
        ) {
        round++;
        userScore++;
        return (`You won, ${userSelection} beats ${computerSelection}!`);
    } else if (
		(computerSelection === 'rock' && userSelection === 'scissors') ||
		(computerSelection === 'paper' && userSelection === 'rock') ||
		(computerSelection === 'scissors' && userSelection === 'paper')
	) {
		round++;
        computerScore++;
		return (`You lost, ${computerSelection} beats ${userSelection}!`);
	};
};
console.log(playRound(userSelection, computerSelection));

// 
// Game Loop
function game() {
    while (userScore < 5 && computerScore < 5) {
        playRound(userPlay(), computerPlay());
        console.log(`The score is ${userScore} - ${computerScore} and you are on round number ${round}`);
    };
};
game();
