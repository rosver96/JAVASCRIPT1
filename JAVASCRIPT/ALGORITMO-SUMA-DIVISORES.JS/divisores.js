/*  elabore un programa js que calcule la suma de todos los divisores exactos de un numero entero dado y luego verificar 
con otra FUNCION SI LOS NUMEROS SON AMIGOS O NO */

// let suma = 0
function divisores(numero) {
    sumatoria = 0
        for (let i  = 1; i < numero ; i ++){
            if ( numero % i == 0){
                sumatoria = sumatoria +i
            }
        }
        return(sumatoria)
}
// let numero = prompt("ingrese un numero; ")
// divisores(numero);


function nAmigos(numero,numero2) {
    if ( divisores(numero) === numero2 && divisores(numero2) === numero){
        document.write ("los numero son amigos")
    } else {
        document.write("no son amigos")
    }
}

numero = parseFloat(prompt("ingrese el numero uno"))
numero2 = parseFloat(prompt("ingrese el numero dos"))

nAmigos(numero,numero2)