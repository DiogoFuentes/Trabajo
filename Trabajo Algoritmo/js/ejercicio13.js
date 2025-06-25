function contarvocales() {
    let palabra = document.getElementById("palabra").value;
    let vocales = 0;

    for (let i = 0; i < palabra.length; i++) {
        let letra = palabra[i].toLowerCase();
        if ("aeiou".includes(letra)) {
            vocales++;
        }
    }

    document.getElementById("resultado").innerHTML = 
        "La palabra tiene " + vocales + " vocales.";
}
