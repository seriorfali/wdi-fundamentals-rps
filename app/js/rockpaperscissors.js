////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    return move || getInput();
}

function getComputerMove(move) {
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    if ((playerMove === "rock" && computerMove === "scissors") || (playerMove === "scissors" && computerMove === "paper") || (playerMove === "paper" && computerMove === "rock")) {
        winner = "player";
    } else if ((computerMove === "rock" && playerMove === "scissors") || (computerMove === "scissors" && playerMove === "paper") || (computerMove === "paper" && playerMove === "rock")) {
        winner = "computer";
    } else {
        winner = "tie";
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors!");
    var playerWins = 0;
    var computerWins = 0;
    while (playerWins < 5 && computerWins < 5) {
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        var winner = getWinner(playerMove, computerMove);
        if (winner === "player") {
            playerWins ++;
            console.log("You win!");
        } else if (winner === "computer") {
            computerWins ++;
            console.log("Computer wins.");
        } else {
            console.log("It's a tie!");
        }
        console.log("You chose " + playerMove + ", while Computer chose " + computerMove + ".");
        console.log("The score is currently " + playerWins + " to " + computerWins + ".");
    }
    if (playerWins > computerWins) {
        console.log("Bravo! You win the game! Please play again.")
    } else {
        console.log("Computer wins the game. Please try again.")
    }
    return [playerWins, computerWins];
}

function playTo(x) {
    console.log("Let's play Rock, Paper, Scissors!");
    var playerWins = 0;
    var computerWins = 0;
    while (playerWins < x && computerWins < x) {
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        var winner = getWinner(playerMove, computerMove);
        if (winner === "player") {
            playerWins ++;
            console.log("You win!");
        } else if (winner === "computer") {
            computerWins ++;
            console.log("Computer wins.");
        } else {
            console.log("It's a tie!");
        }
        console.log("You chose " + playerMove + ", while Computer chose " + computerMove + ".");
        console.log("The score is currently " + playerWins + " to " + computerWins + ".");
    }
    if (playerWins > computerWins) {
        console.log("Bravo! You win the game! Please play again.")
    } else {
        console.log("Computer wins the game. Please try again.")
    }
    return [playerWins, computerWins];
}
    

playTo(7)