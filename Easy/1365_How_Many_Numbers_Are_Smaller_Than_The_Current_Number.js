/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let sorted  = [...nums].sort((a,b) => a - b);

let map = new Map();

for (let i = 0; i < sorted.length; i++){
    if(!map.has(sorted[i])){
        map.set(sorted[i], i);
    }
}
let result = [];

for (let num of nums){
    result.push(map.get(num))
}

return result;
    
};