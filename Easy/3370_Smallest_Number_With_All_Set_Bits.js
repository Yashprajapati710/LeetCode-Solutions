/**
 * @param {number} n
 * @return {number}
 */
var smallestNumber = function(n) {
    let ans = 1;

while(ans < n){
    ans = ans * 2 + 1;
}
return ans;
};