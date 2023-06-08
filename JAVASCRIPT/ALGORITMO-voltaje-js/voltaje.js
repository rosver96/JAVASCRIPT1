// 3. Construir el algoritmo para determinar el voltaje de un
// circuito a partir de la resistencia y la intensidad de corriente.

let resistencia = prompt ("ingrese la resistencia del circuito; ");
let intensidad = prompt ("ingrese la intensidad de la corriente; ");

let voltaje = parseFloat(resistencia)*parseFloat(intensidad);
document.write(`el voltaje del circuito es ${voltaje}`)