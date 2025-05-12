

var buttons = document.querySelectorAll('.buttons button');
var resultDiv = document.querySelector('.result');
var choices = ['rock', 'paper', 'scissors'];
var playerScore = 0;
var computerScore = 0;
var finalResultDiv = document.querySelector(".final-result");


function setButtonsDisabled(disabled) {
    buttons.forEach(function(button) {
      button.disabled = disabled;
    });
  }
  
buttons.forEach(function(button) {
  button.addEventListener('click', () => {
    var userChoice = button.getAttribute('data-choice');
    play(userChoice);
  });
});

document.getElementById("reset").addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;
  document.querySelector('.player-score').textContent = "🧑 You: " + playerScore;
  document.querySelector('.computer-score').textContent = "💻 Computer: " + computerScore;
  resultDiv.textContent = 'Make your Move!';
  finalResultDiv.textContent = ''; 
  document.querySelector(".computer-display").textContent = "Computer picked: ❓";
  setButtonsDisabled(false); 
});

function play(userChoice) {

  if (playerScore >= 5 || computerScore >= 5) {
    return;
  }

  var random = Math.floor(Math.random() * 3);
  var computerChoice = choices[random];
  var result = '';
  var finalResult = '';

  document.querySelector(".computer-display").textContent = "Computer picked " + computerChoice;
  setTimeout(() => {
    document.querySelector(".computer-display").textContent = "Computer Choice: ❓";
  },1000);

  
  if (userChoice === 'rock' && computerChoice === 'scissors') {
    result = "🎉 You win!!! Rock breaks Scissors";
    playerScore++;
  } else if (userChoice === 'paper' && computerChoice === 'rock') { 
    result = "🎉 You win!!! Paper covers Rock";
    playerScore++;
  } else if (userChoice === 'scissors' && computerChoice === 'paper') {
    result = "🎉 You win!!! Scissors cuts Paper";
    playerScore++;
  } else if (computerChoice === 'paper' && userChoice === 'rock') {
    result = "😞 You lose. Paper covers Rock";
    computerScore++;
  } else if (computerChoice === 'rock' && userChoice === 'scissors') {
    result = "😞 You lose. Rock breaks Scissors";
    computerScore++;
  } else if (computerChoice === 'scissors' && userChoice === 'paper') {
    result = "😞 You lose. Scissors cuts Paper";
    computerScore++;
  } else {
    result = "🤝 It's a draw! Both chose " + userChoice;
  }

  
  resultDiv.textContent = result;
  setTimeout(() => {
    resultDiv.textContent = "Make your move!";  
 }, 1000);
 


  document.querySelector('.player-score').textContent = "🧑 You: " + playerScore;
  document.querySelector('.computer-score').textContent = "💻 Computer: " + computerScore;

  
  if (playerScore === 5) {
    finalResult = "🏆You win the game. 🎉 Click the reset button to play again.";
    finalResultDiv.textContent = finalResult;
    setButtonsDisabled(true); 
  } else if (computerScore === 5) {
    finalResult = "💻You lose the game. 😞 Click the reset button to try again.";
    finalResultDiv.textContent = finalResult;
    setButtonsDisabled(true); 
  }
}
