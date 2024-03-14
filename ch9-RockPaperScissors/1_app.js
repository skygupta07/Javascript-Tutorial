// yes html mai aap given tag mai class aur id dono mention kar sakte ho....
// class name un sabke liye same rahega.... bas simply aap id se distinguish kar dena sabko...
// jis paragraph ko in future say changes karne ki jarurat padegi using javascript then 
// it is better ki aap ussey starting mai hi ek id assign kar do....

// har ek component ke liye uske corresponding class bana di......

/*
div aur image ka size same hai to simply div pe hi event listener laga sakte hai...

*/

let userScore = 0;
let compScore = 0;

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");



const genCompChoice = () =>{
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () =>{
    console.log("game was drawn");
    msg.innerText = "Game was Drawn. Play Again";
    msg.style.backgroundColor = "grey";
}

const showWinner = (userWin, userChoice, compChoice) =>{
    if (userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you won !!");
        msg.innerText = `you won !! as your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("you lose !!");
        msg.innerText = `you lose brother as computer's ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}


const playGame = (userChoice) =>{
    console.log("user choice = ", userChoice);
    // generate computer Choice
    
    const compChoice = genCompChoice();
    console.log("computer choice = ", compChoice);

    // game algorithm....
    if (userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true; // chalaki to use this variable....

        if (userChoice === "rock"){
            // valid computer choices can be -> paper , scissors....
            userWin = (compChoice === "paper") ? false : true;
            userWin = (compChoice === "scissors") ? true : false;
        }

        else if (userChoice === "paper"){
            // valid computer choices can be -> scissors, rock
            userWin = (compChoice === "scissors") ? false: true;
            userWin = (compChoice === "rock") ? true : false;
        }

        else{   // user choice = scissors and possible computer choices are : rock , paper
            userWin = (compChoice === "rock") ? false : true;
            userWin = (compChoice === "paper") ? true : false;
        }

        showWinner(userWin, userChoice, compChoice);
    }
};













choices.forEach((choice) =>{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

// har ek kaam ke liye aap ek function banao... this is modular way of programming....i.e. creating reusable functions...

// math.floor se decimal values hat jaengi and Math.random()*N  se O se leke N-1 tak number 
// generate ho jaenge....



