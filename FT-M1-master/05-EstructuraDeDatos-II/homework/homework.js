"use strict";

/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su value (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un value o un callback. En el primer caso, buscamos un nodo cuyo value coincida con lo buscado; en el segundo, buscamos un nodo cuyo value, al ser pasado como parámetro del callback, retorne true. 
  EJEMPLO 
  search(3) busca un nodo cuyo value sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo value sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/
class LinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    let node = new Node(value);
    let actual = this.head;

    if (!actual) {
      this.head = node;
      return node;
    }

    while (actual.next) {
      actual = actual.next;
    }

    actual.next = node;
    return node;
  }

  remove() {
    if (!this.head) {
      return null;
    }

    let eliminado = null;

    if (!this.head.next) {
      eliminado = this.head.value;
      this.head = null;
      return eliminado;
    }

    let actual = this.head;
    let anterior = null;

    while (actual.next) {
      anterior = actual;
      actual = actual.next;
    }

    anterior.next = null;
    eliminado = actual.value;

    return eliminado;
  }

  search(input) {
    let actual = this.head;

    while (actual) {
      if (typeof input === "function") {
        if (input(actual.value)) {
          return actual.value;
        }
      } else {
        if (actual.value === input) {
          return actual.value;
        }
      }

      actual = actual.next;
    }

    return null;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/* EJERCICIO 2
Implementar la clase HashTable.
Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-value (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave value (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el value que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-value en un bucket específico (determinado al hashear la clave)
*/

class HashTable {
  constructor(numBuckets = 35) {
    this.numBuckets = numBuckets;
    this.table = new Array(this.numBuckets).fill(null).map(() => []);
  }

  hash(clave) {
    if (typeof clave !== "string") {
      throw TypeError("La clave debe ser un string");
    }

    let resultado = 0;

    for (let i = 0; i < clave.length; i++) {
      resultado += clave.charCodeAt(i);
    }

    return resultado % this.numBuckets;
  }

  set(clave, valor) {
    if (!this.table[this.hash(clave)]) {
      this.table[this.hash(clave)] = {};
    }
    this.table[this.hash(clave)][clave] = valor;
  }

  get(clave) {
    return this.table[this.hash(clave)][clave];
  }

  hasKey(clave) {
    return !!this.table[this.hash(clave)][clave];
  }
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
