var options = ['rock', 'paper', 'scissors'];

// random rock paper or scissors for computer
function computerPlay () {
     var computerChoice = options[Math.floor(Math.random()*options.length)];
     return computerChoice;
    };

// function that plays a round and returns 1 for a human win, -1 for a computer win, and 0 for a tie
function playRound(playerSelection, computerSelection) {
  var computerSelection = computerPlay();
  var playerSelection = prompt('What do you choose?').toLowerCase()
  if(playerSelection === computerSelection) {
    return 0
    }
  if(options.indexOf(playerSelection) === -1) {
    return 'Sorry, ' + playerSelection + ' is not a valid value. Please try rock, paper or scissors.'
  }
  if(playerSelection === 'rock') {
      if(computerSelection === 'paper') {
        return -1
      } else {return 1} 
    }
  if(playerSelection === 'paper') {
      if(computerSelection === 'scissors') {
        return -1
      } else {
        return 1
      }
  }
  if(playerSelection === 'scissors') {
      if(computerSelection === 'rock') {
        return -1
      } else {
        return 1
      }
   }
}

let computerScore = 0;
let playerScore = 0;

function score() {
  let outcome = playRound();
  if (outcome === 1) {playerScore++ && console.log("Player wins")}
  if (outcome === -1) {computerScore++ && console.log("Computer wins")}
  if (outcome === 0) console.log("Tied round - no change")
}

function game() {
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
}
game();