/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[]}
 */
var maxNumber = function(nums1, nums2, k) {

    let answer = [];

    // Try every possible split
    for (let take1 = 0; take1 <= k; take1++) {

        let take2 = k - take1;

        // Invalid split
        if (take1 > nums1.length || take2 > nums2.length) {
            continue;
        }

        // Get maximum subsequence from both arrays
        let part1 = getMaxSubsequence(nums1, take1);
        let part2 = getMaxSubsequence(nums2, take2);

        // Merge both subsequences
        let merged = merge(part1, part2);

        // Keep the maximum answer
        if (isGreater(merged, answer)) {
            answer = merged;
        }
    }

    return answer;
};


// Maximum subsequence of length k
function getMaxSubsequence(nums, k) {

    let stack = [];
    let remove = nums.length - k;

    for (let num of nums) {

        while (
            stack.length > 0 &&
            remove > 0 &&
            stack[stack.length - 1] < num
        ) {
            stack.pop();
            remove--;
        }

        stack.push(num);
    }

    return stack.slice(0, k);
}


// Merge two subsequences
function merge(a, b) {

    let result = [];

    let i = 0;
    let j = 0;

    while (i < a.length || j < b.length) {

        if (isGreater(a, b, i, j)) {
            result.push(a[i]);
            i++;
        } else {
            result.push(b[j]);
            j++;
        }
    }

    return result;
}


// Compare remaining elements
function isGreater(a, b, i = 0, j = 0) {

    while (
        i < a.length &&
        j < b.length &&
        a[i] === b[j]
    ) {
        i++;
        j++;
    }

    // b finished
    if (j === b.length) {
        return true;
    }

    // a finished
    if (i === a.length) {
        return false;
    }

    return a[i] > b[j];
}