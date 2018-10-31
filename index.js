//Init variables
const userScore = 0;
const compScore = 0;

// underscore defines DOM elements
// Caching the DOM:
// "caching" in general means "storing something for short-term future use"
// Caching the DOM just means storing the resuts of .getElementById in JS variables.
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_span = document.getElementById("score-board");
const result_div = document.querySelector(".result");
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


function game(userChoice) {
    // prints var userChoice to the console
    const computerChoice = getComputerChoice();
    console.log("computer choice = "+computerChoice)
    console.log("user option = "+userChoice)
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