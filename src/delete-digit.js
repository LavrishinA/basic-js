const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
    let arr = String(n).split("");
    let resultArr = [];
    [...arr].forEach((_, i, array) => {
        arr.splice(i, 1);
        resultArr.push(arr);
        arr = [...array];
    });

    resultArr = resultArr.map((elem) => Number(elem.join("")));
    return Math.max(...resultArr);
}

module.exports = {
    deleteDigit,
};
