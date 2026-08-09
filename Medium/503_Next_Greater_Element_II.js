/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    let n = nums.length;
let answer = new Array(n).fill(-1);
let stack = [];

for(let i = 0; i < 2 * n; i++){
    let index = i % n;

    while(stack.length > 0 && nums[stack[stack.length - 1]] < nums[index]){

        let prevIndex = stack.pop();
        answer[prevIndex] = nums[index];
    }

    if(i < n){
        stack.push(index);
    }
}

return answer;
    
};