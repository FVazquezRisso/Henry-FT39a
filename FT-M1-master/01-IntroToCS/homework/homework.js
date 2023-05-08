"use strict";

  function BinarioADecimal(num) {
    // 11001 = 25
    // <------- leyendo de der a izq
    //    1 * 2 ** 0  = 1
    //    0 * 2 ** 1  = 0
    //    0 * 2 ** 2  = 0
    //    1 * 2 ** 3  =  8
    //    1 * 2 ** 4  =  16

    return String(num).split("").reverse().map((e, i) => {

      return Number(e) * 2 ** i

    }).reduce((acumulador, valor) => acumulador + valor)

  }
  BinarioADecimal(11001);

function DecimalABinario(num) {
  // 91 = 1011011
  // 91 / 2 = 45 residuo 1
  // 45 / 2 = 22 residuo 1
  // 22 / 2 = 11 residuo 0
  // 11 / 2 = 5 residuo 1
  // 5 / 2 = 2 residuo 1
  // 2 / 2 = 1 residuo 0
  // 1 / 2 = 0 residuo 1

  let temp = num 
  let resultado = ""

  do {

    if (temp % 2 === 0) {

     resultado += "0"
    } else {

      resultado += "1"
    }

    temp = Math.floor(temp / 2)

  } while(temp > 0)

  return resultado.split("").reverse().join("")
}
DecimalABinario(91);

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
