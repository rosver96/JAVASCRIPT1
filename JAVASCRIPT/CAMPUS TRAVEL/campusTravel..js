const clientes = [];


const formularioG = document.getElementById("formularioG")

const  tablaclientes =document.getElementById("padreTabla");  //capturar el cuerpo de la tabla



// Función para crear clientes
function crearCliente (){
    // <!-- ********************** gestion de clientes ******************************** -->
const ndocumento = document.getElementById("ndocumento").value
const  nombres = document.getElementById("nombres").value
const apellidos = document.getElementById("apellidos").value
const telefono = document.getElementById("telefono").value
const email = document.getElementById("email").value
const fechadenacimiento = document.getElementById("fechadenacimiento").value
const nacionalidad = document.getElementById("nacionalidad").value

    const cliente  = {
        ndocumento,
        nombres,
        apellidos,
        telefono,
        email,
        fechadenacimiento,
        nacionalidad
    } ;
    clientes.push(cliente)
    formularioG.reset()
    listar()
}
formularioG.addEventListener("submit" , function(event){
    event.preventDefault();
    crearCliente()
})


// funcion listar clientes
function listar (){
    tablaclientes.innerHTML = "";
    clientes.forEach ((cliente) => {
        const nuevaFila = document.createElement("tr")
        nuevaFila.innerHTML = `
        <td>${cliente.ndocumento}</td>
            <td>${cliente.nombres}</td>
            <td>${cliente.apellidos}</td>
            <td>${cliente.telefono}</td>
            <td>${cliente.email}</td>
            <td>${cliente.fechadenacimiento}</td>
            <td>${cliente.nacionalidad}</td>
            <td><button class="btn btn-danger btn-sm btn-eliminar" data-id="${cliente.ndocumento}">Eliminar</button></td>
            <td><button class="btn btn-warning btn-sm btn-editar" data-id="${cliente.ndocumento}">Editar</button></td>
        `;
        const botonBorrar = nuevaFila.querySelector(".btn-eliminar");
        botonBorrar.addEventListener('click', function () {
            const clienteid = botonBorrar.dataset.id;
            eliminarCliente(clienteid)
        } 
    

    tablaclientes.appendChild(nuevaFila)

    
)}

function eliminarcliente(identificacion) => {
    const index = clientes.findIndex(function (cliente){
        return cliente.id === identificacion;
    });

// *********************************************************************************************************************************************


// <!-- ********************** RUTAS AEREAS ******************************** -->
// const rutas =[]

// const id = document.getElementById("id");
// const nombreruta = document.getElementById("nombreruta");
// const valortiket = document.getElementById("valortiket");
// const ciudadorigen = document.getElementById("ciudadorigen");
// const ciudaddestino = document.getElementById("ciudaddestino");
// const puntos = document.getElementById("puntos");
// const formularioR = document.getElementById("formularioR");



// // Función para crear rutas
// function crearRutas (id,nombreruta,valortiket,ciudadorigen,ciudaddestino,puntos){
//     const ruta  = {
//         id,
//         nombreruta,
//         valortiket,
//         ciudadorigen,
//         ciudaddestino,
//         puntos
//     } ;
//     rutas.push(ruta)
// }
