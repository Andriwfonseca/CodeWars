/*fazer uma função que pode tomar qualquer inteiro não
 negativo como um argumento e retorná-lo com seus dígitos
  em ordem decrescente.
  exemplo: 123456 , 59432
  resultado: 654321 , 95432 */

function descendingOrder(n){
    let resultado = n.toString().split('').sort().reverse();
    return parseInt(resultado.join(''));
}  