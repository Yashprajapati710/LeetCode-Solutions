/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
    let result = 0;
    for (let ch of columnTitle) {
        let value = ch.charCodeAt(0) - 64;

        result = result * 26 + value;
    }
    return result;

};