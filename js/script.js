var opcao = 'desligado'

function iniciarClock() {

    const deg = 6

    const hr = document.getElementById('hora')
    const mn = document.getElementById('minuto')
    const seg = document.getElementById('segundo')

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

        }

    )

}
