const {fastBench} = require('../src/easybenchmark');
const should = require('chai').should();
const expect = require('chai').expect;

const sumOfSquares = (number1, number2) => {
    return (number1 ^ 2) + (number2 ^ 2);
}

const sortingMethod = (vectorTosort) => {
    return vectorTosort.sort((a, b) => a - b);
}

describe('Easy BenchMark tests', () => {
  it('funciona para la suma de cuadrados', () => {
    expect(fastBench(sumOfSquares, [10,10])).to.satisfy(function(s){
        return s === null || typeof s == 'number'
    });
  });
  it('funciona para un metodo de sorting', () => {
    let vector1 = [10, 9, 8, 7, 6, 5, 4, 2, 1, 3, 0];
    expect(fastBench(sortingMethod, [vector1])).to.satisfy(function(s){
        return s === null || typeof s == 'number'
    });
  });
  it('funciona con veces de ejecución en grandes cantidades', () => {
    expect(fastBench(sumOfSquares, [10,10], 1000)).to.satisfy(function(s){
        return s === null || typeof s == 'number'
    });
  });
  it('funciona con veces de ejecución en grandes cantidades con metodos pesados', () => {
    let vector1 = [10, 9, 8, 7, 6, 5, 4, 2, 1, 3, 0];
    expect(fastBench(sumOfSquares, [vector1], 10000)).to.satisfy(function(s){
        return s === null || typeof s == 'number'
    });
  });
});