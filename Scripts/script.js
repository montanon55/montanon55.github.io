function pillin (a){
    alert("De verdad, es un juegazo");
}
function sorpresa (button){
    var contenedor = document.getElementById("a");
    var imagen = document.createElement("img");
    imagen.src = "../Imagenes/notas.png"
    imagen.setAttribute("width", "1000");
    imagen.setAttribute("heigh", "1000");

    contenedor.appendChild(imagen);
}
