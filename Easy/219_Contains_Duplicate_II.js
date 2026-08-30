/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];

        if (map.has(num)) {
            let previousIndex = map.get(num);

            if (i - previousIndex <= k) {
                return true;
            }
        }

        map.set(num, i);
    }

    return false;


};