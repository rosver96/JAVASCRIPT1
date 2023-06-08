// 1. Construir el algoritmo para un programa que ingrese tres
// notas de un alumno, si el promedio es menor o igual a 3.9
// mostrar un mensaje "Estudie“, de lo contrario un mensaje que
// diga "becado"


let nota1 = prompt("ingrese la nota numero uno; ");
let nota2 = prompt("ingrese segunda nota; ");
let nota3 = prompt("ingrese la tercera nota; ");
let promedio = (parseFloat(nota1)+ parseFloat(nota2)+ parseFloat(nota3))/3; 


if(promedio <= 3.9) {
    alert(" sigue estudiando ")
} else {
    alert("estas becado")
}

