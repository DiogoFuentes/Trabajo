function arreglodevalores() {
  
    let entrada = document.getElementById("frutas").value;

    let frutas = entrada.split(";").map(fruta => fruta.trim());

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "<strong>Frutas:</strong><br>";

    for (let i = 0; i < frutas.length; i++) {
        resultado.innerHTML += frutas[i] + "<br>";
    }
}

