function compararpalabra() {
    let palabra1 = document.getElementById("palabra1").value;
    let palabra2 = document.getElementById("palabra2").value;
    let resultado = document.getElementById("resultado");

    resultado.innerHTML = "Comparación letra por letra:<br>";

    let longitud = Math.min(palabra1.length, palabra2.length);

    for (let i = 0; i < longitud; i++) {
        let letra1 = palabra1[i];
        let letra2 = palabra2[i];
        let iguales = letra1 === letra2 ? "✅ iguales" : "❌ diferentes";

        resultado.innerHTML += 
            `Posición ${i}: "${letra1}" vs "${letra2}" → ${iguales}<br>`;
    }

    if (palabra1.length !== palabra2.length) {
        resultado.innerHTML += `<br>⚠️ Las palabras tienen distinta longitud.`;
    }
}

