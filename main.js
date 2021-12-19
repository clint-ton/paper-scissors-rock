const moves = ['paper', 'scissors', 'rock'];
const playerScoreSquares = [null, 'p1', 'p2', 'p3']
const computerScoreSquares = [null, 'c1', 'c2', 'c3']
let playerScore = 0;
let computerScore = 0;

const refreshBtn = document.createElement('button');
refreshBtn.textContent = 'Play Again';
refreshBtn.classList.add('refresh')

const body = document.querySelector('body');
const resultEle = document.querySelector('.results');

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function paperPlay() {
    updateGame(playRound(computerPlay(), 'paper'));
}

function scissorsPlay() {
    updateGame(playRound(computerPlay(), 'scissors'));
}

function rockPlay() {
    updateGame(playRound(computerPlay(), 'rock'));
}
function computerPlay() {
    return moves[getRandomInt(0, 3)];
}

function playRound (computerMove, playerMove){
    if (computerMove == 'paper') {
        switch (playerMove) {
            case 'paper':
                result = 'Draw.';
                break;
            case 'scissors':
                result = 'Win!';
                break;
            case 'rock':
                result = 'Lose.';
                break;
        } 
    } else if (computerMove == 'scissors') {
        switch (playerMove) {
            case 'paper':
                result = 'Lose.';
                break;
            case 'scissors':
                result = 'Draw.';
                break;
            case 'rock':
                result = 'Win!';
                break;
        }
    } else if (computerMove = 'rock') {
        switch (playerMove) {
            case 'paper':
                result = 'Win!';
                break;
            case 'scissors':
                result = 'Lose.';
                break;
            case 'rock':
                result = 'Draw.';
                break;
        }
    }
    return result;
}

function updateGame(result) {
    const h1 = document.querySelector('h1');
    h1.textContent = result;

    if (result == 'Win!') {
        playerScore++;
        let id = playerScoreSquares[playerScore];
        const square = document.querySelector(`.${id}`);
        square.classList.add('ticked-box');
    } else if (result == 'Lose.') {
        computerScore++;
        let id = computerScoreSquares[computerScore];
        const square = document.querySelector(`.${id}`);
        square.classList.add('crossed-box');
    }

    if (playerScore > 2) {
        h1.textContent = 'Game Over\n You win!';
        body.insertBefore(refreshBtn, resultEle);
        unbindButtons();

    } else if ( computerScore > 2) {
        h1.textContent = 'Game Over\n You lose.'
        body.insertBefore(refreshBtn, resultEle);
        unbindButtons();

    }
}

function unbindButtons() {
    paper.removeEventListener('click', paperPlay);
    scissors.removeEventListener('click', scissorsPlay);
    rock.removeEventListener('click', rockPlay);
}
const paper = document.getElementById('paper');
paper.addEventListener ('click', paperPlay);

const scissors = document.getElementById('scissors');
scissors.addEventListener ('click', scissorsPlay);

const rock = document.getElementById('rock');
rock.addEventListener ('click', rockPlay);

refreshBtn.addEventListener ('click', () => {
    location.reload();
})