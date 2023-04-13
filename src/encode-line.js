const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
    if (!str.length) return "";
    const result = str.match(/(\w)\1*/g);

    return result.map((elem) => `${elem.length === 1 ? "" : elem.length}${[...new Set(elem)]}`).join("");
}

module.exports = {
    encodeLine,
};
