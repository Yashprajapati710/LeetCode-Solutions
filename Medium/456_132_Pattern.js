/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function(nums) {
    let stack = [];
let second = -Infinity;

for(let i = nums.length - 1; i >= 0; i--){

    if(nums[i] < second){
        return true;
    }

    while(stack.length > 0 && nums[i] > stack[stack.length - 1]){

        second = stack.pop();
    }
    stack.push(nums[i]);
}
return false;
    
};