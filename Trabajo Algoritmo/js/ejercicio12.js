function cadaletra(){
    let palabra = document.getElementById("palabra").value;
    let j=0
     let resp = document.getElementById("resultado");
    resp.innerHTML = "Las letras de la palabra son:<br>";
    while (j < palabra.length){
        let letra= palabra[j]
        console.log (letra);
        resp.innerHTML += letra + "<br>"; 
        j++;
         
    }
}

