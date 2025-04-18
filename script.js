// ## Números:

// 1. Escribe una función que tome dos números como argumentos y devuelva su suma.
function suma (num1, num2){
    return num1+num2;
}
console.log(suma(2,2));
// 2. Escribe una función que tome dos números como argumentos y devuelva su resta.
function resta (num1, num2){
    return num1 - num2;
}
console.log(resta(12,2));
// 3. Escribe una función que tome dos números como argumentos y devuelva su producto.
function producto (num1, num2){
    return num1*num2;
}
console.log(producto(5,5));
// 4. Escribe una función que tome dos números como argumentos y devuelva su división.
function division (num1, num2){
    return num1/num2;
}
console.log("4:" + division(70,10));
// 5. Escribe una función que tome un número base y un exponente y devuelva el resultado de elevar el número base a la potencia dada.
function elevar(base, exponente) {
    return Math.pow(base, exponente);
}
console.log("5:" + elevar(2, 3)); //8 voznosit v stepen
// 6. Escribe una función que tome dos números como argumentos y devuelva el resto de la división del primer número entre el segundo.
function obtenerResto(dividendo, divisor) {
    return dividendo % divisor;
}
console.log(obtenerResto(10, 3)); 
// 7. Escribe una función que tome un número como argumento y devuelva su raíz cuadrada.
console.log(Math.sqrt(36)); 
// 8. Escribe una función que tome un número como argumento y devuelva su valor absoluto.
console.log(Math.abs(-8));
// 9. Escribe una función que tome un número decimal como argumento y devuelva el número redondeado al entero más cercano.
console.log(Math.round(6.876));
// 10. Escribe una función que genere y devuelva un número aleatorio entre 0 y 1.
console.log(Math.random());

//## Letras:
console.log("-------------------------");

// 1. Escribe una función que tome dos cadenas de texto como argumentos y devuelva su concatenación.
function wordsTogather(word1, word2) {
    return word1 + " " + word2;
}
console.log(wordsTogather("Mi", "Mumka"));
// 2. Escribe una función que tome una cadena de texto como argumento y devuelva su longitud.
texto = "kdfjgJHGBJHBKJnkljreglergmv leHGVHGJekwjgñ lkmg k ñaklmgJHBKJlwkem ll"
console.log(texto.length);
// 3. Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena en mayúsculas.
console.log(texto.toUpperCase());
// 4. Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena en minúsculas.
console.log(texto.toLowerCase());
// 5. Escribe una función que tome una cadena de texto y un índice como argumentos, y devuelva el carácter en esa posición.
function caracterEnIndice(texto, indice) {
    return texto.charAt(indice);
}
console.log(caracterEnIndice("jshdfgweljkghl", 7));
// 6. Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena invertida.
texto = "sjdhvbjhvbHHJJKÑ"
console.log(texto.split("").reverse().join("")); 

/* .split("") → convierte la cadena en un array de caracteres

.reverse() → invierte el orden del array

.join("") → vuelve a unir los caracteres en una sola cadena */


// 7. Escribe una función que tome una cadena de texto y un carácter como argumentos, y devuelva la cantidad de veces que el carácter aparece en la cadena.
function contarCaracter(texto, caracter) {
    let contador = 0;
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === caracter) {
            contador++;
        }
    }
    return contador;
}
console.log(contarCaracter("What Was I Made For?", "a")); 
// 8. Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena sin espacios en blanco.
function eliminarEspacios(texto) {
    return texto.replace(/\s/g, "");
}
console.log(eliminarEspacios("Hola mundo con espacios")); 

/* 
\s → representa cualquier tipo de espacio en blanco (espacio, tabulación, salto de línea)
g → significa "global", o sea, reemplaza todos los espacios, no solo el primero
"" → los reemplaza por nada 
*/

// 9. Escribe una función que tome una cadena de texto como argumento y devuelva true si es un palíndromo (se lee igual de izquierda a derecha y de derecha a izquierda), o false si no lo es.
function esPalindromo(cadena) {
    // Eliminar espacios y convertir a minúsculas para evitar errores
    const cadenaLimpiada = cadena.toLowerCase().replace(/\s/g, "");
    // Crear una copia invertida de la cadena
    const cadenaInvertida = cadenaLimpiada.split("").reverse().join("");
    // Comparar la cadena original con la invertida
    return cadenaLimpiada === cadenaInvertida;
  }
  console.log(esPalindromo("radar"));   // Output: true
  console.log(esPalindromo("madam"));   // Output: true
  console.log(esPalindromo("hola"));    // Output: false
  console.log(esPalindromo("A man, a plan, a canal: Panama"));  // Output: true (después de limpiar)
