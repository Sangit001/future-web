let minute = document.querySelector(".minute");
let second = document.querySelector(".second");
let miliSecond = document.querySelector(".miliSecond");


let min = 0;
let sec = 0;
let mili =0;
let intervalId;
function start(){

if(!intervalId){
 intervalId = setInterval(()=>{

mili +=1;
miliSecond.innerText =String(mili).padStart(2,"0");

if(mili == 100){
    mili = 0;
    sec +=1;
    second.innerText = String(sec).padStart(2,"0")+".";
    
}
if(sec == 59){
    sec = 0;
    min +=1;
    min.innerText = String(min).padStart(2,"0")+" :";
}
},10)

}


}
function pause(){

clearInterval(intervalId);
intervalId =null;
}


function reset(){

 min = 0;
 sec = 0;
 mili =0;
 miliSecond.innerText =String(mili).padStart(2,"0");
 second.innerText = String(sec).padStart(2,"0")+".";
 min.innerText = String(min).padStart(2,"0")+" :";
 pause();
}