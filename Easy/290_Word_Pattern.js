/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {

    let words = s.split(" ");

    if (pattern.length !== words.length) {
        return false;
    }

    let patternToWord = new Map();
    let wordToPattern = new Map();

    for (let i = 0; i < pattern.length; i++) {

        let p = pattern[i];
        let word = words[i];

        // Pattern → Word check
        if (
            patternToWord.has(p) &&
            patternToWord.get(p) !== word
        ) {
            return false;
        }

        // Word → Pattern check
        if (
            wordToPattern.has(word) &&
            wordToPattern.get(word) !== p
        ) {
            return false;
        }

        patternToWord.set(p, word);
        wordToPattern.set(word, p);
    }

    return true;
};