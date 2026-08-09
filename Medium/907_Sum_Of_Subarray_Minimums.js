/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function(arr) {
    const MOD = 1000000007;
let stack = [];
let sum = 0;

for(let i = 0; i <= arr.length; i++){
    let current = i === arr.length ? 0 : arr[i];

    while(stack.length > 0 && arr[stack[stack.length - 1]] > current){

        let mid = stack.pop();

        let left = stack.length === 0 ? mid + 1 : mid - stack[stack.length - 1];

        let right = i - mid;

        sum = (sum + arr[mid] * left * right) % MOD;
    }

    stack.push(i);
}
return sum;
    
};