// 10. Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena con la primera letra de cada palabra en mayúscula.
function capitalizarCadaPalabra(texto) {
    return texto
        .split(" ")
        .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1))
        .join(" ");
}
console.log(capitalizarCadaPalabra("hola mundo desde javascript"));
/* 
.split(" ") → separa el texto por palabras
.map(...) → transforma cada palabra:
charAt(0).toUpperCase() → primera letra en mayúscula
slice(1) → resto de la palabra sin modificar
.join(" ") → vuelve a unir las palabras con espacios 
*/

//## Arrays:
console.log("-------------------------");

//1. Escribe una función que tome un array de números como argumento y devuelva la suma de todos sus elementos.
function sumarElementos(array) {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        suma += array[i];
    }
    return suma;
}
const numeros = [1, 2, 3, 4, 5];
console.log(sumarElementos(numeros));
//2. Escribe una función que tome un array de números como argumento y devuelva el promedio de todos sus elementos.

function promedio(array){
    let suma = 0;
    for(let i = 0; i < array.length; i++){
        suma += array[i];
    } 
    return suma/array.length;
}
console.log(promedio(numeros));
//3. Escribe una función que tome un array de números como argumento y devuelva el array ordenado de forma ascendente.
function ordenarAscendente(array) {
    return array.slice().sort((a, b) => a - b);
    //slice() se usa para no modificar el array original (hace una copia).
    //sort((a, b) => a - b) asegura un orden numérico (por defecto sort() ordena como strings).
}
const list = [42, 10, 3, 99, 1];
const ordenados = ordenarAscendente(list);
console.log(ordenados);
//4. Escribe una función que tome un array de números y un número como argumentos, y devuelva un nuevo array con los elementos mayores al número dado.
function filtrarMayoresQue(array, numero) {
    return array.filter(elemento => elemento > numero);
  }
const resultado = filtrarMayoresQue(list, 10);
console.log(resultado);

/* El símbolo => en JavaScript se llama "arrow function" (función flecha). Es una forma más corta y moderna de escribir funciones.
📌 Ejemplo tradicional:
const sumar = function(a, b) {
  return a + b;
};
🔁 Equivalente con arrow function:
const sumar = (a, b) => a + b; */

//5. Escribe una función que tome dos arrays como argumentos y devuelva un nuevo array con todos los elementos de ambos arrays.
function combinarArrays(array1, array2) {
    return array1.concat(array2);
  }
const a = [1, 2, 3];
const b = [4, 5, 6];
const combinado = combinarArrays(a, b);
console.log(combinado); 

/* function combinarArrays(array1, array2) {
    return [...array1, ...array2];
  } */
//6. Escribe una función que tome un array de números como argumento y devuelva el número máximo dentro del array.
//El operador spread (...) “expande” los elementos del array como argumentos individuales para Math.max
function encontrarMaximo(array) {
    return Math.max(...array);
  }
console.log(encontrarMaximo(list));
console.log(Math.max(...list));
//7. Escribe una función que tome un array de números como argumento y devuelva el número mínimo dentro del array.
function encontrarMinimo(array) {
    return Math.min(...array);
  }
console.log(encontrarMinimo(list));
console.log(Math.min(...list));
//8. Escribe una función que tome un array y un elemento como argumentos, y devuelva la cantidad de veces que el elemento aparece en el array.
function contarOcurrencias(array, elemento) {
    let contador = 0;
    for (let item of array) {
      if (item === elemento) {
        contador++;
      }
    }
    return contador;
  }
/*   function contarOcurrencias(array, elemento) {
    return array.filter(item => item === elemento).length;
  } */
const frutas = ['manzana', 'banana', 'manzana', 'pera', 'manzana'];
console.log(contarOcurrencias(frutas, "manzana"));
//9. Escribe una función que tome un array como argumento y devuelva un nuevo array sin elementos duplicados.
//Opción 1: Usando Set
function eliminarDuplicados(array) {
    return [...new Set(array)];
}
/*   
🔍 ¿Qué hace esto?
Set es una estructura de datos que solo guarda valores únicos. 
Al hacer new Set(array), automáticamente elimina los duplicados. 
Luego usamos el operador spread (...) para convertir ese Set de nuevo a un array. */
const numbers = [1, 2, 2, 3];
const result = eliminarDuplicados(numbers);
console.log(result);

//Opción 2: Usando filter() + indexOf()
function eliminarDuplicados(array) {
    return array.filter((item, index) => array.indexOf(item) === index);
  }
