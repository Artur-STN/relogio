var opcao = 'desligado'

function iniciarClock() {

    const deg = 6

    const hr = document.getElementById('hora')
    const mn = document.getElementById('minuto')
    const seg = document.getElementById('segundo')

    let numberHours = document.getElementById('numberHours')
    let numberMinutes = document.getElementById('numberMinutes')
    let numberSecond = document.getElementById('numberSecond')

    document.getElementById('button').innerHTML = 'ON'

    setInterval(

        () => {

            let day = new Date()

            let getHours = day.getHours() * 30
            let getMinutes = day.getMinutes() * deg
            let getSecond = day.getSeconds() * deg

            hr.style.transform = `rotateZ(${(getHours) + (getMinutes / 12)}deg)`
            mn.style.transform = `rotateZ(${getMinutes}deg)`
            seg.style.transform = `rotateZ(${getSecond}deg)`

            let numberHor = day.getHours()
            let numberMin = day.getMinutes()
            let numberSec = day.getSeconds()

            numberHours.innerHTML = numberHor <= 9 ? `0${numberHor}` : numberHor
            numberMinutes.innerHTML = numberMin <= 9 ? `0${numberMin}` : numberMin
            numberSecond.innerHTML = numberSec <= 9 ? `0${numberSec}` : numberSec

        }

    )

}
