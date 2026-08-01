/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
     let maxWords = 0;

    for (let sentence of sentences) {
        let words = sentence.split(" ").length;
        maxWords = Math.max(maxWords, words);
    }

    return maxWords;
    
};