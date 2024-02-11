function getComputerChoice() {
    const minCeiled = Math.ceil(1);
    const maxFloored = Math.floor(3);
    const randomNumber = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled)
    switch(randomNumber) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
    }
  }
  
