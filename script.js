const start = document.querySelector("#start");
const pause = document.querySelector("#pause");
const reset = document.querySelector("#reset");

let hours = document.querySelector("#hour");
let minute = document.querySelector("#minute");
let seconds = document.querySelector("#sec");
let isPaused = false;

// !current time and date
window.setInterval(function () {
  let myDate = new Date();
  let date = document.querySelector("#date");
  date.innerHTML = myDate.toLocaleString();
}, 100);

// variable for time changing event
let min = 0;
let sec = 0;
let hour = 0;

let interval = window.setInterval(function () {
  if (isPaused) {
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
  }
}, 1000);

start.addEventListener("click", function (e) {
  // ! using set interval function
  // e.preventDefault();
  console.log(isPaused);
  console.log(typeof sec);
  isPaused = true;
  console.log(isPaused);
  console.log(`start`);
});

pause.addEventListener("click", function () {
  isPaused = !isPaused;
  if (isPaused) {
    pause.innerHTML = "pause";
  } else {
    pause.innerHTML = "continue";
  }
});

reset.addEventListener("click", function () {
  seconds.innerHTML = "00";
  minute.innerHTML = "00";
  hours.innerHTML = "00";
  isPaused = false;
  sec = 0;
  min = 0;
  hour = 0;
});
