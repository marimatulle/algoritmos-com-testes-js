const tamanhoMaximo = 5;
let par = [];
let impar = [];
let backup = [];

const imprimeVetor = (nome, item, index) => {
  console.log(`${nome}[${index}] = ${item}`); //par[0] = 4
};

const verificaEspaco = (lista, nome) => {
  if (lista.length == tamanhoMaximo) {
    lista.forEach((item, index) => imprimeVetor(nome, item, index));
    backup.push(lista);
    return [];
  }
  return lista;
};

const classifica = (item) => {
  if (item % 2 == 0) {
    par.push(item);
    par = verificaEspaco(par, 'par');
  } else {
    impar.push(item);
    impar = verificaEspaco(impar, 'impar');
  }
};

const preenchimento = (entrada) => {
  entrada.forEach(classifica);
  impar.forEach((item, index) => imprimeVetor('impar', item, index));
  par.forEach((item, index) => imprimeVetor('par', item, index));
  return [...backup, par, impar];
};

module.exports = { preenchimento };
