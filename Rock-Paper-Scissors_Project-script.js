// GAME
let round = 1;
let PlayerScore = 0;
let computerScore = 0

// Player play
let playerPlay = prompt('Rock, paper or scissors?', '').toLowerCase();
console.log('You choose ' + playerPlay);

// Computer play
let randomNumber = Math.floor(Math.random() * 3);
function computerPlay() {
	switch (randomNumber) {
		case 0:
			return 'rock';
			break;

		case 1:
			return 'paper';
			break;
		case 2:
			return 'scissors';
			break;
	};
};
console.log(computerPlay());

// Naming player and computer functions
const computerChoice = computerPlay();
const playerChoice = playerPlay;

// Round function
function playRound(playerChoice, computerChoice) {

	if (playerChoice === computerChoice) {
		round += 1;
		return ('Its a tie');
	} else if (
		(playerChoice === 'rock' && computerChoice === 'scissors') ||
		(playerChoice === 'paper' && computerChoice === 'rock') ||
		(playerChoice === 'scissors' && computerChoice === 'paper')
	) {
		round += 1;
		PlayerScore += 1;
		return (`You win! ${playerChoice} beats ${computerChoice}`);
	} else if (
		(computerChoice === 'rock' && playerChoice === 'scissors') ||
		(computerChoice === 'paper' && playerChoice === 'rock') ||
		(computerChoice === 'scissors' && playerChoice === 'paper')
	) {
		round += 1;
		computerScore += 1;
		return (`Computer win! ${computerChoice} beats ${playerChoice}`);
	}
}
console.log(playRound(playerChoice, computerChoice));

// Repeating round
function game() {
	for (let i = 1; i <= round; i++) {
		
	};
};

