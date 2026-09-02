/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
    let row1 = "qwertyuiop";
    let row2 = "asdfghjkl";
    let row3 = "zxcvbnm";

    let result = [];

    for (let word of words) {
        let w = word.toLowerCase();

        let row = row1.includes(w[0]) ? row1 : row2.includes(w[0]) ? row2 : row3;

        let valid = true;

        for (let ch of w) {

            if (!row.includes(ch)) {
                valid = false;
                break;
            }
        }

        if (valid) {
            result.push(word);
        }
    }

    return result;

};