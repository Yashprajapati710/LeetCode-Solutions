/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let freq = new Array(101).fill(0);

let count = 0;

for (let num of nums){
    count += freq[num];
    freq[num]++;
}

return count;
    
};