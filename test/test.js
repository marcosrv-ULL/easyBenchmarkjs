const {fastBench} = require('../src/easybenchmark');
const should = require('chai').should();

const sumOfSquares = (number1, number2) => {
    return (number1 ^ 2) + (number2 ^ 2);
}

const sortingMethod = (vectorTosort) => {
    return fruits.sort();
}

describe('Easy BenchMark tests', () => {
  it('funciona para la suma de cuadrados', () => {
    constantFold(test1.example).should .equal(test1.result);
  });
  it('funciona para un metodo de sorting', () => {
    constantFold(test1.example).should .equal(test1.result);
  });
  it('funciona con veces de ejecución en grandes cantidades', () => {
    constantFold(test1.example).should .equal(test1.result);
  });
});