function sumadivisores() {
    let entrada = document.getElementById("numeros").value;
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    let numeros = entrada.split(",").map(num => parseInt(num.trim()));

    for (let i = 0; i < numeros.length; i++) {
        let actual = numeros[i];

        if (isNaN(actual)) {
            resultado.innerHTML += `❌ "${numeros[i]}" no es un número válido.<br><br>`;
            continue;
        }

        let suma = 0;
        for (let d = 1; d <= actual; d++) {
            if (actual % d === 0) {
                suma += d;
            }
        }

        resultado.innerHTML += 
            `<strong>Suma de los divisores de ${actual}:</strong> ${suma}<br><hr>`;
    }
}
