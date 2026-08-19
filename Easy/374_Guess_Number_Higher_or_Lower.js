/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {

    let start = 1;
    let end = n;

    while (start <= end) {

        let mid = Math.floor((start + end) / 2);

        if (guess(mid) === 0) {
            return mid;
        }

        if (guess(mid) === -1) {
            // Pick is smaller than mid
            end = mid - 1;
        } else {
            // Pick is greater than mid
            start = mid + 1;
        }
    }

    return -1;
};