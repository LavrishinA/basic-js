const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
    return (catsCount = matrix
        .map((elem) => elem.filter((elem) => elem === "^^"))
        .reduce((sum, cur) => sum + cur.length, 0));
}

module.exports = {
    countCats,
};
