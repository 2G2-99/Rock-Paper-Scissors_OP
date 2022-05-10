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
// Defining Parameters
const userSelection = userPlay();
const computerSelection = computerPlay();

//
// Game Round
function playRound(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return ('tie');
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
        ) {
        round++;
        userScore++;
        return ('user');
    } else if (
		(computerChoice === 'rock' && userChoice === 'scissors') ||
		(computerChoice === 'paper' && userChoice === 'rock') ||
		(computerChoice === 'scissors' && userChoice === 'paper')
	) {
		round++;
        computerScore++;
		return ('computer');
	};
};
// console.log(playRound(userSelection, computerSelection));

// 
// Score Message
// Score Message
function scoreMessage() {
    let roundResult = playRound(userSelection, computerSelection);

    if (roundResult === 'tie') {
        return ('It\'s a tie, no one scores!') ;
    } else if (roundResult === 'user') {
        return (`You won, ${userSelection} beats ${computerSelection} !`) ;
    } else if (roundResult === 'computer') {
        return (`You lost, ${computerSelection} beats ${userSelection} !`) ;  
    };
};
console.log(scoreMessage());
// 
// // Game Loop
while (userSelection < 5 && computerSelection < 5) {
    playRound();
};