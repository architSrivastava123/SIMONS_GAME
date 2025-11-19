let gameSeq =[];
let userSeq =[];
let h2 = document.querySelector("h2");
let btns= ["red", "purple", "green", "yellow"];
let level = 0;
let started = false;

document.addEventListener("keypress", function() {
    if(started === false){
        console.log("Game Started");
        started = true;
        levelUp();
    }

});

function gameflask(btn){
    btn.classList.add("flask");
    setTimeout( function(){
        btn.classList.remove("flask");
    }, 250);
}

function userflask(btn){
    btn.classList.add("gre");
    setTimeout( function(){
        btn.classList.remove("gre");
    }, 250);
}


function anscheck(index){
    if(userSeq[index] === gameSeq[index]){
        if(userSeq.length == gameSeq.length){
            setTimeout( function(){
                userSeq = [];
                levelUp();
            }, 1000);
        }
    } else{
        h2.innerHTML = "Wrong , please restart the game youre score is " +level + " entering any key";
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout( function(){
            document.querySelector("body").style.backgroundColor = "white";
        }, 500);
        restart();
    }
}   
function levelUp(){ 
    level++;
    h2.innerText = `Level ${level}`;
    let randomNum = Math.floor(Math.random() * 4);
    let randomColor = btns[randomNum];
    let btna = document.querySelector(`.${randomColor}`);
    gameSeq.push(randomColor);
    gameflask(btna);
}

                     
function btncheck(){
    let btn = this;
    userflask(btn);
    let usercolor = btn.getAttribute("id");
    console.log(usercolor);
    userSeq.push(usercolor);
    anscheck(userSeq.length - 1);
}

let btnall = document.querySelectorAll(".btn");
for(btn of btnall){
    btn.addEventListener("click", btncheck);
}

function restart(){
    level = 0;
    gameSeq = [];
    userSeq = [];
    started = false;
}