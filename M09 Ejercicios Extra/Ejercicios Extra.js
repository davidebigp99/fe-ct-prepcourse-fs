/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var arreglo = [];
   
   for(var prop in objeto){
      var parClaveValor = [prop, objeto[prop]];
      arreglo.push(parClaveValor);
   }
   return arreglo;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var arrayString = string.split('').sort();

   var propiedadesObjeto = arrayString.filter(function(elemento, indice){
      return elemento !== arrayString[indice+1];
   })

   var conteoLetras = [];

   for(var i = 0; i < propiedadesObjeto.length; i++){
      var cont = 0;
      for (var j = 0; j < arrayString.length; j++) {
         if (propiedadesObjeto[i] === arrayString[j]) {
            cont++;
         }
      }
      conteoLetras.push(cont);
   }

   var objeto = {};
   for (var i = 0; i < propiedadesObjeto.length; i++) {
      objeto[propiedadesObjeto[i]] = conteoLetras[i];
   }

   return objeto;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var arrayMay = string.split('').filter(function(letra){
      return letra === letra.toUpperCase();
   })

   var arrayMin = string.split('').filter(function(letra){
      return letra !== letra.toUpperCase();
   })

   return arrayMay.join('') + arrayMin.join('');
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   function inverso(palabra){
      return palabra.split('').reverse().join('');
   }

   var arrayFrase = frase.split(' ').map(inverso);
   return arrayFrase.join(' ');
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var string = numero.toString();

   var stringInverso = string.split('').reverse().join('');

   if (string === stringInverso) {
      return "Es capicua";
   }
   return "No es capicua";
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var array = string.split('').filter(letra => (letra !== 'a' && letra !== 'b' && letra !== 'c'));
   return array.join('');
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   var n = arrayOfStrings.length;

   for (let i = 0; i < n - 1; i++) {
      // Iteramos desde el primer elemento hasta el (n-1)-i-ésimo elemento
      // ya que los últimos i elementos ya estarán en su posición correcta
      for (let j = 0; j < n - 1 - i; j++) {
        // Comparamos el elemento actual con el siguiente elemento
        if (arrayOfStrings[j].length > arrayOfStrings[j + 1].length) {
          // Si el elemento actual es mayor que el siguiente, los intercambiamos
          const temp = arrayOfStrings[j];
          arrayOfStrings[j] = arrayOfStrings[j + 1];
          arrayOfStrings[j + 1] = temp;
        }
      }
   }

   return arrayOfStrings;
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var arr = [];

   for (let i = 0; i < array1.length; i++) {
      for (let j = 0; j < array2.length; j++) {
         if (array1[i] === array2[j]) {
            arr.push(array1[i]);
            break;
         }
      }
   }

   return arr;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
