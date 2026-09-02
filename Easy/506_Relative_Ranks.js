/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
    let sorted = [...score].sort((a, b) => b - a);

    let result = [];

    for (let i = 0; i < score.length; i++) {

        let rank = sorted.indexOf(score[i]) + 1;

        if (rank === 1) {
            result.push("Gold Medal");
        } else if (rank === 2) {
            result.push("Silver Medal");
        } else if (rank === 3) {
            result.push("Bronze Medal");
        } else {

            result.push(String(rank));

        }
    }

    return result;

};