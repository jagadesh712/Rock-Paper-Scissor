const buttons=document.querySelectorAll(".button");
const AvlChoice=["Rock","Paper","Scissor"];
const table=document.querySelector("#tablebody");
const reset=document.getElementById('Reset');
const score=document.getElementById("Score");
let count=0;

function Result(userChoice,compChoice){
    if(userChoice==compChoice){
        return "Draw";
    }
    else if(userChoice=="Rock"&&compChoice=="Scissor"){
        return "Won";
    }
    else if(userChoice=="Paper"&&compChoice=="Rock"){
        return "Won";
    }
    else if(userChoice=="Scissor"&&compChoice=="Paper"){
        return "Won";
    }
    else{
        return "Lost";
    }
}
reset.addEventListener("click",()=>{
    table.innerHTML="";
    count=0;
    score.innerHTML=`Score : ${count}`


});

buttons.forEach((userChoice)=>{
    userChoice.addEventListener("click",()=>{
        const newRow=document.createElement("tr");
        const Player=document.createElement("td");
        const computer=document.createElement("td");
        const resultRow=document.createElement("td");
        compChoice=AvlChoice[Math.floor(Math.random()*3)];
        const result=Result(userChoice.textContent,compChoice);
        resultRow.innerHTML=result;
        Player.innerHTML=userChoice.textContent;
        computer.innerHTML=compChoice;
        newRow.appendChild(Player);
        newRow.appendChild(computer);
        newRow.appendChild(resultRow);
        table.appendChild(newRow); 
        
        if(result=="Won"){
            
            count++;
        }
        score.innerHTML=`Score : ${count}`;
        
    });

});
