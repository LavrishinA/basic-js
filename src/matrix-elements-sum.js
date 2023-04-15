const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
    let sum = 0;
    let colLength = matrix[0].length;

    for (let i = 0; i < colLength; i++) {
        let colSum = 0;
        for (let j = 0; j < matrix.length; j++) {
            if (matrix[j][i] === 0) break;
            colSum += matrix[j][i];
        }

        sum += colSum;
    }

    return sum;
}

module.exports = {
    getMatrixElementsSum,
};
