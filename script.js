let playerSelection = function () {
    let playerChoice = prompt ('Choose your weapon: rock, paper or scissor?');
    return playerChoice.toLowerCase ();
};

let computerSelection = function () {
    let computerChoice = ['rock', 'paper', 'scissor'];
    return computerChoice[Math.floor(Math.random()*computerChoice.length)];
};

function playRound (playerSelection, computerSelection) {
    if (computerSelection == 'paper' && playerSelection == 'scissor') {
            return 'Computer chose paper. Scissor beats the paper!';
        } else if (computerSelection == 'rock' && playerSelection == 'paper') {
            return 'Computer chose rock. Paper beats the rock!';
        }else if (computerSelection == 'scissor' && playerSelection == 'rock') {
            return 'Computer chose scissor. Rock beats the scissor!';
        }else if (computerSelection == 'scissor' && playerSelection == 'paper') {
            return 'Computer chose scissor. Paper is beaten by the scissor!';
        } else if (computerSelection == 'paper' && playerSelection == 'rock') {
            return 'Computer chose paper. Rock is beaten by the paper!';
        }else if (computerSelection == 'rock' && playerSelection == 'scissor') {
            return 'Computer chose rock. Scissor is beaten by the rock!';
        } else if (computerSelection == 'scissor' && playerSelection == 'scissor') {
            return "Computer chose scissor. It's a tie!";
        } else if (computerSelection == 'rock' && playerSelection == 'rock') {
            return "Computer chose rock. It's a tie!";
        } else if (computerSelection == 'paper' && playerSelection == 'paper') {
            return "Computer chose paper. It's a tie!";
        } else {
            return "it's not working!"
        }
}

function game () {
    for (let i=0; i<5; i++){
        console.log(playRound(playerSelection(), computerSelection())); {
                
        }
    }
}
