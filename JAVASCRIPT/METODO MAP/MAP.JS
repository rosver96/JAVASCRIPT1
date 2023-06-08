// Crear un nuevo Map
const miMapa = new Map();

// Agregar elementos al Map
miMapa.set('clave1', 'valor1');
miMapa.set('clave2', 'valor2');
miMapa.set('clave3', 'valor3');

// Obtener el tamaño del Map
console.log('Tamaño del Map:', miMapa.size);

// Obtener un valor del Map
console.log('Valor de clave2:', miMapa.get('clave2'));

// Comprobar si una clave existe en el Map
console.log('¿Existe clave3?', miMapa.has('clave3'));

// Recorrer el Map utilizando un bucle for...of
for (const [miClave, miValor] of miMapa) {
  console.log(miClave, miValor);
}

// Eliminar un elemento del Map
miMapa.delete('clave2');

// Vaciar el Map
miMapa.clear();

//************************************************************************************************** */
// metodo map.keys
const map1 = new Map();

map1.set('0', 'foo');
map1.set(1, 'bar');

const iterator1 = map1.keys();

console.log(iterator1.next().value);
// Expected output: "0"

console.log(iterator1.next().value);
// Expected output: 1


//************************************************************************************************** */
// metodo.values
const map2= new Map();

map1.set('0', 'foo');
map1.set(1, 'bar');

const iterator2 = map1.values();

console.log(iterator2.next().value);
// Expected output: "foo"

console.log(iterator2.next().value);
// Expected output: "bar"


//************************************************************************************************** */
//metodo.forEach
function logMapElements(value, key, map) {
    console.log(`m[${key}] = ${value}`);
  }
  
  new Map([['foo', 3], ['bar', {}], ['baz', undefined]])
    .forEach(logMapElements);
  
  // Expected output: "m[foo] = 3"
  // Expected output: "m[bar] = [object Object]"
  // Expected output: "m[baz] = undefined"
  


