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
    const resultDiv = document.querySelector('.result');

    computerSelection = getComputerChoice();

    rockButton.addEventListener('click', ()=>{
        resultDiv.textContent = playRound('rock',computerSelection) + displayScore();
    });
    paperButton.addEventListener('click',()=>{
        resultDiv.textContent = playRound('paper',computerSelection) + displayScore();
    });
    scissorsButton.addEventListener('click',()=>{
        resultDiv.textContent = playRound('scissors',computerSelection) + displayScore();
    });
    
}

function displayScore(){
    let scoreMessage;
    if (playerScore === 5 || computerScore === 5){
        if (playerScore === computerScore){
            scoreMessage = ` It's a draw, ${playerScore} and ${computerScore}.`;
        }
        else if (playerScore > computerScore) {
            scoreMessage = ` You win with a score of ${playerScore} against ${computerScore}!`;
        }
        else {
            scoreMessage = ` You lose with a score of ${playerScore} against ${computerScore}.`;
        }
        playerScore = 0;
        computerScore = 0;
    }
    else{
        scoreMessage = ` Player ${playerScore}: Computer ${computerScore}`
    };

    return scoreMessage;
}
let playerScore = 0;
let computerScore = 0;



playGame()