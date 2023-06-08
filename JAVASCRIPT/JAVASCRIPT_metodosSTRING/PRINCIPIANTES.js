// a. Declarar variables llamadas 'continente', 'país',
// 'Departamento', 'ciudad', 'barrio' y 'dirección', y asigne sus
// valores de cantidad de habitantes, de acuerdo con su contexto
// real en su propio país.
// b. Registre sus valores en la consola.

let continente = 746400000;
let  pais = 4542013;
let departamento = 24513629;
let ciudad = 14251243 ;
let barrio = 524123;
let dirección = 25;

document.write(continente,' ',pais,' ',departamento,' ',ciudad,' ',barrio,' ',dirección);
console.log(continente,' ',pais,' ',departamento,' ',ciudad,' ',barrio,' ',dirección);

// ************************************************************************************************** //
// 2.
// a. Declare una variable llamada 'esTercerMundista' y
// establezca su valor de acuerdo con su país. La variable debe
// contener un valor booleano. También declarar una variable
// 'idioma', pero no le asigne ningún valor todavía.
// b.,
// 'continente', 'país' e 'idioma' Registrar los valores de 'esTercerMundista'

let esTercermundista = false;
let  idioma = undefined;
continente = "europeo";

// pais = "españa";

// ************************************************************************************************** //
// 3.
// a. Establezca el valor de 'idioma' en el idioma que se
// habla donde vive.
// b. Piense en qué variables deberían ser variables
// constantes (¿qué valores nunca cambian y cuáles podrían
// cambiar?). Luego, cambia estas variables a const.
// c. observe lo que sucede.

idioma = "español";
console.log(idioma);    /* da error en consola porque si tenemos una const no podemos cambiar valores asignado */

// ************************************************************************************************** //
// 4.
// a. Si su país se dividiera por la mitad, y cada mitad contendría la
// mitad de la población, Entonces, ¿cuántas personas vivirían en cada
// mitad?
// b. Aumente la población de su país en 1M y registre el resultado
// en la consola
// c. Finlandia tiene una población de 6 millones. ¿Tu país tiene más
// gente que ¿Finlandia?
// d. La población promedio de un país es de 33 millones de
// personas. ¿Tu país tiene menos gente que el país promedio?
// e. Basado en las variables que creó, cree una nueva variable
// 'descripción' que contiene una cadena con este formato: 'Colombia
// está en América, y Bucaramanga que está en el departamento de
// Santander tiene un barrio llamado el prado y sus 3000 personas
// hablan inglés.

pais = pais / 2;
console.log(pais);

pais = pais + 1000000;
console.log(pais);

let finlandia = 6000000;
console.log(pais > finlandia);

let promedio = 33000000;
console.log(pais < promedio);

let descripcion = " españa esta en europa y madrid esta en el departamento segovia tiene un barrio llamado castellana con 200 personas que hablan ingles";
console.log(descripcion)

// ************************************************************************************************** //
// 5. Repita el ejercicio usando Template strings
continente = "europa";
pais = "españa";
departamento = "madrid";
ciudad = "barcelona";
barrio= "segovia";
dirección = "calle 68 # 25-256";

descripcion = `${pais} esta en ${continente} y ${pais} esta en el departamento ${departamento} tiene un barrio llamado ${barrio} con 200 personas que hablan ingles `
console.log(descripcion)

