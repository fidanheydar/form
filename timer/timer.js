const timer=document.getElementById("timer");
const startBtn=document.getElementById("start-button");
const stopBtn=document.getElementById("stop-button");
const resetBtn=document.getElementById("reset-button");

let timerInterval=null;
let minutes=0;
let seconds=0;
let milliseconds=0;


startBtn.addEventListener("click" ,()=>{
if(timerInterval!==null){
    clearInterval(timerInterval); 
}
startBtn.disabled = true;
stopBtn.disabled = false;
resetBtn.disabled = true;
timerInterval = setInterval(updateTime,10);

})
stopBtn.addEventListener("click" ,()=>{
    clearInterval(timerInterval);
        startBtn.disabled = false;
    stopBtn.disabled = true;
    resetBtn.disabled = false;
})
resetBtn.addEventListener("click" ,()=>{
clearInterval(timerInterval);
 minutes=0;
 seconds=0;
 milliseconds=0;
  timer.textContent = "00:00:000";

  startBtn.disabled = false;
  stopBtn.disabled = true;
  resetBtn.disabled = true;
})

function updateTime(){
    milliseconds+=10;

    if(milliseconds == 1000){
        milliseconds = 0;
        seconds++;

        if(seconds == 60){
            seconds = 0;
            minutes++;
        }
    }
timer.textContent=`${minutes}:${seconds}:${milliseconds}`
    }























// let startTime;
// let timerInterval;

// startBtn.addEventListener("click",()=>{
//     startTimer();
// })
// stopBtn.addEventListener("click",()=>{
//     stopTimer();
// })
// resetBtn.addEventListener("click",()=>{
//     resetTimer();
// })

// function startTimer() {
//   if (!timerInterval) {
//     startTime = Date.now();
//     timerInterval = setInterval(updateTimer, 10);

//     startBtn.disabled = true;
//     stopBtn.disabled = false;
//     resetBtn.disabled = true;
//   }
// }

// function stopTimer() {
//   if (timerInterval) {
//     clearInterval(timerInterval);
//     timerInterval = undefined;

//     startBtn.disabled = false;
//     stopBtn.disabled = true;
//     resetBtn.disabled = false;
//   }
// }

// function resetTimer() {
//   if (timerInterval) {
//     clearInterval(timerInterval);
//     timerInterval = undefined;
//   }

//   timer.textContent = "00:00:000";

//   startBtn.disabled = false;
//   stopBtn.disabled = true;
//   resetBtn.disabled = true;
// }

// function updateTimer() {
//   const currentTime = Date.now();
//   const leftTime = currentTime - startTime;

//   const minutes = Math.floor(leftTime / 60000);
//   const seconds = Math.floor((leftTime % 60000) / 1000);
//   const milliseconds = leftTime % 1000;

//   timer.textContent =
//     padNumber(minutes) +
//     ":" +
//     padNumber(seconds) +
//     ":" +
//     padNumber(milliseconds, 3);
// }

// // function padNumber(number, width = 2) {
// //   return number.toString().padStart(width, "0");
// // }