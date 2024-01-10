let randomNumber = parseInt(Math.random()*100+1)

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
  submit.addEventListener('click', function(e){
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess)
  })
}


function validateGuess(guess){
  if(isNaN(guess)){
    alert(`Please give a valid number`)
  }else if(guess < 1){
    alert(`Please enter a more than 1`)
  }else if(guess > 100){
    alert(`Please enter a less than 100`)
  }else{
    prevGuess.push(guess)
    if(numGuess === 10){
      displayGuess(guess)
      displayMessage(`Game Over. Random a number ${randomNumber}`)
      endGame()
    }else{
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess){
  if(guess === randomNumber){
    displayMessage(`You guess right`)
  }else if(guess < randomNumber){
    displayMessage(`Number is Tooo Low`)
  }else if(guess > randomNumber){
    displayMessage(`Number is Tooo High`)
  }
}

function displayGuess(guess){
  userInput.value = ''
  guessSlot.innerHTML += `${guess}, `
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
  lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
  userInput.value = ''
  userInput.setAttribute('disabled', '')
  p.classList.add('button')
  p.innerHTML = `<h2 id="newGame">Start a new Game</h2>`;
  startOver.appendChild(p)
  playGame = false
  newGame()
}

function newGame(){
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click', function(e){
    
    randomNumber = parseInt(Math.random()*100+1)
    prevGuess = []
    numGuess = 1
    guessSlot.innerHTML = ''
    remaining.innerHTML = `${11 - numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p);
    
    playGame = true
  })
}




// // Generate a random number between 1 and 100 (inclusive)
// let randomNumber = parseInt(Math.random() * 100 + 1)

// // Select various elements from the HTML document using querySelector
// const submit = document.querySelector('#subt');
// const userInput = document.querySelector('#guessField');
// const guessSlot = document.querySelector('.guesses');
// const remaining = document.querySelector('.lastResult');
// const lowOrHi = document.querySelector('.lowOrHi');
// const startOver = document.querySelector('.resultParas');

// // Create a new paragraph element
// const p = document.createElement('p');

// // Initialize arrays and variables to keep track of previous guesses and the number of guesses
// let prevGuess = [];
// let numGuess = 1;

// // Boolean flag to determine whether the game is still in progress
// let playGame = true;

// // Check if the game is still in progress before setting up the event listener
// if (playGame) {
//   // Add a click event listener to the submit button
//   submit.addEventListener('click', function (e) {
//     e.preventDefault();
//     // Get the user's guess from the input field
//     const guess = parseInt(userInput.value);
//     console.log(guess);
//     // Validate the user's guess
//     validateGuess(guess)
//   })
// }

// // Function to validate the user's guess
// function validateGuess(guess) {
//   // Check if the guess is not a valid number
//   if (isNaN(guess)) {
//     alert(`Please give a valid number`);
//   }
//   // Check if the guess is less than 1
//   else if (guess < 1) {
//     alert(`Please enter a number greater than 1`);
//   }
//   // Check if the guess is greater than 100
//   else if (guess > 100) {
//     alert(`Please enter a number less than 100`);
//   } else {
//     // If the guess is valid, add it to the array of previous guesses
//     prevGuess.push(guess)
//     // Check if the maximum number of guesses (10) has been reached
//     if (numGuess === 10) {
//       displayGuess(guess);
//       displayMessage(`Game Over. The correct number was ${randomNumber}`);
//       // End the game
//       endGame();
//     } else {
//       // If there are remaining guesses, display the current guess and check it
//       displayGuess(guess);
//       checkGuess(guess);
//     }
//   }
// }

// // Function to check the user's guess against the random number
// function checkGuess(guess) {
//   // Compare the guess with the random number and display a message
//   if (guess === randomNumber) {
//     displayMessage(`You guessed right!`);
//   } else if (guess < randomNumber) {
//     displayMessage(`Number is too low`);
//   } else if (guess > randomNumber) {
//     displayMessage(`Number is too high`);
//   }
// }

// // Function to display the user's guess and update the remaining guesses count
// function displayGuess(guess) {
//   // Clear the input field
//   userInput.value = '';
//   // Display the current guess in the guesses slot
//   guessSlot.innerHTML += `${guess}, `;
//   // Increment the number of guesses
//   numGuess++;
//   // Update the remaining guesses count
//   remaining.innerHTML = `${11 - numGuess}`;
// }

// // Function to display a message in the lowOrHi element
// function displayMessage(message) {
//   lowOrHi.innerHTML = `<h2>${message}</h2>`;
// }

// // Function to end the game
// function endGame() {
//   // Disable the input field
//   userInput.value = '';
//   userInput.setAttribute('disabled', '');
//   // Create a new paragraph with a "Start a new Game" button
//   p.classList.add('button');
//   p.innerHTML = `<h2 id="newGame">Start a new Game</h2>`;
//   // Append the paragraph to the startOver element
//   startOver.appendChild(p);
//   // Update the playGame flag to false
//   playGame = false;
//   // Call the newGame function to set up a new game when the button is clicked
//   newGame();
// }

// // Function to start a new game
// function newGame() {
//   // Select the "Start a new Game" button
//   const newGameButton = document.querySelector('#newGame');
//   // Add a click event listener to the button
//   newGameButton.addEventListener('click', function (e) {
//     // Generate a new random number and reset variables and arrays
//     randomNumber = parseInt(Math.random() * 100 + 1);
//     prevGuess = [];
//     numGuess = 1;
//     // Clear the guesses slot and update the remaining guesses count
//     guessSlot.innerHTML = '';
//     remaining.innerHTML = `${11 - numGuess}`;
//     // Enable the input field
//     userInput.removeAttribute('disabled');
//     // Remove the "Start a new Game" button
//     startOver.removeChild(p);
//     // Update the playGame flag to true
//     playGame = true;
//   })
// }
