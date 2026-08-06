/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumOfGoodNumbers = function(nums, k) {
    let sum = 0;

for(let i = 0; i < nums.length; i++){
    let good = true;

    if(i - k >= 0 && nums[i] <= nums[i - k]){
        good = false;
    }

    if(i + k < nums.length && nums[i] <= nums[i + k]){
        good = false;
    }

    if(good){

        sum += nums[i];
    }

}

return sum;
    
};