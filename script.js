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

const playerScoreWatch = document.querySelector('#playerScore');
const playerScoreUpdate = document.querySelector('#playerScoreUpdate');

const computerScoreDiplay = document.querySelector('#computerScore');
const computerScoreUpdate = document.querySelector('#computerScoreUpdate');


const panel = document.querySelector('#panel');
const announcementArea = document.querySelector('#announcementArea');

function playRound (playerSelection, computerSelection) {

  //TIE CONDITION
  if (computerSelection === playerSelection) {
    console.log(`It's a tie!`);
    announcementArea.textContent = 'Tie!';
    panel.appendChild(announcementArea);
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
      playerScoreWatch.appendChild(playerScoreUpdate);
      announcementArea.textContent = `Computer chose ${computerSelection}. Player +1 score!`;
      panel.appendChild(announcementArea);
    }
  //   //COMPUTER WINNING CONDITIONS
  
  else if (
    (playerSelection === 'paper' && computerSelection === 'scissor')||
    (playerSelection === 'rock' && computerSelection === 'paper')||
    (playerSelection === 'scissor' && computerSelection === 'rock')
    )
    {
      compScore++;
      announcementArea.textContent = `Computer chose ${computerSelection}. Computer +1 score!`;
      panel.appendChild(announcementArea);
      console.log(`Computer beats!`);
      console.log('Player: '+playerScore+' VS '+'Computer:'+compScore);
      computerScoreUpdate.textContent = compScore;
      computerScoreDiplay.appendChild(computerScoreUpdate);
    } 
  else {
    console.log('Your code is not working!')
  }
  checkWinner();
}

//decide who wins and announce the winner


function checkWinner (){
  if (compScore===5) {
    announcementArea.textContent = 'Computer wins the game!🏆';
    panel.appendChild(announcementArea);
    selectionBtns.forEach(button => {
      button.removeEventListener('click', getPlayerChoice);
    });  
  }else if ( playerScore===5){
    announcementArea.textContent = 'Player wins the game!🏆';
    panel.appendChild(announcementArea);
    selectionBtns.forEach(button => {
      button.removeEventListener('click', getPlayerChoice);
    });
  
  }
}

const restart = document.querySelector('#restart');
restart.addEventListener('click',() => location.reload());
