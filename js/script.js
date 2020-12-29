import Countdown from "./countdown.js"

const timeForNewYear = new Countdown("31 December 2020 00:00:00 GMT-0300")


function showTime() {
  const tempos = document.querySelectorAll('[data-time]')
  tempos.forEach((tempo, index) => {
    tempo.innerHTML = timeForNewYear.total[index]
}) 
}

showTime()
setInterval(showTime, 1000)
