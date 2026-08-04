/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var numberOfPairs = function(nums1, nums2, k) {
    let count = 0;

for(let num1 of nums1){

    if(num1 % k !== 0) continue;

    let value = num1 / k;

    for(let num2 of nums2){
        if(value % num2 === 0){
            count++;
        }
    }
}
return count;
    
};