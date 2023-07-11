var time=document.getElementsByClassName("circle")
var t=time[0];
console.log(time);
 for(t of time){
    console.log(t);
 }

const startController=document.getElementById("start");
const stopController=document.getElementById("stop");
const resetController=document.getElementById("reset");
const saveController=document.getElementById("save");

var seconds=0;
var interval=null;


startController.addEventListener('click',start);
stopController.addEventListener('click',stop);
resetController.addEventListener('click',reset);

function timer(){
    seconds++;

    let sec=seconds%60;
    let mins=Math.floor((seconds%3600)/60);
    let hrs=Math.floor((seconds%86400)/3600);
    let day=Math.floor((hrs%(86400*30))/86400);
 
    if(sec<10) sec='0'+sec;
    if(mins<10) mins='0'+mins;
    if(hrs<10) hrs='0'+hrs;
    if(day<10) day='0'+day;

    time[3].innerText=`${sec}`;
    time[2].innerText=`${mins}`;
    time[1].innerText=`${hrs}`;
    time[0].innerText=`${day}`;


}

// timer();

function start(){
    if(interval){//true of interval
        return ;
    }

    interval=setInterval(timer,1000);
}

function stop(){
    clearInterval(interval);
    interval=null
}

function reset(){
    stop();
    seconds=0 ;

    time[3].innerText=`${0}${0}`;
    time[2].innerText=`${0}${0}`;
    time[1].innerText=`${0}${0}`;
    time[0].innerText=`${0}${0}`;

}