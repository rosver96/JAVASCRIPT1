// 5. Construir el algoritmo que lea por teclado dos números,
// si el primero es mayor al segundo informar su suma y
// diferencia, en caso contrario, informar el producto y la
// división del primero respecto al segundo.


let numero1 = parseInt(prompt("ingrese un numero; "));
let numero2 = parseInt(prompt("ingrese el numero dos; "));

if (numero1 > numero2){
    let suma = numero1+numero2;
    let resta = numero1-numero2;
    document.write(`la suma de los numeros es ${suma} y la resta de los numeros es ${resta}`)
}else{
    let multiplicacion = numero1*numero2;
    let division = numero1/numero2;
    document.write(`la multiplicasion de los numeros es ${multiplicacion} y la division de los numeros es ${division}`)
}