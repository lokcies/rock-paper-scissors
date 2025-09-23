console.log("Hello World!");

/* Create a new functikon named getComputerChoice
- Randomly return one of the following string values: "rock", "papers", "scissors".
*/
function getComputerChoice() {
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
    }
    console.log(hand);
}

console.log(getComputerChoice());
