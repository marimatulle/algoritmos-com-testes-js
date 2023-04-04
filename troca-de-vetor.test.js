const { troca } = require('./troca-de-vetor');

describe('Troca de vetor', () => {
  test('Inverte ordem de um vetor N[20]', () => {
    const lista = Array.from(Array(20).keys());
    const resultado = troca(lista);
    expect(resultado).toEqual([
      19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0,
    ]);
  });
});
