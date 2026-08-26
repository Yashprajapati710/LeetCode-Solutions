/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
    let index = word.indexOf(ch);

    if (index === -1) {
        return word;
    }

    let prefix = word.slice(0, index + 1);
    let remaining = word.slice(index + 1);

    prefix = prefix.split("").reverse().join("");
    return prefix + remaining;

};