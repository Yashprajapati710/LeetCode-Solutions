/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let max = Math.max(...candies);

let result = [];

for(let candy of candies){
    result.push(candy + extraCandies >= max);
}

return result;
    
};