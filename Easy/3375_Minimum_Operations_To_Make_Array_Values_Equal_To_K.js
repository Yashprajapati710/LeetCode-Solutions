/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    let set = new Set();

for(let num of nums){
    if(num < k){
        return -1;
    }
    if(num > k){
        set.add(num);
    }
}

return set.size;
    
};