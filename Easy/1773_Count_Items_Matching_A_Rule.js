/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    let count = 0;
let index = 0;

if(ruleKey === "type"){
    index = 0;
}
else  if(ruleKey === "color"){
    index = 1;
}
else{
    index = 2;
}

for(let item of items){
    if(item[index] === ruleValue){
        count++;
    }
}

return count;
    
};