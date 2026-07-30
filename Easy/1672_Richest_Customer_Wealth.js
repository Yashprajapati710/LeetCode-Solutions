/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let maxWealth = 0;

for (let customer of accounts){

    let Wealth = 0;
    
    for(let money of customer){

        Wealth += money;
    }
    maxWealth = Math.max(maxWealth, Wealth);
}

return maxWealth;

    
};