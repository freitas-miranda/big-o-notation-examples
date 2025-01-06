/*
# Exponencial O(2^n)
É um dos piores casos de complexidade de algoritmos.
Ocorre quando o tempo de execução de um algoritmo dobra a cada aumento unitário no tamanho da entrada n.
Um exemplo clássico é o cálculo da sequência de Fibonacci.
A abordagem recursiva para calcular o n-ésimo número da sequência de Fibonacci é um exemplo clássico de complexidade O(2^n).
*/

let execucoes = 0;

function fibonacci(numero) {
  execucoes++;
  console.log(`${execucoes}ª execução!`);

  if (numero < 1) {
    return 0;
  } else if (numero <= 2) {
    return 1;
  } 

  return fibonacci(numero - 1) + fibonacci(numero - 2);
}


function listaFibonacci(numero) {
  const lista = [];
  for (let i = 0; i < numero; i++) {
    lista.push(fibonacci(i));
  }
  return lista;
}

const posicaoLista = 10;
const resultadoLista = listaFibonacci(posicaoLista);
console.log(`A sequência de Fibonacci até o ${posicaoLista}º número é [${resultadoLista}]`);
