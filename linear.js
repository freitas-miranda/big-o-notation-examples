/*
# Linear O(n)
A complexidade linear ocorre quando o tempo de execução de um algoritmo cresce proporcionalmente ao tamanho da entrada.
Então quando temos uma lista com n de entrada para obter o número desejado, deverá percorrer ela por inteiro, ou seja n vezes.
Nesse exemplo, o método somarNumerosDaLista percorre todos os elementos do array para realizar a soma deles.
*/

function somarNumerosDaLista(lista) {
  let execucoes = 1;
  let soma = 0;

  for (let i = 0; i < lista.length; i++) {
    console.log(`${execucoes}ª execução`);

    soma += lista[i];

    execucoes++;
  }
  return soma;
}


const numeros = [23, 4, 2, 1, 3, 5, 60, 12];
const soma = somarNumerosDaLista(numeros);
console.log(`A soma dos números é ${soma}`);
