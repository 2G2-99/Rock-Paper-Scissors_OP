// Logic Variables
let round = 1;
let userScore = 0;
let computerScore = 0;

// 
// User Play
let userInput = window.prompt('Rock, Paper or Scissors?', '').toLowerCase();

function userPlay(input) {
    if (userInput.includes('rock') || userInput.includes('paper') || userInput.includes('scissors')) {
        return (userInput);
    } else {
        alert('Are sure?');
        userInput = prompt('Rock, Paper or Scissors?').toLowerCase();
        return (userInput);
    };
};
console.log(userPlay());

// 
// Computer Play
let randomNumber = Math.floor(Math.random() * 3);

function computerPlay(number) {
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
console.log(computerPlay());

// 
// Defining Functions
const userSelection = userPlay();
const computerSelection = computerPlay();

//
// Game Round
function gameRound(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        round++;
        return ('Its a tie, play again!');
    } else if (
        (userChoice === 'rock' && computerChoice === 'paper') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
        ) {
        round++;
        userScore++;
        return (`You win! ${userChoice} beats ${computerChoice}`);
    } else if (
		(computerChoice === 'rock' && userChoice === 'scissors') ||
		(computerChoice === 'paper' && userChoice === 'rock') ||
		(computerChoice === 'scissors' && userChoice === 'paper')
	) {
		round++;
		computerScore++;
		return (`Computer win! ${computerChoice} beats ${userChoice}`);
	};
};
console.log(gameRound(userSelection, computerSelection));