 const eliminar = document.getElementById ("eliminar");
 const agregar = document.getElementById ("agregar");
 const contenedor = document.getElementById ("contenedor");


agregar.addEventListener ("click", function () {
let parrafo = document.createElement("p");
/* para eliminar y no usar el queryselector con este metodo si en el codigo tenemos mas etiquetas con "p" entramos en conflicto */
parrafo.id = "parrafitos"
let contenido = document.createTextNode("hello world");
parrafo.appendChild(contenido); 
contenedor.appendChild(parrafo);    
});


eliminar.addEventListener ("click", function () {
let eliminar = document.getElementById("parrafitos");
// let eliminar = document.querySelector("p");  // para eliminar y no usar el id 
contenedor.removeChild(eliminar);
});








