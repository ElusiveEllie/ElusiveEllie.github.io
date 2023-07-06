// Player makes a choice. Prints error message if choice is invalid.
const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    console.log("You must enter 'Rock', 'Paper', or 'Scissors'.");
    return "invalid option";
  }
};

// Generates computer's choice.
function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);
  switch (computerChoice) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

// Takes both entries and pits them against each other, deciding the victor.
function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "The game is a draw.";
  } else if (userChoice === "bomb") {
    return "Bomb deployed. User wins!";
  } else if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Paper beats Rock. Computer wins!";
    } else {
      return "Rock beats Scissors. User wins!";
    }
  } else if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "Scissors beats Paper. Computer wins!";
    } else {
      return "Paper beats Rock. User wins!";
    }
  } else if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "Rock beats Scissors. Computer wins!";
    } else {
      return "Scissors beats Paper. User wins!";
    }
  } else {
    return "Game is invalid.";
  }
}

// Begins the game!
function playGame(userInput) {
  let userChoice = getUserChoice(userInput);
  let computerChoice = getComputerChoice();
  console.log(
    `User chooses ${userChoice}. Computer chooses ${computerChoice}. Beginning match!`
  );
  console.log(determineWinner(userChoice, computerChoice));
}

playGame("Rock");