/*   🔍 ¿Cómo funciona?
  array.filter() recorre cada elemento.
  array.indexOf(item) devuelve la primera posición donde aparece ese elemento.
  Si indexOf(item) === index, quiere decir que es la primera vez que aparece → lo dejamos.
  Si no es la primera vez, lo ignoramos (porque ya lo agregamos antes).
   */
  
//10. Escribe una función que tome un array como argumento y devuelva un nuevo array con los elementos en orden inverso.
function invertirArray(array) {
    return array.slice().reverse();
  }

/*   
slice() crea una copia del array original (para no modificarlo).
reverse() invierte el orden de los elementos en esa copia. */

const original = [1, 2, 3, 4, 5];
const invertido = invertirArray(original);
console.log(invertido);
console.log(original);

//## Objetos literales:
console.log("-------------------------");

//1. Escribe una función que tome un objeto literal con una propiedad "nombre" y devuelva el valor de esa propiedad.
function obtenerNombre(objeto) {
    return objeto.nombre;
}
const persona = {
    nombre: "Mariia",
    edad: 25
};
console.log(obtenerNombre(persona));  
//2. Escribe una función que tome un objeto literal con una propiedad "edad" y un número como argumentos, y actualice el valor de la propiedad "edad" con el número dado.
function actualizarEdad(objeto, nuevaEdad) {
    objeto.edad = nuevaEdad;
    return objeto;
}
console.log(actualizarEdad(persona, 30));
//3. Escribe una función que tome un objeto literal y una cadena de texto como argumentos, y agregue una nueva propiedad al objeto con la cadena de texto como nombre y un valor inicial de null.
function agregarPropiedad(objeto, nombrePropiedad, valor = null) {
    objeto[nombrePropiedad] = valor;
    return objeto;
  }

  const humano = {
    nombre: "Vita"
  };
  agregarPropiedad(humano, "edad", 29);
  console.log(humano);
  // Resultado: { nombre: "Vita", edad: 29 }
  
  agregarPropiedad(humano, "ciudad");
  console.log(humano);
//4. Escribe una función que tome un objeto literal y una cadena de texto como argumentos, y elimine la propiedad del objeto con el nombre dado.
function eliminarPropiedad(objeto, nombrePropiedad) {
    delete objeto[nombrePropiedad];
    return objeto;
  }
  const chica = {
    nombre: "Ana",
    edad: 30,
    ciudad: "Madrid"
  };
  
  eliminarPropiedad(chica, "edad");
  console.log(chica);
//5. Escribe una función que tome un objeto literal como argumento y devuelva la cantidad de propiedades que tiene.
console.log(Object.keys(chica).length);
/* ¿Qué hace Object.keys()?
Devuelve un array con los nombres (claves) de las propiedades del objeto.
Luego usamos .length para contar cuántas son. */

//6. Escribe una función que tome un objeto literal y una cadena de texto como argumentos, y devuelva true si el objeto tiene una propiedad con ese nombre, o false si no la tiene.
console.log(chica.hasOwnProperty("nombre"));
console.log("nombre" in chica);
//7. Escribe una función que tome un objeto literal como argumento y devuelva un array con todos los valores de sus propiedades.
console.log(Object.values(chica));
//8. Escribe una función que tome dos objetos literales como argumentos y devuelva true si tienen las mismas propiedades y los mismos valores en esas propiedades, o false si son diferentes.
function compararObjetos(obj1, obj2) {
    const claves1 = Object.keys(obj1);
    const claves2 = Object.keys(obj2);
  
    if (claves1.length !== claves2.length) {
      return false;
    }
  
    for (let clave of claves1) {
      if (obj1[clave] !== obj2[clave]) {
        return false;
      }
    }
  
    return true;
  }
const objA = { nombre: "Vita", edad: 25 };
const objB = { nombre: "Vita", edad: 25 };
const objC = { nombre: "Vita", edad: 30 };

console.log(compararObjetos(objA, objB));
console.log(compararObjetos(objA, objC));
//9. Escribe una función que tome un objeto literal como argumento y devuelva una copia exacta de ese objeto.
new_objA = {...objA};
console.log(new_objA);

//10. Escribe una función que tome dos objetos literales como argumentos y devuelva un nuevo objeto con todas las propiedades de ambos objetos. Si hay propiedades con el mismo nombre, el valor del segundo objeto deberá prevalecer.
const objD = { nombre: "Ana", edad: 25 };
const objE = { edad: 30, ciudad: "Madrid" };
const new_objDE = { ...objD, ...objE };
console.log(new_objDE);