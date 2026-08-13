/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {
    let stack = [];

    for (let i = 0; i < prices.length; i++) {

        while (stack.length > 0 && prices[stack[stack.length - 1]] >= prices[i]) {

            let index = stack.pop();

            prices[index] = prices[index] - prices[i];
        }
        stack.push(i);
    }

    return prices;

};