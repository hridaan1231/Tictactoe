


let minis=document.querySelectorAll(".mini");
let reset=document.querySelector("#reset-btn")
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

turnO=true;
const winPatt=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
   minis.forEach(div => {
  div.addEventListener("click", () => {
if(turnO){
    div.innerText="O";
    turnO=false;
   div.style.pointerEvents = "none";
}
else{
    div.innerText="X";
    turnO=true;
       div.style.pointerEvents = "none";

}
checkWinner();
  });
});
showWinner=(Winner)=>{
    msg.innerText=(`Congratulations ,Winner is ${Winner}`);
    msgContainer.classList.remove("hide");
}
const disableBoxes = () => {
    minis.forEach(div => {
        div.style.pointerEvents = "none";
    });
};


const checkWinner=()=>{
    for(let pattern of winPatt){
        console.log(pattern[0],pattern[1],pattern[2]);
        console.log(
            minis[pattern[0]].innerText,
            minis[pattern[1]].innerText,
            minis[pattern[2]].innerText
        ) ;
      let Pos1val= minis[pattern[0]].innerText; 
      let Pos2val= minis[pattern[1]].innerText; 
      let Pos3val= minis[pattern[2]].innerText; 

       if(Pos1val!=="" && Pos2val!=="" && Pos3val!=="" ){
        if(Pos1val === Pos2val && Pos2val === Pos3val){
            console.log("Winner",Pos1val);
            showWinner(Pos1val);
             disableBoxes();
        }
       }
        
    }
};

const enableBoxes = () => {
    minis.forEach(div => {
        div.innerText = "";
        div.style.pointerEvents = "auto";
    });
    msgContainer.classList.add("hide");
    turnO = true;
};

reset.addEventListener("click", enableBoxes);
window.addEventListener('load', () => {
  const splash = document.getElementById('splash-screen');
  const gameContainer = document.getElementById('cont');

  setTimeout(() => {
    splash.style.display = 'none';       // Hide splash after 2 sec
    gameContainer.style.display = 'flex'; // Show game container
  }, 2000);
});



