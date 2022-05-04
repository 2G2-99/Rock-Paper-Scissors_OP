// GAME

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
		return ('Its a tie');
	} else if (
		(playerChoice === 'rock' && computerChoice === 'scissors') ||
		(playerChoice === 'paper' && computerChoice === 'rock') ||
		(playerChoice === 'scissors' && computerChoice === 'paper')
	) {
		return ('You win!');
	} else if (
		(computerChoice === 'rock' && playerChoice === 'scissors') ||
		(computerChoice === 'paper' && playerChoice === 'rock') ||
		(computerChoice === 'scissors' && playerChoice === 'paper')
	) {
		return ('Computer win!');
	}
}
console.log(playRound(playerChoice, computerChoice));


