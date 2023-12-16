const start = document.querySelector("#start");
const pause = document.querySelector("#pause");
const reset = document.querySelector("#reset");

let hours = document.querySelector("#hour");
let minute = document.querySelector("#minute");
let seconds = document.querySelector("#sec");

let min = 0;
let sec = 0;
let hour = 0;

let interval;

start.addEventListener("click", function () {
  // ! using set interval function
  interval = setInterval(function () {
    // * increase second if sec greater than 59s
    if (sec >= 59) {
      // * increase minute if minute greater than 59s

      if (min >= 59) {
        // * increase hour  and set minute to 0

        hour++;
        min = 0;
        if (hour < 10) {
          hours.innerHTML = "0" + hour;
          minute.innerHTML = "0" + min;
        } else {
          hours.innerHTML = hour;
          minute.innerHTML = "0" + min;
        }
      } else {
        // * increase min if min less than 59min
        min++;
        if (min < 10) {
          minute.innerHTML = "0" + min;
        } else {
          minute.innerHTML = min;
        }
        sec = 0;
        seconds.innerHTML = "0" + sec;
      }
    } else {
      // * increase second if sec less than 59s

      sec++;
      if (sec < 10) {
        seconds.innerHTML = "0" + sec;
      } else {
        seconds.innerHTML = sec;
      }
    }
  }, 1000);
});


reset.addEventListener("click", function () {
    clearInterval(interval);
    seconds.innerHTML='00';
    minute.innerHTML='00';
    hours.innerHTML='00';
});
