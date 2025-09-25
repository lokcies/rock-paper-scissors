console.log("Hello World!");

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
    console.log(handValue) //test output
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
console.log(getComputerChoice());

/* Create a new function named getHumanChoice
- This function will return one of the valid choices depending on what the user inputs
*/
let getHumanChoice = () => {
    let input = prompt("Input rock/paper/scissors");
    return input;
};

let userHand = getHumanChoice();
console.log(userHand);

// Declare the players score variables 
let humanScore = 0;
let computerScore = 0;

/*
let testOneToThree = Math.floor((Math.random()*3)+1);
console.log(testOneToThree);
*/