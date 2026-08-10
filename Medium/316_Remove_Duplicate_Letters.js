/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    let count = {};
let stack = [];
let seen = new Set();

for (let char of s){
    count[char] = (count[char] || 0) + 1;

}

for(let char of s){
    count[char]--;

    if(seen.has(char)){
        continue;
    }

    while(stack.length > 0 && stack[stack.length - 1] > char && count[stack[stack.length - 1]] > 0){

        let removed = stack.pop();
        seen.delete(removed);
    }

    stack.push(char);
    seen.add(char);
}

return stack.join("");
    
};