function cantcaracte() {
    let palabra =document.getElementById("palabra").value; ;
    const cantidad = palabra.length;

    document.getElementById("resultado").innerHTML = 
        `"${palabra}" tiene ${cantidad} caracteres.`;
}
