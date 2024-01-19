
function getComputerChoice() {
  const number = Math.random() * 3
  if (number > 2) {
    return 'Rock';
  } else if (number > 1) {
    return 'Paper';
  } else if (number > 0) {
    return 'Scissors';
  }
}

function getPlayerSelection() {
  return prompt('Rock Paper or Scissors?')
}

function playRound(playerSelection, computerSelection) {
  const player = playerSelection.toLowerCase()
  const computer = computerSelection.toLowerCase()
  if (player === computer) {
    console.log("It's a tie!")
    alert("It's a tie!")
    return playRound(getPlayerSelection(), getComputerChoice())
  }

  if (player === 'paper') {
    if (computer === 'rock') {
      return "You Win! Paper beats Rock"
    }
    if (computer === 'scissors') {
      return "You Lose! Scissors beats Paper"
    }
  }

  if (player === 'rock') {
    if (computer === 'paper') {
      return "You Lose! Paper beats Rock"
    }
    if (computer === 'scissors') {
      return "You Win! Rock beats Scissors"
    }
  }

  if (player === 'scissors') {
    if (computer === 'rock') {
      return "You Lose! Rock beats Scissors"
    }
    if (computer === 'paper') {
      return "You Win! Scissors beats Paper"
    }
  }
}

const playerSelection = getPlayerSelection();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));