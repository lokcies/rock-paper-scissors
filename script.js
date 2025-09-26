// console.log("Hello World!");

/* Create a new function named getComputerChoice
- Randomly return one of the following string values: "rock", "papers", "scissors".
*/
function getComputerChoice() {

    /*
    // toFixed function to round off numbers to 2 decimal places
    let handNumbered = Math.random().toFixed(2);
    //console.log(handNumbered);

    if (handNumbered <= 0.33) {
        let hand = "rock";
        return hand;
    } else if (handNumbered > 0.33 && handNumbered <= 0.67) {
        let hand = "paper";
        return hand;
    } else {
        let hand = "scissors";
        return hand;
    } */

    let handValue = Math.floor((Math.random()*3)+1)
    // console.log(handValue) //test output
    if (handValue <= 1) {
        let cpuHand = "rock";
        return cpuHand;
    } else if (handValue > 1 && handValue <= 2) {
        let cpuHand = "paper";
        return cpuHand;
    } else {
        let cpuHand = "scissors";
        return cpuHand;
    }
}

/* Create a new function named getHumanChoice
- This function will return one of the valid choices depending on what the user inputs
*/
let getHumanChoice = () => {
    let input = prompt("Input rock/paper/scissors");
    return input;
};

let userHand = getHumanChoice();

// Declare the players score variables and initialize score to 0
let humanScore = 0;
let computerScore = 0;

// Create a function named playRound with humanChoice and computerChoice as parameters
let playRound = (humanChoice, computerChoice) => {
    // Ignore this segment, only used for testing the conditions
    /*
    computerChoice = "rock"
    computerChoice = "paper"
    computerChoice = "scissors"
    */

    if (humanChoice.toLowerCase() === computerChoice) {
        console.log("Human's hand: " + humanChoice);
        console.log("CPU's hand: " + computerChoice);
        console.log("This round is a tie");

        console.log("*******SCORE*******")
        console.log("Human Score: " + humanScore);
        console.log("Computer Score: " + computerScore);        
    } else if (humanChoice.toLowerCase() === "rock" && computerChoice === "paper") {
        console.log("Human's hand: " + humanChoice);
        console.log("CPU's hand: " + computerChoice);
        console.log("CPU wins!");
        computerScore++;

        console.log("*******SCORE*******")
        console.log("Human Score: " + humanScore);
        console.log("Computer Score: " + computerScore);
        // return computerScore;
    } else if (humanChoice.toLowerCase() === "rock" && computerChoice === "scissors") {
        console.log("Human's hand: " + humanChoice);
        console.log("CPU's hand: " + computerChoice);
        console.log("Human wins!");
        humanScore++;

        console.log("*******SCORE*******")
        console.log("Human Score: " + humanScore);
        console.log("Computer Score: " + computerScore);
        // return humanScore;
    } else if (humanChoice.toLowerCase() === "paper" && computerChoice === "rock") {
        console.log("Human's hand: " + humanChoice);
        console.log("CPU's hand: " + computerChoice);
        console.log("Human wins!");
        humanScore++;

        console.log("*******SCORE*******")
        console.log("Human Score: " + humanScore);
        console.log("Computer Score: " + computerScore);
        // return humanScore;
    } else if (humanChoice.toLowerCase() === "paper" && computerChoice === "scissors") {
        console.log("Human's hand: " + humanChoice);
        console.log("CPU's hand: " + computerChoice);
        console.log("CPU wins!");
        computerScore++;

        console.log("*******SCORE*******")
        console.log("Human Score: " + humanScore);
        console.log("Computer Score: " + computerScore);
        // return computerScore;
    } else if (humanChoice.toLowerCase() === "scissors" && computerChoice === "rock") {
        console.log("Human's hand: " + humanChoice);
        console.log("CPU's hand: " + computerChoice);
        console.log("CPU wins!");
        computerScore++;

        console.log("*******SCORE*******")
        console.log("Human Score: " + humanScore);
        console.log("Computer Score: " + computerScore);
        // return computerScore;
    } else { // Human is scissors and CPU is paper
        console.log("Human's hand: " + humanChoice);
        console.log("CPU's hand: " + computerChoice);
        console.log("Human wins!");
        humanScore++;

        console.log("*******SCORE*******")
        console.log("Human Score: " + humanScore);
        console.log("Computer Score: " + computerScore);
        // return humanScore;
    }
};

//playRound(userHand, getComputerChoice());

/*
Write a function called playGame that calls playRound to:
- play 5 rounds
- keeps track of the scores
 - declares a winner at the end
*/

function playGame (humanScore, computerScore) {
    //round = playRound(userHand, getComputerChoice());

    for (let i=0; i<5; i++) {
        console.log("\nRound number: " + (parseInt(i)+1));
        playRound(userHand, getComputerChoice());
        /*
        console.log("*******SCORE*******")
        console.log("Human Score: " + humanScore);
        console.log("Computer Score: " + computerScore);
        */
    }
}

playGame(humanScore, computerScore);