function cadletra() {
    let nombre = document.getElementById("nombre").value;
    let resultado = document.getElementById("resultado");

    resultado.innerHTML = "<strong>Las letras del nombre son:</strong><br>";

    if (nombre.length >= 1) {
        resultado.innerHTML += nombre[0] + "<br>";
    }
    if (nombre.length >= 2) {
        resultado.innerHTML += nombre[1] + "<br>";
    }
    if (nombre.length >= 3) {
        resultado.innerHTML += nombre[2] + "<br>";
    }
    if (nombre.length >= 4) {
        resultado.innerHTML += nombre[3] + "<br>";
    }
    if (nombre.length >= 5) {
        resultado.innerHTML += nombre[4] + "<br>";
    }
    if (nombre.length >= 6) {
        resultado.innerHTML += nombre[5] + "<br>";
    }
    if (nombre.length >= 7) {
        resultado.innerHTML += nombre[6] + "<br>";
    }
    if (nombre.length >= 8) {
        resultado.innerHTML += nombre[7] + "<br>";
    }
    if (nombre.length >= 9) {
        resultado.innerHTML += nombre[8] + "<br>";
    }
    if (nombre.length >= 10) {
        resultado.innerHTML += nombre[9] + "<br>";
    }
}
