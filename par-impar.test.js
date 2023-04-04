const { preenchimento } = require('./par-impar');

describe('Par e impar', () => {
  test('Agrupa lista de numeros em grupos de 5 itens separando pares e impares', () => {
    const entrada = [1, 3, 4, -4, 2, 3, 8, 2, 5, -7, 54, 76, 789, 23, 98];
    const resultado = preenchimento(entrada);
    expect(resultado).toEqual([
      [4, -4, 2, 8, 2], // par
      [1, 3, 3, 5, -7], // impar
      [54, 76, 98], // resto par
      [789, 23], // resto impar
    ]);
  });
});
