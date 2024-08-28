let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
    submit.addEventListener("click", function (p) {
        p.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);

        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Please enter a valid number");
    } else if (guess < 1) {
        alert("Please enter a number more than one");
    } else if (guess > 100) {
        alert("Please enter a valid number between 1 and 100");
    } else {
        prevGuess.push(guess); // Corrected usage of push
        if (numGuess === 10) {
            displayGuess(guess);
            displayMessage(`Game over. The random number was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`You guessed right! The number was ${guess}`);
        endGame();
    } else if (guess < randomNumber) {
        displayMessage(`Too low, guess higher`);
    } else if (guess > randomNumber) {
        displayMessage(`Too high, guess lower`);
    }
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function displayGuess(guess) {
    userInput.value = ``;
    guessSlot.innerHTML += `${guess} `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

function endGame() {
    

    if(userInput.value <= 0) {
       // userInput.value = "";
    userInput.setAttribute("disabled", "");
    p.classList.add("button");
    p.innerHTML = `<h1 id="newGame">Start new game</h1>`;
    startOver[0].appendChild(p); // Use startOver as it's an array-like NodeList
    playGame = false;
    p.addEventListener("click", function () {
        newGame(); // Restart the game logic
    });
    }
}

function newGame() {
    const newGameButton = document.querySelector("#newGame");
    newGameButton.addEventListener("click", (e) => {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = "";
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute("disabled");
        startOver.remove(p);
        playGame = true;
    });
}