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
    if (playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "paper" && computerSelection === "rock" ||
        playerSelection === "scissors" && computerSelection === "paper") {
        ++playerScore;
        return "You win!";
    }

    else {
        ++computerScore;
        return "You lose."
    }
  }

  function playGame(numberOfRounds) {
    let playerScore = 0;
    let computerScore = 0;
    while (numberOfRounds != 0) {
    playerSelection = prompt("Enter rock, paper, or scissors to play!");
    playerSelection = playerSelection.toLowerCase();
    computerSelection = getComputerChoice();

    console.log(playRound(playerSelection,computerSelection));
    --numberOfRounds;
    }
    if (playerScore > computerScore) {
        console.log(`You win with a score of ${playerScore}!`)
    }
    else {
        console.log(`You lose with a score of ${playerScore}.`)
    }
  }

playGame(5)