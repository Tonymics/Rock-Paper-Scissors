console.log("Hello World");

function getComputerChoice() {
  let computerPick = Math.floor(Math.random() * 3) + 1;

  if (computerPick === 1) {
    return "rock";
  } else if (computerPick === 2) {
    return "paper";
  } else if (computerPick === 3) {
    return "scissors";
  }
}

// console.log(getComputerChoice());

function getHumanChoice() {
  let humanPick = prompt(`Enter! 'Rock', 'Paper', or 'Scissors'`);

  if (humanPick.toLowerCase() === "rock") {
    return "rock";
  } else if (humanPick.toLowerCase() === "paper") {
    return "paper";
  } else if (humanPick.toLowerCase() === "scissors") {
    return "scissors";
  } else {
    console.log("❌ Invalid input. Defaulting to rock.");
    return "rock";
  }
}

// console.log(getHumanChoice());



function playGame() {
  let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  let humanChoiceCasing = humanChoice.toLowerCase();
  let computerChoiceCasing = computerChoice.toLowerCase();
   console.log(humanChoiceCasing + " " + computerChoiceCasing);

  if (humanChoiceCasing === computerChoiceCasing) {
    console.log(`It's a tie! You both picked ${humanChoiceCasing}`);
  } else if (humanChoiceCasing === "rock" && computerChoiceCasing === "paper") {
    console.log(`You lose! ${computerChoiceCasing} beats ${humanChoiceCasing}`);
    computerScore = computerScore + 1;
  } else if (
    humanChoiceCasing === "rock" &&
    computerChoiceCasing === "scissors"
  ) {
    console.log(`You win! ${humanChoiceCasing} beats ${computerChoiceCasing}`);
    humanScore = humanScore + 1;
  } else if (humanChoiceCasing === "paper" && computerChoiceCasing === "rock") {
    console.log(`You win! ${humanChoiceCasing} beats ${computerChoiceCasing}`);
    humanScore = humanScore + 1;
  } else if (
    humanChoiceCasing === "paper" &&
    computerChoiceCasing === "scissors"
  ) {
    console.log(`You lose! ${computerChoiceCasing} beats ${humanChoiceCasing}`);
    computerScore = computerScore + 1;
  } else if (
    humanChoiceCasing === "scissors" &&
    computerChoiceCasing === "rock"
  ) {
    console.log(`You lose! ${computerChoiceCasing} beats ${humanChoiceCasing}`);
    computerScore = computerScore + 1;
  } else if (
    humanChoiceCasing === "scissors" &&
    computerChoiceCasing === "paper"
  ) {
    console.log(`You win! ${humanChoiceCasing} beats ${computerChoiceCasing}`);
    humanScore = humanScore + 1;
  }
}


// playRound(getHumanChoice(), getComputerChoice());
// playRound(getHumanChoice(), getComputerChoice());
// playRound(getHumanChoice(), getComputerChoice());
// playRound(getHumanChoice(), getComputerChoice());
// playRound(getHumanChoice(), getComputerChoice());

for (let i = 1; i <= 5; i++) {
    console.log(`--- Round ${i} ---`);
    playRound(getHumanChoice(), getComputerChoice());
  }

console.log(`Final Score → You: ${humanScore} | Computer: ${computerScore}`);

if (humanScore > computerScore) {
  console.log("🎉 You win the game!");
} else if (computerScore > humanScore) {
  console.log("💀 You lost the game!");
} else {
  console.log("🤝 It's a tie game!");
}
}

playGame();



