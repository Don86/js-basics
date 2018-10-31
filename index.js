// Init variables
// Note: a var (or const?) declared in a global scope is accessible by any function. 
// Don't know if there are any access-modifiers. For now, just be disciplined about global and private vars.
var userScore = 0;
var compScore = 0;

// underscore defines DOM elements
// Caching the DOM:
// "caching" in general means "storing something for short-term future use"
// Caching the DOM just means storing the resuts of .getElementById in JS variables.
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_span = document.getElementById("score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


function getComputerChoice() {
    // Define array of choices (strings, looks like)
    const choices = ["r", "p", "s"];
    // pick random choice with the help of the .random method, from the `Math` library
    // note that Math.random() ~ U(0, 1)
    // Math.floor then rounds down to nearest integer
    const randomNumber = Math.floor(Math.random() * 3);

    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors"
}

function userWin(userChoice, computerChoice) {
    userScore++;
    result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You win!`;
}

function userLose(userChoice, computerChoice) {
    compScore++;
    result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You lose!`;
}

function userDraw(userChoice, computerChoice) {
    result_p.innerHTML = "Draw!";
}

function game(userChoice) {
    // prints var userChoice to the console
    const computerChoice = getComputerChoice();

    switch (userChoice + computerChoice) {
        // user win conditions
        case "rs":
        case "sp":
        case "pr":
        userWin(userChoice, computerChoice);
        break;

        // user loss conditions
        case "rp":
        case "sr":
        case "ps":
        userLose(userChoice, computerChoice);
        break;

        // draw conditions
        case "rr":
        case "ss":
        case "pp":
        userDraw(userChoice, computerChoice);
        break;
    }

    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
}

function main() {
    // Encapsulate all addEventListener methods in one function main()
    // not sure why
    rock_div.addEventListener('click', function() {
        game("r");
        //console.log("You clicked on rock.");
    })
    paper_div.addEventListener("click", function() {
        game("p");
        //console.log("You clicked on paper.");
    })
    scissors_div.addEventListener("click", function() {
        game("s");
        //console.log("You clicked on scissors.");
    })
}

// run main()
main();