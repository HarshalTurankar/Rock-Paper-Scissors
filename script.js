let userScore=0;
let enemyScore=0;

const choices=document.querySelectorAll(".choice");//selecting img
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const enemyScorePara=document.querySelector("#enemy-score");

const genEneChoice=() =>{//it's function to generate computer choice
    const options=["Rock","Paper","Scissors"];
    const randIdx=Math.floor(Math.random() *3);//generate random choice betn 0 to 2
    return options[randIdx];//return random value
};

// function to highlight computer move
// it will remove effect after 1 second
const highlightEnemyChoice = (enemyChoice) => {
    const enemyElement = document.getElementById(enemyChoice);
    if (enemyElement) {
        enemyElement.classList.add("highlight"); // This adds a CSS class named "highlight" to the element.
        //  The class makes the selected element glow, showing the computer's choice visually.
        setTimeout(() => {// Remove highlight after 1 second
            enemyElement.classList.remove("highlight");
        }, 1000);
    }
};

const drawGame= () =>{//function for draw result
    msg.innerText="The game ended in a draw! Try again!";
    msg.style.backgroundColor = "#081b31";//background will be constant as constant
};

const showWinner=(userWin,userChoice,enemyChoice) =>{
    if(userWin){
        userScore++;//result update
        userScorePara.innerText= userScore;
        msg.innerText=`Booyah! Your ${userChoice} smacked ${enemyChoice}`;
        msg.style.backgroundColor="green"; 
    }else{
        enemyScore++;
        enemyScorePara.innerText= enemyScore;
        msg.innerText = `You lost! ${enemyChoice} smacked your ${userChoice}.`;
        msg.style.backgroundColor="red";
    }
};
//real logic of game

const playGame = (userChoice) => {
    //Generate computer choice
    const enemyChoice = genEneChoice();
  
    if (userChoice === enemyChoice) {
      //Draw Game
      drawGame();
    } else {
      let userWin = true;
      if (userChoice === "Rock") {
        //scissors, paper
        userWin = enemyChoice === "Paper" ? false : true;
      } else if (userChoice === "Paper") {
        //rock, scissors
        userWin = enemyChoice === "Scissors" ? false : true;
      } else {
        //rock, paper
        userWin = enemyChoice === "Rock" ? false : true;
      }
      showWinner(userWin, userChoice, enemyChoice);
    }
  };
  
  choices.forEach((choice) => {
    choice.addEventListener("click", () => {
      const userChoice = choice.getAttribute("id");
      playGame(userChoice);
    });
  });

