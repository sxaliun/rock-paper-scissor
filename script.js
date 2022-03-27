let playerSelection = function () {
    let playerChoice = prompt ('Choose your weapon: rock, paper or scissor?');
    return playerChoice.toLowerCase ();
};

let computerSelection = function () {
    let computerChoice = ['rock', 'paper', 'scissor'];
    return computerChoice[Math.floor(Math.random()*computerChoice.length)];
};

let playerScore = 0;
let compScore = 0;

function playRound (playerSelection, computerSelection) {
    if (computerSelection == 'paper' && playerSelection == 'scissor') {
        playerScore++;
        return 'Computer chose paper. Scissor beats the paper!';
    } else if (computerSelection == 'rock' && playerSelection == 'paper') {
        playerScore++;
        return 'Computer chose rock. Paper beats the rock!';
    }else if (computerSelection == 'scissor' && playerSelection == 'rock') {
            playerScore++;
            return 'Computer chose scissor. Rock beats the scissor!';
    }else if (computerSelection == 'scissor' && playerSelection == 'paper') {
            compScore++;
            return 'Computer chose scissor. Paper is beaten by the scissor!';
    } else if (computerSelection == 'paper' && playerSelection == 'rock') {
            compScore++;
            return 'Computer chose paper. Rock is beaten by the paper!';
    }else if (computerSelection == 'rock' && playerSelection == 'scissor') {
            compScore++;
            return 'Computer chose rock. Scissor is beaten by the rock!';
    } else if (computerSelection == 'scissor' && playerSelection == 'scissor') {
            return "Computer chose scissor. It's a tie!";
    } else if (computerSelection == 'rock' && playerSelection == 'rock') {
            return "Computer chose rock. It's a tie!";
    } else if (computerSelection == 'paper' && playerSelection == 'paper') {
            return "Computer chose paper. It's a tie!";
    } else {
            return "Please choose a valid weapon!"
    }
}

//repeat the game (for) until (break) one of the player gets 5 points first (if)

function playGame () {
    for (let i = 0; ; i++){
        console.log(playRound(playerSelection(), computerSelection()));
        if (compScore===5 || playerScore===5) {
            console.log (`Computer scored ${compScore} and Player scored ${playerScore}!`);
            console.log(checkWinner ());
    break
    }
}
}

//decide who wins and declare the winner

function checkWinner (){
    if (compScore>playerScore) {
        console.log('Computer wins the game!🏆');
    }else {
        console.log('Player wins the game!🏆');
    }
}