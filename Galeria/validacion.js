var arreglo = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
var arregloaux = []
var posicion = 0

function comenzar() {
    posicion = 0;
    inicio()
    imprimir()
    verificar()
    var imagen = 'images/principal.jpg'
    document.getElementById('imagen').src = imagen
}

function inicio() {
    posicion = 0;
    verificar()
    for (var i = 0; i < 5; i++) {
        var pos = Math.round(Math.random() * 10)
        while (arregloaux.includes(arreglo[pos])) {
            var pos = Math.round(Math.random() * 10)
        }
        arregloaux[i] = arreglo[pos]
    }
    imprimir()
}

function imprimir() {
    var imagen = 'images/' + arregloaux[posicion] + '.jpg'
    document.getElementById('imagen').src = imagen
}

function anterior() {
    posicion--
    verificar()
    imprimir()
}

function siguiente() {
    posicion++
    verificar()
    imprimir()
}

function verificar() {
    if (posicion == 0) {
        document.getElementById("siguiente").disabled = false;
        document.getElementById("anterior").disabled = true;

    } else if (posicion == 4) {
        document.getElementById("siguiente").disabled = true;
        document.getElementById("anterior").disabled = false;

    } else {
        document.getElementById("siguiente").disabled = false;
        document.getElementById("anterior").disabled = false;
    }
}


