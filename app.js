let gameSeq =[];
let userSeq =[];

let highScore = 0;

let Color = ["red","yellow","green","purple"];

let gameStarted = false;
let level = 0;

let h3 = document.querySelector("h3");
let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(gameStarted == false){
        console.log("Start Game");
        gameStarted = true;
        levelUp();
    } 
})

function btnFlash(btn){
    btn.classList.add("flash");

    setTimeout(() => {
        btn.classList.remove("flash");
    },300);
}

function userFlash(btn){
    btn.classList.add("user-flash");

    setTimeout(() => {
        btn.classList.remove("user-flash");
    },300);
}

function levelUp(){
    userSeq = [];
    level++;
    h3.innerText = `Level ${level}`;
    
    let ranIdx = Math.floor(Math.random() * 4);
    let ranColor = Color[ranIdx];
    let ranBtn = document.querySelector(`.${ranColor}`);

    gameSeq.push(ranColor);
    console.log(gameSeq);
    
    btnFlash(ranBtn);
}

function check(indx){
    if(gameSeq[indx] === userSeq[indx]){
        if(gameSeq.length == userSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{

        if(level > highScore){
            highScore = level;
        }

        
        
        h3.innerHTML = `<span style = "color :red">Game Over! Your score was <b>${level}</b></span> <span style = "color :blue"><br>Press any key to restart </span> <br> <span style = "color :orange"><h2>Highest Score is ${highScore}</h2></span>` ;

        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(() =>{
            document.querySelector("body").style.backgroundColor = "white";
        },500);

        reset();
    }
}

function btnPress(){
    let btn = this;
    userFlash(btn);
    let color = btn.getAttribute("id");
    userSeq.push(color);
    check(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");

for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    gameStarted = false;
    level = 0;
    gameSeq = [];
    userSeq = [];
}