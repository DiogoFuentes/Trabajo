function elemento() {
    const numero = [1, 2];
    numero.push(3); // Agrega 3 al final
    let resultado = document.getElementById("resultado");

    resultado.innerHTML = "<strong>Arreglo actualizado:</strong><br>" + numero.join(", ");
}