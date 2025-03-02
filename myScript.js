// score and game system
let playerScore = 0;
let computerScore = 0;
let roundWinner = '';

// sounds

let soundIntro = new Audio('/sounds/AronaIntro.ogg');
let soundAronaWinRound = new Audio('/sounds/AronaLala.ogg');
let soundAronaLoseRound = new Audio('/sounds/AronaHya.ogg');

soundIntro.play();

function getComputerChoice(){
    const result = Math.floor(Math.random() * 3);

    if(result === 0){
        console.log("Arona plays Rock!");
        return "Rock";
    } else if (result === 1){
        console.log("Arona plays Paper!");
        return "Paper"
    } else if (result === 2) {
        console.log("Arona plays Scissors!");
        return "Scissors"
    }
}

function playRound(playerChoice, computerChoice){

    if(playerChoice === computerChoice){
        roundWinner = 'draw'
    }

    else if(playerChoice == "Rock"){
        if(computerChoice == "Scissors"){
            roundWinner = 'sensei';
            playerScore++;

        }else{
            roundWinner = 'arona';
            computerScore++;
        }

    }

    else if(playerChoice == "Paper"){
        if(computerChoice == "Rock"){
            roundWinner = 'sensei';
            playerScore++;
        }else{
            roundWinner = 'arona';
            computerScore++;
        }

    }

    else if(playerChoice == "Scissors"){
        if(computerChoice == "Paper"){
            roundWinner = 'sensei';
            playerScore++;
        }else{
            roundWinner = 'arona';
            computerScore++;
        }

    }
}

// game UI

const roundMessage = document.getElementById('roundMessage');
const aronaChoice = document.getElementById('aronaChoice');
const senseiChoice = document.getElementById('senseiChoice');
const aronaScore = document.getElementById('aronaScore');
const senseiScore = document.getElementById('senseiScore');

const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');

rockBtn.addEventListener('click', () => handleClick('Rock'))
paperBtn.addEventListener('click', () => handleClick('Paper'))
scissorsBtn.addEventListener('click', () => handleClick('Scissors'))

function handleClick(playerChoice){

    if(playerScore === 5 || computerScore === 5){
        gameOver();
        return;
    }

    const computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);
    updateChoices(playerChoice, computerChoice);
    roundScore();

    if(playerScore === 5 || computerScore === 5){
        gameOver();
        return;
    }
}

function updateChoices(playerChoice, computerChoice){
    aronaChoice.textContent = `Arona plays ${computerChoice}`;
    senseiChoice.textContent = `Sensei plays ${playerChoice}`;
}

function roundScore(){
    if(roundWinner == 'draw'){
        roundMessage.textContent = "Same choices, it's a draw!"
    } 
    
    else if(roundWinner === 'sensei'){
        roundMessage.textContent = "Sensei won this round!"
    }

    else if(roundWinner === 'arona'){
        roundMessage.textContent = "Arona won this round!"
    }

    aronaScore.textContent = `Arona's score: ${computerScore}`;
    senseiScore.textContent = `Sensei's score: ${playerScore}`;
}

function gameOver(){
    if(playerScore === 5){
        roundMessage.textContent = "Sensei got 5 points first, Sensei won!"
    }else{
        roundMessage.textContent = "Arona got 5 points first, Arona won!"
    }
    
}

function gameRestart(){
    roundMessage.textContent = "First one to get 5 points win the game!";
    playerScore = 0;
    computerScore = 0;
    aronaScore.textContent = `Arona's score: ${computerScore}`;
    senseiScore.textContent = `Sensei's score: ${playerScore}`;

}

