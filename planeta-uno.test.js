const { planetaUno } = require('./planeta-uno');

describe('planeta uno', () => {
  test('se a > b retorne 1', () => {
    const resultado = planetaUno(12, 11);
    expect(resultado).toBe(1);
  });
  test('se a < b retorne 0', () => {
    const resultado = planetaUno(11, 12);
    expect(resultado).toBe(0);
  });
  test('se a === b retorne null', () => {
    const resultado = planetaUno(12, 12);
    expect(resultado).toBe(null);
  });
});
