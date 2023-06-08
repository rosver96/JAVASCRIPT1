const formulario = document.getElementById("formulario"),
nombre = document.getElementById("nombre").value,
email = document.getElementById("email").value,
telefono = document.getElementById("telefono").value,
padreTabla = document.getElementById("padreTabla");
let contador = 1;


formulario.addEventListener("submit", function(event){
    event.preventDefault();

    const padre = document.createElement("tr"),
    id = document.createElement("th"),
    nombre = document.createElement("td"),
    email = document.createElement("td"),
    telefono = document.createElement("td"),
    buton = document.createElement("td"),
    butonEliminar = document.createElement("buton");

    padre.classList.add("table-secondary" , "tabla");
    butonEliminar.classList.add("btn", "btn-dark");
    padre.id = contador;
    butonEliminar.type = "button"

    // padre.id =contador

    // id = contador

    id.textContent = `${id}`
    nombre.textContent = `${nombre.value}`
    email.textContent = `${email.value}`
    telefono.textContent = `${telefono.value}`
    butonEliminar.textContent = "eliminar";

    
    padre.appendChild(id);
    padre.appendChild(nombre);
    padre.appendChild(email);
    padre.appendChild(telefono);
    buton.appendChild(butonEliminar);
    padre.appendChild(buton);

    padreTabla.appendChild(padre)

    // limpiar valores en la tabla
    nombre.value = '';
    email.value = '';
    telefono.value = '';

    contador++
  
    //  evento del boton para eliminar
    butonEliminar.addEventListener('click', function(){
        padre.remove();
    })
    
});




  

