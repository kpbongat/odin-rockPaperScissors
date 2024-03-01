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
        return `You win, since ${playerSelection} beats ${computerSelection}!`;
    }

    else {
        ++computerScore;
        return `You lose, ${computerSelection} beats ${playerSelection}.`
    }
  }

  function playGame() {
    const rockButton = document.querySelector('.rock');
    const paperButton = document.querySelector('.paper');
    const scissorsButton = document.querySelector('.scissors');

    rockButton.addEventListener('click',playRound('rock',computerSelection))
    paperButton.addEventListener('click',playRound('paper',computerSelection))
    scissorsButton.addEventListener('click',playRound('scissors',computerSelection))

    computerSelection = getComputerChoice();

    console.log(playRound(playerSelection,computerSelection));

    
    if (playerScore === computerScore){
        console.log(`It's a draw, ${playerScore} and ${computerScore}.`)
    }
    else if (playerScore > computerScore) {
        console.log(`You win with a score of ${playerScore} against ${computerScore}!`)
    }
    else {
        console.log(`You lose with a score of ${playerScore} against ${computerScore}.`)
    }
}

let playerScore = 0;
let computerScore = 0;



playGame()