
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

