function grelemento() {
    const datos = [];
    datos[0] = 10;
    datos[1] = 20;

    document.getElementById("resultado").innerHTML = 
        "<strong>Contenido del arreglo:</strong><br>" + datos.join(", ");
}
