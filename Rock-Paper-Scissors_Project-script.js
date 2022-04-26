// GAME
function computerPlay() {
	var randomNumber = Math.floor(Math.random() * 3);

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

let playerPlay = prompt('Rock, paper or scissors?', '').toLowerCase();
console.log(playerPlay);

const computerSelection = computerPlay();
const playerSelection = playerPlay;

function playRound(playerChoice, computerChoice) {
	if (playerChoice === 'rock' && computerChoice === 'scissors') {
		return ('You win, the rock smashed the scissors!');
	} else if (playerChoice === 'paper' && computerChoice === 'rock') {
		return ('You win, the paper has covered the rock!');
	} else if (playerChoice === 'scissors' && computerChoice === 'paper') {
		return ('You win, the scissors cut the paper!');
	} else if (computerChoice === 'rock' && playerChoice === 'scissors') {
		return ('Computer win, the rock smashed the scissors!');
	} else if (computerChoice === 'paper' && playerChoice === 'rock') {
		return ('Computer win, the paper has covered the rock!');
	} else if (computerChoice === 'scissors' && playerChoice === 'paper') {
		return ('Computer win, the scissors cut the paper!');
	} else if (playerChoice === computerChoice) {
		return ('Its a tie');
	}
}

console.log(playRound(playerSelection, computerSelection));

