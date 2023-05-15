'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  size(contador = 1) {
    this.left && (contador += this.left.size());
    this.right && (contador += this.right.size());
    return contador;
  }

  insert(dato) {
    if (dato < this.value) {
      if (!this.left) {
        this.left = new BinarySearchTree(dato);
      } else {
        this.left.insert(dato);
      }
    } else {
      if (!this.right) {
        this.right = new BinarySearchTree(dato);
      } else {
        this.right.insert(dato);
      }
    }
  }

  contains(dato) {
    if (this.value === dato) return true;

    if (dato < this.value) {
      if (!this.left) return false;
      return this.left.contains(dato);
    } else if (dato > this.value) {
      if (!this.right) return false;
      return this.right.contains(dato);
    }
  }

  depthFirstForEach(cb, orden) {
    switch (orden) {
      case "post-order":
        this.left && this.left.depthFirstForEach(cb, orden);
        this.right && this.right.depthFirstForEach(cb, orden);
        cb(this.value);
        return;

      case "pre-order":
        cb(this.value);
        this.left && this.left.depthFirstForEach(cb, orden);
        this.right && this.right.depthFirstForEach(cb, orden);
        return;

      default:
        this.left && this.left.depthFirstForEach(cb, orden);
        cb(this.value);
        this.right && this.right.depthFirstForEach(cb, orden);
        return;
    }
  }

  breadthFirstForEach(cb, array = []) {
    this.left !== null && array.push(this.left);
    this.right !== null && array.push(this.right);
    cb(this.value);
    array.length > 0 && array.shift().breadthFirstForEach(cb, array);
  }
}

let prueba = new BinarySearchTree(20);
prueba.insert(15);
prueba.insert(17);
prueba.insert(5);
prueba.insert(0);
prueba.insert(1);
prueba.insert(4);
prueba.insert(10);

console.log(prueba.size());

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
