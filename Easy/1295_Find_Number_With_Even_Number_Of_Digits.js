/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let count = 0;

for(let num of nums){
    let digit = num.toString().length;

    if(digit % 2 === 0){
        count++;
    }
}
return count;

    
};