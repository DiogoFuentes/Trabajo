function separarletr() {
    let palabra = document.getElementById("palabra").value;
    let letras = palabra.split("");  // Separa letras
    let resultado = document.getElementById("resultado");

    resultado.innerHTML = "<strong>Letras:</strong><br>" + letras.join("<br>");
}
