// 4. Construir el algoritmo que solicite el nombre y edad de 3
// personas y determine el nombre de la persona con mayor edad.
let nombre1 = prompt("ingrese su nombre; ");
let nombre2 = prompt("ingrese su nombre; ");
let nombre3 = prompt("ingrese su nombre; ");

let edad1 = prompt("ingrese su edad; ");
let edad2 = prompt("ingrese su edad; ");
let edad3 = prompt("ingrese su edad; ");


if (edad1 > edad2 && edad1 > edad3){
    document.write(`la persona de mayor edad es ${nombre1}`)
}
else if (edad2 > edad1 && edad2 > edad3){
    document.write(`la persona con mayor edad es ${nombre2}`)
}
else if (edad3 > edad1 && edad3 > edad2){
    document.write(`le persona con mayor edad es ${nombre3}`)
}else{
    document.write("las personas tienen  la misma edad ")
}


// let nombre = prompt("ingrese su nombre; ")
// let edad = prompt("ingrese su edad; ")

// for (let nombre = O; nombre < 3; nombre ++) {
//     for(let edad = 0; edad <3; edad ++);
// }
// if ()

