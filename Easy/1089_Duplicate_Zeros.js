/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    let Zeros = 0;
let n = arr.length;

for(let num of arr){
    if(num === 0) Zeros++;
}

let i = n - 1;
let j = n + Zeros - 1;

while(i < j){
    if(j < n ){
        arr[j] = arr[i];
    }

    if(arr[i] === 0){
        j--;
        if(j < n){
            arr[j] = 0;
        }
    }

    i--;
    j--;
}
    
};