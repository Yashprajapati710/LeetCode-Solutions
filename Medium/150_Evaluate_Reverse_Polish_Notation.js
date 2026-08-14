/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    let stack = [];

    for (let token of tokens) {

        if (token === "+" || token === "-" || token === "*" || token === "/") {

            let right = stack.pop();
            let left = stack.pop();

            let result;

            if (token === "+") {
                result = left + right;
            }
            else if (token === "-") {
                result = left - right;
            }
            else if (token === "*") {
                result = left * right;
            } else {
                result = Math.trunc(left / right);
            }
            stack.push(result);

        } else {
            stack.push(Number(token));
        }
    }

    return stack[0];

};