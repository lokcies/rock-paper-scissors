console.log("Hello World!");

/* Create a new functikon named getComputerChoice
- Randomly return one of the following string values: "rock", "papers", "scissors".
*/
function getComputerChoice() {
    // toFixed function to round off numbers to 2 decimal places
    let handNumbered = Math.random().toFixed(2);
    console.log(handNumbered);
}

getComputerChoice();
