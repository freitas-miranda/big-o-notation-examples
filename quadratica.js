/*
# Quadrática O(n²)
Ocorre quando o tempo de execução cresce proporcionalmente ao quadrado do tamanho da entrada n.
Em uma função quadrática, é comum possuir loops aninhados.
Um exemplo clássico é o Bubble Sort.
O código Bubble Sort percorre o array n vezes e para cada iteração i, ele faz comparações e trocas.
*/

function bubbleSort(lista) {
  let execucoes = 1;
  let listaOrdenada = lista.slice();

  for (let i = 0; i < listaOrdenada.length; i++) {
    for (let j = 0; j < listaOrdenada.length; j++) {
      console.log(`${execucoes}ª execução: i=${i} j=${j} Lista: [${listaOrdenada}]`);

      if (listaOrdenada[j] > listaOrdenada[j + 1]) {
        const temp = listaOrdenada[j];
        listaOrdenada[j] = listaOrdenada[j + 1];
        listaOrdenada[j + 1] = temp;
      }
      execucoes++;
    }
  }

  return listaOrdenada;
}

const numeros = [60, 23, 2, 3, 5, 12, 1];
bubbleSort(numeros);

