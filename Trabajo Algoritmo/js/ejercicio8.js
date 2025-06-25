function arreglonum() {
    let entrada = document.getElementById("numeros").value;
    let arreglo = entrada.split(";").map(num => Number(num.trim()));
    
    document.getElementById("resultado").innerHTML =
        "<strong>Arreglo resultante:</strong><br>" + arreglo.join(", ");
}
