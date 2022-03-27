let playerSelection = function () {
    let playerChoice = prompt ('Choose your weapon: rock, paper or scissor?');
    return playerChoice.toLowerCase ();
};

let computerSelection = function () {
    let computerChoice = ['rock', 'paper', 'scissor'];
    return computerChoice[Math.floor(Math.random()*computerChoice.length)];
};

function playRound (playerSelection, computerSelection) {
    if (computerSelection === 'paper' && playerSelection === 'scissor') {
            return 'Scissor beats the paper!';
        } else if (computerSelection === 'rock' && playerSelection === 'paper') {
            return 'Paper beats the rock!';
        }else if (computerSelection === 'scissor' && playerSelection === 'rock') {
            return 'Rock beats the scissor!';
        }
            else {
            alert ('You lose! One point for the computer!')
        }
}

function game (playRound) {
    for (let i=0; i<5; i++){
        console.log(computerSelection (), playerSelection ());
        playRound (playerSelection, computerSelection);
    }
}
