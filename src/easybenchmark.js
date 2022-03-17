/**
 * Universidad de la Laguna
 * Grado en ingeniería informatica
 * Programación de aplicaciones interactivas
 * @author Marcos Rodríguez Vega
 * @since Feb 17 03 2022
 * @desc  The main functions of the module
 */

/**
 * functions that return the time spend to execute a function
 * @param {function} func the function object that will be call
 * @param {object[]} input the input of that function whatever type
 * @param {number} timeToBeExecute time to be execute to calculate then a mean, to avoid anomaly behaviour
 * @return {array} the time elapse in milliseconds
 */
const fastBench = (func, input, timeToBeExecute = 10) => {
    let totalTime = 0;
    for (let i = 0; i < timeToBeExecute; i++) {
        const start = new Date;
        func(...input);
        const finish = new Date;
        totalTime += finish - start;
    }
    return (totalTime / timeToBeExecute); // return the mean
}

module.exports = {
    fastBench
};
