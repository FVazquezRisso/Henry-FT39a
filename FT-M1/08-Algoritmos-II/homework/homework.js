'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  if (array.length <= 1) return array;

  let puntero = array[~~(Math.random() * array.length)];
  let iguales = [];
  let menores = [];
  let mayores = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] < puntero) {
      menores.push(array[i]);
    } else if (array[i] > puntero) {
      mayores.push(array[i]);
    } else {
      iguales.push(array[i]);
    }
  }

  return [...quickSort(menores), ...iguales, ...quickSort(mayores)];
}

function mergeSort(arr) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  if (arr.length <= 1) return arr;

  let m1 = arr.slice(0, arr.length / 2);
  let m2 = arr.slice(arr.length / 2);

  arr = [];

  m1 = mergeSort(m1);
  m2 = mergeSort(m2);

  while (m1.length && m2.length) {
    if (m1[0] < m2[0]) {
      arr.push(m1.shift());
    } else {
      arr.push(m2.shift());
    }
  }
  return [...arr, ...m1, ...m2];
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
