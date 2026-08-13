/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
    function build(str) {

        let stack = [];

        for (let char of str) {

            if (char === "#") {
                if (stack.length > 0) {
                    stack.pop();
                }
            } else {
                stack.push(char);
            }
        }

        return stack.join("");

    }
    return build(s) === build(t);

};