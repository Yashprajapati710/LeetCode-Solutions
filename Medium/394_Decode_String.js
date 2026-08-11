var decodeString = function(s) {

    let stack = [];
    let num = 0;
    let result = "";

    for (let char of s) {

        if (!isNaN(char)) {
            num = num * 10 + Number(char);
        }

        else if (char === '[') {
            stack.push([num, ""]);
            num = 0;
        }

        else if (char === ']') {

            let [repeat, str] = stack.pop();

            let decoded = str.repeat(repeat);

            if (stack.length > 0) {
                stack[stack.length - 1][1] += decoded;
            }
            else {
                result += decoded;
            }
        }

        else {
            if (stack.length > 0) {
                stack[stack.length - 1][1] += char;
            }
            else {
                result += char;
            }
        }
    }

    return result;
};