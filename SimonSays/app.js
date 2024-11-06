let h2= document.querySelector("h2");
let btns= document.querySelectorAll(".btn");
let gameStatus= false;
let level=0;
let gameSeq=[];
let usrSeq=[];

document.addEventListener("keypress", function gameStarter(){
        if(gameStatus==false){
                h2.innerText=`Game Started!`;
                // btnFlash(1);
                gameStatus=true;

                setTimeout(levelUp,1000);
        }
});

function btnFlash(btn){
        btn.classList.add(`flash`);
        setTimeout(function () {
                btn.classList.remove(`flash`);
        }, 300);
}

function levelUp(){
        usrSeq=[];
        level++;
        h2.innerText=`Level ${level}`;
        
        let random= Math.floor((Math.random()*4));
        btnFlash(btns[random]);
        
        gameSeq.push(random);
        console.log(gameSeq);
}

for(let btn of btns){
        btn.addEventListener("click",function (){
                usrSeq.push(this.getAttribute("id"));
                btnFlash(this);
                if(gameSeq[usrSeq.length-1]==usrSeq[usrSeq.length-1]){
                        if(usrSeq.length==gameSeq.length){
                                setTimeout(levelUp,300);
                        }                
                }
                else {
                        document.querySelector("body").style.backgroundColor="red";
                        setTimeout(function(){
                                document.querySelector("body").style.backgroundColor="bisque";
                        },150);
                        h2.innerText=`Game Over! Score:${level-1}`;
                        setTimeout(gameReset,2000);
                }
        });
}

function gameReset(){
        gameSeq=[];
        usrSeq=[];
        level=0;
        gameStatus=false;
        h2.innerText="Press Any Key To Start";
}