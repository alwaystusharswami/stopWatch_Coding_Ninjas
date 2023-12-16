const start = document.querySelector("#start");
const pause = document.querySelector("#pause");
const reset = document.querySelector("#reset");

let hours = document.querySelector("#hour");
let minute = document.querySelector("#minute");
let seconds = document.querySelector("#sec");

let min = 0;
let sec = 0;
let hour = 0;
start.addEventListener("click", function () {
  setInterval(function () {
    if (sec >= 59) {
      sec = 0;
      seconds.innerHTML = "0" + sec;
    } else {
      sec++;
      if (sec < 10) {
        seconds.innerHTML = "0" + sec;
      } else {
        seconds.innerHTML = sec;
      }
    }
  }, 1000);
});
