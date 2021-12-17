const moves = ['paper', 'scissors', 'rock'];


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function computerPlay() {
    return moves[getRandomInt(0, 3)];
}

function playRound (computerMove, playerMove){
    if (computerMove == 'paper') {
        switch (playerMove) {
            case 'paper':
                result = 'draw';
                break;
            case 'scissors':
                result = 'player';
                break;
            case 'rock':
                result = 'computer';
                break;
        } 
    } else if (computerMove == 'scissors') {
        switch (playerMove) {
            case 'paper':
                result = 'computer';
                break;
            case 'scissors':
                result = 'draw';
                break;
            case 'rock':
                result = 'player';
                break;
        }
    } else if (computerMove = 'rock') {
        switch (playerMove) {
            case 'paper':
                result = 'player';
                break;
            case 'scissors':
                result = 'computer';
                break;
            case 'rock':
                result = 'draw';
                break;
        }
    }
    return result;
}

function game () {
    playerScore = 0;
    computerScore = 0;


    while (playerScore < 3 && computerScore < 3) {
        let playerMove = prompt('What move would you like to make?')
        let result = playRound(computerPlay(), playerMove);
        if (result == 'player') {
            playerScore++;
        } else if (result == 'computer') {
            computerScore++;
        }
        let scoreString = `Player :${playerScore} Computer ${computerScore}`;
        console.log(scoreString);

    }


}

game();