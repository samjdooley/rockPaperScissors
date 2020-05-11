var options = ['rock', 'paper', 'scissors'];
let computerScore = 0;
let playerScore = 0;


// random rock paper or scissors for computer
function computerPlay () {
     var computerChoice = options[Math.floor(Math.random()*options.length)];
     return computerChoice;
    };

// function that plays a round and returns 1 for a human win, -1 for a computer win, and 0 for a tie
function playRound(playerSelection, computerSelection) {
  if(playerSelection === computerSelection) {
    return "Draw."
    }
  if(options.indexOf(playerSelection) === -1) {
    return 'Sorry, ' + playerSelection + ' is not a valid value. Please try rock, paper or scissors.'
  }
  if(playerSelection === 'rock') {
      if(computerSelection === 'paper') {
        return "Computer win"
      } else {return "Player win"} 
    }
  if(playerSelection === 'paper') {
      if(computerSelection === 'scissors') {
        return "Computer win"
      } else {
        return "Player win"
      }
  }
  if(playerSelection === 'scissors') {
      if(computerSelection === 'rock') {
        return "Computer win"
      } else {
        return "Player win"
      }
   }
}


let paragraph = document.createElement("p");
let winner = document.createElement('h3');
let winnerDOM = document.getElementById('results');
let choiceContainer = document.getElementById("choice-container")
let results = document.getElementById('results');
let buttons = document.querySelectorAll(".choice");
let reset = document.querySelector('#reset');
let playerScoreDOM = document.getElementById('player-score');
let computerScoreDOM = document.getElementById('computer-score');
playerScoreDOM.textContent = `Player score: ${playerScore}`;
computerScoreDOM.textContent = `Computer score: ${computerScore}`;


buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let computerSelection = computerPlay();
    let result = playRound(e.target.id, computerSelection)
    console.log(result);
    var resultDOM = paragraph
    resultDOM.textContent += `Result: ${result} `
    choiceContainer.appendChild(resultDOM);
    if (result === 'Computer win') {
      computerScore++
      computerScoreDOM.textContent = `Computer score: ${computerScore}`;
    }
    if (result === 'Player win') {
      playerScore++
      playerScoreDOM.textContent = `Player score: ${playerScore}`;
    }
    if (playerScore === 5 || computerScore === 5) {
      if(playerScore === 5) { 
        resultDOM.textContent += 'You are the winner'
        playerScore = 0;
        computerScore = 0;
        computerScoreDOM.textContent = `Computer score: ${computerScore}`;
        playerScoreDOM.textContent = `Player score: ${playerScore}`;
        resultDOM.textContent = ''
    }
      if(computerScore === 5) {
        alert("Computer is the winner")
        playerScore = 0;
        computerScore = 0;
        computerScoreDOM.textContent = `Computer score: ${computerScore}`;
        playerScoreDOM.textContent = `Player score: ${playerScore}`;
        resultDOM.textContent = ''
    }
    } 
  })
})



// document.querySelectorAll('.choice').forEach(item => {
//   item.addEventListener('click', event => {
//     alert('hi')
//   })
// })

function score() {
  let outcome = playRound();
  if (outcome === 1) {playerScore++ && console.log("Player wins")}
  if (outcome === -1) {computerScore++ && console.log("Computer wins")}
  if (outcome === 0) console.log("Tied round - no change")
}

/*function getPlayerChoice(e) {
  document.getElementsByClassName("choice").addEventListener("click")
} */

/* game() {
  console.log(`Beginning a game of Rock, Paper, Scissors. Please choose from the 3 options to defeat the computer in 5 games.`)
  for (var i = 1; i <= 5; i++) {
    console.log(`Round ${i}`)
    console.log(`Player Score = ${playerScore}`)
    console.log(`Computer Score = ${computerScore}`)
    score();
  } console.log(`Final score: 
  Computer (${computerScore}) Player (${playerScore})`)
  if(playerScore > computerScore) {return "Player wins!"} 
  if (computerScore > playerScore) {return "Computer wins!"}
  if (computerScore === playerScore) {return "Final result is a tie"}
} */
