function unapalabra() {
    debugger; 
    let entrada = document.getElementById("entrada").value; 
    let resp = document.getElementById("resultado");
    resp.innerHTML = "Las letras de la palabra son:<br>";
    
    for (let i = 0; i < entrada.length; i++) {
        let letra = entrada[i];
        console.log(letra); 
        resp.innerHTML += letra + "<br>"; 
    }
}
