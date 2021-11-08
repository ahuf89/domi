iconos = []
selecciones = []
puntaje = 0
intentos = 0

generarTablero()

function generarTablero() {
    document.getElementById("intentos").innerHTML = intentos + '/30'
    document.getElementById("puntaje").innerHTML = puntaje
    iconsP = parseInt(Math.random() * 5) + 1
    console.log('myrandom images', iconsP)


    if (iconsP == 1) {
        iconos = [
            '<img  src="assets/img/eat/burro.png" width="70" >',
            '<img  src="assets/img/eat/cafe.png" width="70" >',
            '<img  src="assets/img/eat/carne.png" width="70" >',
            '<img  src="assets/img/eat/cerveza.png" width="70" >',
            '<img  src="assets/img/eat/desayono.png" width="70" >',
            '<img  src="assets/img/eat/ensalada.png" width="70" >',
            '<img  src="assets/img/eat/ham.png" width="70" >',
            '<img  src="assets/img/eat/chocolat.png" width="70" >',
            '<img  src="assets/img/eat/pizza.png" width="70" >',
            '<img  src="assets/img/eat/pollo.png" width="70" >',
            '<img  src="assets/img/eat/postre.png" width="70" >',
            '<img  src="assets/img/eat/sanw.png" width="70" >',
        ]
    } else if (iconsP == 2) {
        iconos = [
            '<img  src="assets/img/banderas/1.png" width="50" >',
            '<img  src="assets/img/banderas/2.png" width="50" >',
            '<img  src="assets/img/banderas/3.png" width="50" >',
            '<img  src="assets/img/banderas/4.png" width="50" >',
            '<img  src="assets/img/banderas/5.png" width="50" >',
            '<img  src="assets/img/banderas/6.png" width="50" >',
            '<img  src="assets/img/banderas/7.png" width="50" >',
            '<img  src="assets/img/banderas/8.png" width="50" >',
            '<img  src="assets/img/banderas/9.png" width="50" >',
            '<img  src="assets/img/banderas/10.png" width="50" >',
            '<img  src="assets/img/banderas/11.png" width="50" >',
            '<img  src="assets/img/banderas/12.png" width="50" >',
        ]
    } else if (iconsP == 3) {
        iconos = [
            '<img  src="assets/img/aplications/1.png" width="50" >',
            '<img  src="assets/img/aplications/2.png" width="50" >',
            '<img  src="assets/img/aplications/3.png" width="50" >',
            '<img  src="assets/img/aplications/4.png" width="50" >',
            '<img  src="assets/img/aplications/5.png" width="50" >',
            '<img  src="assets/img/aplications/6.png" width="50" >',
            '<img  src="assets/img/aplications/7.png" width="50" >',
            '<img  src="assets/img/aplications/8.png" width="50" >',
            '<img  src="assets/img/aplications/9.png" width="50" >',
            '<img  src="assets/img/aplications/10.png" width="50" >',
            '<img  src="assets/img/aplications/11.png" width="50" >',
            '<img  src="assets/img/aplications/12.png" width="50" >',
        ]

    } else if (iconsP == 4) {
        iconos = [
            '<img  src="assets/img/simpsons/1.png" width="50" >',
            '<img  src="assets/img/simpsons/2.png" width="50" >',
            '<img  src="assets/img/simpsons/3.png" width="50" >',
            '<img  src="assets/img/simpsons/4.png" width="50" >',
            '<img  src="assets/img/simpsons/5.png" width="50" >',
            '<img  src="assets/img/simpsons/6.png" width="50" >',
            '<img  src="assets/img/simpsons/7.png" width="50" >',
            '<img  src="assets/img/simpsons/8.png" width="50" >',
            '<img  src="assets/img/simpsons/9.png" width="50" >',
            '<img  src="assets/img/simpsons/10.png" width="50" >',
            '<img  src="assets/img/simpsons/11.png" width="50" >',
            '<img  src="assets/img/simpsons/12.png" width="50" >',
        ]
    } else if (iconsP == 5) {
        iconos = [
            '<img  src="assets/img/dbz/1.png" width="40" >',
            '<img  src="assets/img/dbz/2.png" width="40" >',
            '<img  src="assets/img/dbz/3.png" width="40" >',
            '<img  src="assets/img/dbz/4.png" width="40" >',
            '<img  src="assets/img/dbz/5.png" width="40" >',
            '<img  src="assets/img/dbz/6.png" width="40" >',
            '<img  src="assets/img/dbz/7.png" width="40" >',
            '<img  src="assets/img/dbz/8.png" width="40" >',
            '<img  src="assets/img/dbz/9.png" width="40" >',
            '<img  src="assets/img/dbz/10.png" width="40" >',
            '<img  src="assets/img/dbz/11.png" width="40" >',
            '<img  src="assets/img/dbz/12.png" width="40" >',
        ]
    }



    selecciones = []
    tablero = document.getElementById("tablero")
    tarjetas = []
    for (i = 0; i < 24; i++) {
        tarjetas.push(
            '<div class="area-tarjeta" onclick="seleccionarTarjeta(' + i + ')"><div class="tarjeta" id="tarjeta' + i + '"><div class="cara trasera" id="trasera' + i + '">' + iconos[0] + '</div><div class="cara superior"><img  src="assets/img/eat/play.png" width="80" ></div></div></div> ')
        if (i % 2 == 1) {
            iconos.splice(0, 1)
        }
    }
    tarjetas.sort(() => Math.random() - 0.5)
    tablero.innerHTML = tarjetas.join(" ")
}


