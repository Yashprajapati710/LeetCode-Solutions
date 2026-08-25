/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function (s) {
    let first = new Map();
    let maxLength = -1;

    for (let i = 0; i < s.length; i++) {
        let ch = s[i];
        if (!first.has(ch)) {
            first.set(ch, i);
        } else {
            let length = i - first.get(ch) - 1;
            maxLength = Math.max(maxLength, length);
        }
    }
    return maxLength;

};