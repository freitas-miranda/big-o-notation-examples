/*
# Log Linear O(n log n)
É uma combinação de complexidade logarítmica e linear.
Normalmente esse algoritmo é chamado de forma recursiva, onde a cada nível da recursão os elementos são visitados uma vez.
Algoritmos de ordenação eficiente que utilizam a complexidade Log Linear são Merge Sort e Quick Sort.
*/

function mergeSort(lista, lado = "", execucoes = 1) {
  console.log(`${execucoes}ª execução! ${lado} Lista: [${lista}]`);

  if (lista.length <= 1) {
    return lista;
  }

  const indiceMeio = Math.floor(lista.length / 2);
  const listaEsquerda = lista.slice(0, indiceMeio);
  const listaDireita = lista.slice(indiceMeio);
  
  execucoes++;  
  return merge(
    mergeSort(listaEsquerda, "Esquerda", execucoes), 
    mergeSort(listaDireita, "Direita", execucoes));
}

function merge(listaEsquerda, listaDireita) {
  let resultado = [];
  let indiceEsquerda = 0;
  let indiceDireita = 0;

  while (indiceEsquerda < listaEsquerda.length && indiceDireita < listaDireita.length) {
    if (listaEsquerda[indiceEsquerda] < listaDireita[indiceDireita]) {
      resultado.push(listaEsquerda[indiceEsquerda]);
      indiceEsquerda++;
    } else {
      resultado.push(listaDireita[indiceDireita]);
      indiceDireita++;
    }
  }

  return resultado.concat(listaEsquerda.slice(indiceEsquerda)).concat(listaDireita.slice(indiceDireita));
}


// const numeros = [];
// const numeros = [6];
// const numeros = [6, 5];
// const numeros = [6, 5, 3];
const numeros = [23, 4, 2, 1, 3, 5, 60, 12, 33];
const listaOrdenada = mergeSort(numeros);
console.log(`Array ordenado [${listaOrdenada}]`);
