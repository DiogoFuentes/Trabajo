function arreglowhile() {
   let frutas = document.getElementById("frutas").value;
    let i = 0;
   let  resultado = document.getElementById("resultado");

    resultado.innerHTML = "<strong>Frutas:</strong><br>";

    while (i < frutas.length) {
        resultado.innerHTML += frutas[i] ;
        i++;
    }
}
