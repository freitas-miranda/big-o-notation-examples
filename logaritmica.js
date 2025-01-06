/*
# Logarítmica O(log n)
É quando o algoritmo reduz pela metade o tamanho da entrada a cada iteração.
Um exemplo para a notação O(log n) é a busca binária: Para uma lista de 16 elementos, são necessários 4 passos no pior caso log2(16) = 4
*/

function buscaBinaria(listaOrdenada, numeroBuscado) {
  let execucoes = 1;
  let indiceEsquerda = 0;
  let indiceDireita = listaOrdenada.length - 1;


  while (indiceEsquerda <= indiceDireita) {
    console.log(`${execucoes}ª execução`);

    const indiceMeio = Math.floor((indiceEsquerda + indiceDireita) / 2);
    const numeroMeio = listaOrdenada[indiceMeio];  

    if (numeroMeio === numeroBuscado) {
      return indiceMeio;
    }

    if (numeroMeio > numeroBuscado) {
      indiceDireita = indiceMeio - 1;
    } else {
      indiceEsquerda = indiceMeio + 1;
    }

    execucoes++;
  }

  return null;
}

const numerosOrdenados = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const numeroBuscado = 1;
const resultadoBusca = buscaBinaria(numerosOrdenados, numeroBuscado);

if (resultadoBusca !== null) {
  console.log(`O número ${numeroBuscado} foi encontrado no indice ${resultadoBusca}`);
} else {
  console.log(`O número ${numeroBuscado} não foi encontrado`);
}
