function numeroperfecto() {
    let entrada = document.getElementById("numeros").value;
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    let numeros = entrada.split(",").map(num => parseInt(num.trim()));

    for (let i = 0; i < numeros.length; i++) {
        let numero = numeros[i];

        if (isNaN(numero)) {
            resultado.innerHTML += `❌ "${numeros[i]}" no es un número válido.<br><br>`;
            continue;
        }

        let suma = 0;
        for (let d = 1; d < numero; d++) {
            if (numero % d === 0) {
                suma += d;
            }
        }

        if (suma === numero) {
            resultado.innerHTML += `<strong>${numero} es un número perfecto ✅</strong><br>`;
        } else {
            resultado.innerHTML += `${numero} no es un número perfecto ❌<br>`;
        }
    }
}
