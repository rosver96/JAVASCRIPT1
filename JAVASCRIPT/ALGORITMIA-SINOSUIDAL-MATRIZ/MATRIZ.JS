let numbers =[];

let lista1 =Array.from({length: 3}, () => Math.floor(Math.random() * 100));
let lista2 =Array.from({length: 3}, () => Math.floor(Math.random() * 100));
let lista3 =Array.from({length: 3}, () => Math.floor(Math.random() * 100));

numbers[0] = lista1
numbers[1] = lista2
numbers[2] = lista3

let numbers2 = numbers.flat();

let ordenamiento = numbers2.sort(function(a,b){return a-b});

let array1 = ordenamiento.splice(0,3);
let array2 = ordenamiento.splice(0,3);
let ordenamientoRevez = array2.sort(function(a,b){return b-a});
let array3 = ordenamiento.splice(0,3);

let  resultado = [array1,ordenamientoRevez,array3];
console.log(resultado)
