const soma = (valor) => {
  const listaDeValores = valor.toString().split(''); //['2', '3']
  const listaNumerica = listaDeValores.map((item) => parseInt(item));
  return listaNumerica.reduce((total, item) => total + item, 0);
};

const calcula = (valor) => {
  let resultado = valor;
  while (resultado > 9) {
    resultado = soma(resultado);
  }
  return resultado;
};

const compara = (a, b) => {
  if (a > b) return 1;
  if (b > a) return 0;
};

const planetaUno = (entradaA, entradaB) => {
  if (entradaA === entradaB) return null;
  const resultadoA = calcula(entradaA);
  const resultadoB = calcula(entradaB);
  const resultado = compara(resultadoA, resultadoB);
  console.log(resultado);
  return resultado;
};

//planetaUno(entradaA, entradaB);
module.exports = { planetaUno };