function seleccionarTarjeta(i) {
    tarjeta = document.getElementById("tarjeta" + i)
    if (tarjeta.style.transform != "rotateY(180deg)") {
        tarjeta.style.transform = "rotateY(180deg)"
        selecciones.push(i)
    }
    if (selecciones.length == 2) {
        deseleccionar(selecciones)
        selecciones = []
    }
}

function deseleccionar(selecciones) {
    if (intentos < 30) {
        document.getElementById("puntaje").innerHTML = puntaje
        document.getElementById("intentos").innerHTML = intentos + '/30'

        setTimeout(() => {
            trasera1 = document.getElementById("trasera" + selecciones[0])
            trasera2 = document.getElementById("trasera" + selecciones[1])
            if (trasera1.innerHTML != trasera2.innerHTML) {
                tarjeta1 = document.getElementById("tarjeta" + selecciones[0])
                tarjeta2 = document.getElementById("tarjeta" + selecciones[1])
                tarjeta1.style.transform = "rotateY(0deg)"
                tarjeta2.style.transform = "rotateY(0deg)"
                intentos++
                document.getElementById("intentos").innerHTML = intentos + '/30'
            } else {
                puntaje += 10
                document.getElementById("puntaje").innerHTML = puntaje
                trasera1.style.background = "plum"
                trasera2.style.background = "plum"
                console.log('puntaje', puntaje)
                intentos++
                document.getElementById("intentos").innerHTML = intentos + '/30'
                if (puntaje >= 120) {
                    document.getElementById("intentos").innerHTML = intentos + '/30'
                    document.getElementById("puntaje").innerHTML = puntaje
                    setTimeout(() => {
                        alert('Felicidades usted es un ganador ' + puntaje + ' puntos')
                        document.getElementById("puntaje").innerHTML = puntaje
                        puntaje = 0
                        intentos = 0
                        document.getElementById("intentos").innerHTML = intentos + '/30'
                        document.getElementById("puntaje").innerHTML = puntaje

                        generarTablero()
                    }, 1000);
                }
            }
        }, 1000);
        document.getElementById("puntaje").innerHTML = puntaje
    } else {
        alert('Perdiste debes volver a jugar')
        document.getElementById("intentos").innerHTML = intentos + '/30'
        puntaje = 0
        intentos = 0
        generarTablero()
    }
}