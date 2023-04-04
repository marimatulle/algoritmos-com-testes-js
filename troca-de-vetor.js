let resultado = [];
const organiza = (primeiroItem, index, lista) => {
  const ultimaPosicao = lista.length - 1;
  const condicaoDeParada = lista.length / 2;
  if (index < condicaoDeParada) {
    const posicaoDeTroca = ultimaPosicao - index;
    const segundoItem = lista[posicaoDeTroca];
    lista[index] = segundoItem;
    lista[posicaoDeTroca] = primeiroItem;
  }

  return;
};

const imprimeResultado = (item, index) => {
  console.log(`lista[${index}]=${item}`); //N[i] = Y
};

const troca = (lista) => {
  resultado = lista;
  lista.forEach((item, index) => organiza(item, index, resultado));
  resultado.forEach(imprimeResultado);
  return resultado;
};

module.exports = { troca };
