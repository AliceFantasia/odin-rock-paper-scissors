console.log("Hello World!");

function getComputerChoice(){
    const result = Math.floor(Math.random() * 3);

    if(result === 0){
        console.log("Arona plays Rock!");
        return "rock";
    } else if (result === 1){
        console.log("Arona plays Paper!");
        return "paper"
    } else if (result === 2) {
        console.log("Arona plays Scissors!");
        return "scissors"
    }
}

function getHumanChoice(){
    let choice = prompt("Please type between rock paper and scissors")
    return choice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playGame(){

    function playRound(humanChoice, computerChoice){

        if(humanChoice === computerChoice){
            console.log("Draw!");
        }

        else if(humanChoice == "rock"){
            if(computerChoice == "scissors"){
                console.log("Sensei won!");
                humanScore++;
            }else{
                console.log("Arona won!");
                computerScore++;
            }

        }

        else if(humanChoice == "paper"){
            if(computerChoice == "rock"){
                console.log("Sensei won!");
                humanScore++;
            }else{
                console.log("Arona won!");
                computerScore++;
            }

        }

        else if(humanChoice == "scissors"){
            if(computerChoice == "paper"){
                console.log("Sensei won!");
                humanScore++;
            }else{
                console.log("Arona won!");
                computerScore++;
            }

        }
        
    }

    for(i = 0; i < 5; i++){
        const humanSelection = getHumanChoice()
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    console.log("final Sensei score:" + humanScore);
    console.log("final Arona score:" + computerScore);

}
 playGame()


