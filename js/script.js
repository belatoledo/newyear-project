import Countdown from "./countdown.js"

const timeForXtmas = new Countdown("25 December 2020 00:00:00 GMT-0300")


function showTime() {
  const tempos = document.querySelectorAll('[data-time]')
  tempos.forEach((tempo, index) => {
    tempo.innerHTML = timeForXtmas.total[index]
}) 
}

showTime()
setInterval(showTime, 1000)
