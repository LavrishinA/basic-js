const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
    let root = [...s2];
    let result = [];
    [...s1].forEach((elem) => {
        let current = root.indexOf(elem);
        if (current !== -1) {
            result.push(root.splice(current, 1));
        }
    });
    return result.length;
}

module.exports = {
    getCommonCharacterCount,
};
