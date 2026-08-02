/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    let totalSum = nums.reduce((sum,num) => sum + num, 0);

let leftSum = 0;
let answer = [];

for(let num of nums){
    totalSum -= num;

    answer.push(Math.abs(leftSum - totalSum));
    leftSum += num;
}
return answer;
    
};