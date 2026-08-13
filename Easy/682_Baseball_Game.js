/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
    let stack = [];

    for (let op of operations) {

        if (op === "C") {
            stack.pop();
        }
        else if (op === "D") {
            let last = stack[stack.length - 1];
            stack.push(last * 2);
        }
        else if (op === "+") {
            let last = stack[stack.length - 1];
            let secondlast = stack[stack.length - 2];

            stack.push(last + secondlast);
        }
        else {
            stack.push(Number(op));
        }
    }

    let total = 0;

    for (let score of stack) {
        total += score;
    }

    return total;

};