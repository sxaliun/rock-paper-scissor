const selectionBtns = document.querySelectorAll('button');
selectionBtns.forEach(button => button.addEventListener('click', getPlayerChoice));

let playerChoice;
function getPlayerChoice (e) {
  let playerSelection = e.target.id;
  playerChoice = e.target.textContent.toLowerCase();
  console.log('Player: ' +playerSelection);
  playRound(playerSelection, computerSelection());
  // console.log('Player: ${playerScore}, Computer: ${compScore}');
}

let computerSelection = function () {
  let computerOptions = ['rock', 'paper', 'scissor'];
  let computerChoice = computerOptions[Math.floor(Math.random()*computerOptions.length)];
  console.log('Computer: '+ computerChoice);
  return computerChoice;
};

let playerScore = 0;
let compScore = 0;
const playerScoreDisplay = document.querySelector('#playerScore');
const computerScoreDiplay = document.querySelector('#computerScore');
const playerScoreUpdate = document.querySelector('#playerScoreUpdate');
const computerScoreUpdate = document.querySelector('#computerScoreUpdate');

function playRound (playerSelection, computerSelection) {

  //TIE CONDITION
  if (computerSelection === playerSelection) {
    console.log(`It's a tie!`);
  }
  
  //PLAYER WINNING CONDITIONS

  else if (
    (playerSelection === 'scissor' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'rock' && computerSelection === 'scissor') ) {
      playerScore++;
      console.log(`Player beats!`);
      console.log('Player: '+playerScore+' VS '+'Computer:'+compScore);
      playerScoreUpdate.textContent = playerScore;
      playerScoreDisplay.appendChild(playerScoreUpdate);
      scoreCounter;
      
  }
  //   //COMPUTER WINNING CONDITIONS
  
  else if (
    (playerSelection === 'paper' && computerSelection === 'scissor')||
    (playerSelection === 'rock' && computerSelection === 'paper')||
    (playerSelection === 'scissor' && computerSelection === 'rock')
    )
    {
      compScore++;
      console.log(`Computer beats!`);
      console.log('Player: '+playerScore+' VS '+'Computer:'+compScore);
      computerScoreUpdate.textContent = compScore;
      computerScoreDiplay.appendChild(computerScoreUpdate);
    } 
  else {
    console.log('Your code is not working!')
  }
}

//decide who wins and announce the winner

function checkWinner (){
  if (compScore>playerScore) {
    console.log('Computer wins the game!🏆');
  }else {
    console.log('Player wins the game!🏆');
  }
}

function scoreCounter (compScore){
  if (compScore === 5) {
    console.log('You lose!')
  }
}

//(for) repeat the game until (break) one of the player gets 5 points first (if)

// function playGame () {
//     for (let i = 0; ; i++){
//       console.log(playRound(playerSelection(), computerSelection()));
//       if (compScore === 5 || playerScore === 5) {
//             console.log (`Computer scored ${compScore} and Player scored ${playerScore}!`);
//           console.log(checkWinner ());
//   break
//   }
// }
// }
