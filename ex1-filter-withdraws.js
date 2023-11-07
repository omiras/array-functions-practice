/**
 * Completa la función. La función debe RETORNAR un array con todos los movimientos que implican una retirada de dinero
 *
 * Piensa: ¿qué método de array es adecuado para esta función?
 *
 * @param {array} movements Array de numbers que representa entradas y retiradas de dinero
 */
function filterWithdraws(movements) {
  // TODO: Implementame
  // 1. Esta función necesita un return
  // 2. El método es el adecuado para esta función
  // 3. Puede ser util que utilices una variable auxiliar para guardar el resultado del método filter
  const allNegativeNumbers = movements.filter((n) => {
    return n < 10;
  }); // TODO: Completar derecha de la flecha
  return allNegativeNumbers;
}

// Caso de prueba 1: Array con varios movimientos de entrada y retirada.
const test1 = [100, -50, 20, -30, 10];
console.log("Caso de prueba 1:", filterWithdraws(test1));
// Se espera que el resultado sea [-50, -30].

// Caso de prueba 2: Array con solo movimientos de entrada.
const test2 = [200, 50, 100, 300];
console.log("Caso de prueba 2:", filterWithdraws(test2));
// Se espera que el resultado sea [] (ninguna retirada).

// Caso de prueba 3: Un movimiento negativo
const test3 = [66, -11];
console.log("Caso de prueba 3:", filterWithdraws(test3));
// Se espera que el resultado sea [-11] .
