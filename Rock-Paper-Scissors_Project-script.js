// Logic Variables
let round = 1;
let userScore = 0;
let computerScore = 0;

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
// Defining Parameters
const userSelection = userPlay();
console.log(userSelection);

const computerSelection = computerPlay();
console.log(computerSelection);

//
// Game Round
function playRound(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return ('It\'s a tie, no one scores!');
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
        ) {
        round++;
        userScore++;
        return (`You won, ${userChoice} beats ${computerChoice}!`);
    } else if (
		(computerChoice === 'rock' && userChoice === 'scissors') ||
		(computerChoice === 'paper' && userChoice === 'rock') ||
		(computerChoice === 'scissors' && userChoice === 'paper')
	) {
		round++;
        computerScore++;
		return (`You lost, ${computerChoice} beats ${userChoice}!`);
	};
};
console.log(playRound(userSelection, computerSelection));

// 
// Game Loop
function game() {
    while (userSelection < 5 && computerSelection < 5) {
        userPlay();
        computerPlay();
        playRound(userSelection(), computerSelection());
        alert(`The score is ${userScore} - ${computerScore} and you are on round number ${round}`);
    };
};
game();
