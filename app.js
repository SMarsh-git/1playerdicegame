const roll = document.getElementById("roll"); 
const score = document.getElementById("score");
const dice = document.getElementById("dice");
let player1 = 0

roll.addEventListener("click", () => {
    roll.textContent = "Roll Again"; // Our prompt to roll
    let myRoll = Math.ceil(Math.random() *6); // Our randomiser for our roll
    dice.src = `./images/d${myRoll}.png`  // img location of our dice goes here
    player1 += myRoll; // Score counter
    score.textContent = player1; // Projects/tallies score 
    if(myRoll === 1) { // Our conditional for 1 === you lose
        score.textContent = `You lose!`;
        player1 = 0;
        roll.textContent = `Try again?`;
    } else {
        if (player1 >= 20){
            score.textContent = `You win!`;
            player1 = 0;
            roll.textContent = `Play again?`

        }
    }
})