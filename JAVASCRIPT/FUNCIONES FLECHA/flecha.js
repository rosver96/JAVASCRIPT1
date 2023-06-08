// // tomar 3 funciones tradicionales y definirlas como funciones flecha

// // funcion tradicional
// function hipotenusa (x,y) {
//    let h = Math.sqrt((x**2) + (y ** 2));
//     return h ;
// }

// // funcion flecha
// let hipotenusa = (x,y) => Math.sqrt((x ** 2) + (y ** 2));

// // ----------------------------------------------------------------------------------------------------------------



// // funcion tradicional


// // funcion flecha


// // ----------------------------------------------------------------------------------------------------------------


// // funcion tradicional
// function factorial (n){
//     if (n == 0 || n == 1){
//         resultado = 1 ;
//     }
//     else{
//         resultado = n * factorial(n-1)
//     }
//     return resultado
// }

// funcion flecha
let factorial = n => {
    if (n == 0 || n == 1){
        resultado = 1 ;
    }
    else{
        resultado = n * factorial(n-1)
    }
    return resultado
}

// // ----------------------------------------------------------------------------------------------------------------


// // funcion tradicional
// function combinatoria (n,k)  {
//     comb = factorial(n)/(factorial(k) * factorial(n-k)) ;
//     return comb;
// }


// // funcion flecha
// let combinatoria = (n,k) => factorial(n)/(factorial(k) * factorial(n-k));



palabra = prompt("ingrese una palabra");


// let contarLetras = palabra => palabra.lenght();

function contarLetras (palabra){
    a = palabra.lenght()
   return a ;
}

alert(`La cantidad de letras en su palabra es: ${contarLetras(palabra)}`);
