function arreglofor() {
    let frutas = document.getElementById("frutas").value;
    let resultado = document.getElementById("resultado");

    resultado.innerHTML = "<strong>Frutas:</strong><br>";

    for (let i = 0; i < frutas.length; i++) {
        resultado.innerHTML += frutas[i];
    }
}
