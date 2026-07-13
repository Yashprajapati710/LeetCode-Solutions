/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {

    let ans = new Array(nums.length);

    let i = 0;
    let j = nums.length - 1;
    let k = nums.length - 1;

    while(i <= j){

        if(Math.abs(nums[i]) > Math.abs(nums[j])){

            ans[k] = nums[i] * nums[i];
            i++;
        }
        else{
            ans[k] = nums[j] * nums[j];
            j--;
        }
        k--;
    }
    return ans;
};