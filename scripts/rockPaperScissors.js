function getComputerChoice() {
    const minCeiled = Math.ceil(1);
    const maxFloored = Math.floor(3);
    const randomNumber = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
    switch(randomNumber) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
  }

  function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a draw!";
    }
    if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win!";
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win!";
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win!";
    }
    else {
        return "You lose."
    }
  }
    
  playerSelection = prompt("Enter rock, paper, or scissors to play!");
  playerSelection = playerSelection.toLowerCase();
  computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));