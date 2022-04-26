// GAME
let playerPlay = prompt('Rock, paper or scissors?', '').toLowerCase();
console.log('You choose ' + playerPlay);

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
	}
}
console.log(computerPlay());


const computerSelection = computerPlay();
const playerSelection = playerPlay;

function playRound(playerChoice, computerChoice) {

	if (playerSelection === computerSelection) {
		return ('Its a tie');
	} else if (
		(playerSelection === 'rock' && computerSelection === 'scissors') ||
		(playerSelection === 'paper' && computerSelection === 'rock') ||
		(playerSelection === 'scissors' && computerSelection === 'paper')
	) {
		return ('You win!');
	} else if (
		(computerSelection === 'rock' && playerSelection === 'scissors') ||
		(computerSelection === 'paper' && playerSelection === 'rock') ||
		(computerSelection === 'scissors' && playerSelection === 'paper')
	) {
		return ('Computer win!');
	}
}

console.log(playRound(playerSelection, computerSelection));

