// Constante O(1)
function retonaNumero(numeros, posicao) {
  const numero = numeros[posicao];
  return numero;    
}

const numeros = [4, 2, 1, 3, 5];
const indexPrimiraPosicao = 0;
const numeroPrimeiraPosicao = retonaNumero(numeros, indexPrimiraPosicao);

console.log(numeroPrimeiraPosicao); 
