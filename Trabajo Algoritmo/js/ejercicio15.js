function divisores() {
    let entrada = document.getElementById("numeros").value;
    let resultado = document.getElementById("resultado");

    // Limpiar resultado anterior
    resultado.innerHTML = "";

    // Convertimos la cadena "6,10" en un array [6, 10]
    let numeros = entrada.split(",").map(num => parseInt(num.trim()));

    for (let i = 0; i < numeros.length; i++) {
        let numeroActual = numeros[i];
        
        if (isNaN(numeroActual)) {
            resultado.innerHTML += `❌ "${numeros[i]}" no es un número válido.<br><br>`;
            continue;
        }

        resultado.innerHTML += `<strong>Divisores de ${numeroActual}:</strong><br>`;

        for (let d = 1; d <= numeroActual; d++) {
            if (numeroActual % d === 0) {
                resultado.innerHTML += `${d}<br>`;
            }
        }

        resultado.innerHTML += `<hr>`; // Separador entre resultados
    }
}
