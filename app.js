let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");   //choices variable for all the choices displayed i.e. rock,paper,scissors
const msg=document.querySelector("#msg");           //msg variable for the message to change(play your move)

const userScorePara=document.querySelector("#user-score");   //variable to select the user score.
const compScorePara=document.querySelector("#comp-score");   //variable to select computer score.

const genCompChoice=()=>{
    const options =["rock","paper","scissors"];      //providing all options to computer as an array
    const ranIdx=Math.floor(Math.random()*3);    /*random generates random value, floor gives value before decimal and stored in variable. random value is intially from 0 to 1, so to have values upto given array, multiply with the number of options*/
    return options[ranIdx];                      //value in variable can be 0,1,2 which will be index of options array.
}

const drawGame=()=>{
    msg.innerText="Game was draw. Play Again.";
    msg.style.backgroundColor="#081b31";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;        //if user wins userscore increments.
        userScorePara.innerText=userScore;   //score is stored in para of userscore
        msg.innerText=`You Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;    //if comp wins compscore increments.
        compScorePara.innerText=compScore;    //score is stored in para of compscore
        msg.innerText=`You Lose ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};


const playGame=(userChoice)=>{
    const compChoice=genCompChoice();     // the genCompchoice is function which generates random option and stores

    if(userChoice===compChoice){
        drawGame();       //if user and comp is same then draw
    }
    else {
        let userWin=true;
        if(userChoice==="rock"){     //user selects rock
            userWin = compChoice==="paper"? false : true;   //if comp selects paper then userWin var is false else true
        }
        else if(userChoice==="paper"){
            userWin = compChoice==="scissors"? false : true;  //if comp selects scissors then userWin var is false else true
        }
        else{
            userWin = compChoice==="rock"?false : true;    //if comp selects rock then userWin var is false else true
        }
        showWinner(userWin,userChoice,compChoice);    //function to show winner
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{     //event listener when option is clicked
        const userChoice=choice.getAttribute("id");    //id of choice is captured
        playGame(userChoice);     //playGame function is started.
    });
});
