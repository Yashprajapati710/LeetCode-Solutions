/**
 * @param {string} formula
 * @return {string}
 */
var countOfAtoms = function (formula) {

    let stack = [new Map()];
    let i = 0;

    while (i < formula.length) {

        // Opening bracket
        if (formula[i] === "(") {
            stack.push(new Map());
            i++;
        }

        // Closing bracket
        else if (formula[i] === ")") {

            i++;

            // Read multiplier
            let multiplier = 0;

            while (i < formula.length && isDigit(formula[i])) {
                multiplier = multiplier * 10 + Number(formula[i]);
                i++;
            }

            if (multiplier === 0) {
                multiplier = 1;
            }

            // Current bracket group
            let current = stack.pop();

            // Previous level
            let previous = stack[stack.length - 1];

            for (let [atom, count] of current) {
                previous.set(
                    atom,
                    (previous.get(atom) || 0) + count * multiplier
                );
            }
        }

        // Atom
        else {

            // First uppercase letter
            let atom = formula[i];
            i++;

            // Following lowercase letters
            while (
                i < formula.length &&
                formula[i] >= "a" &&
                formula[i] <= "z"
            ) {
                atom += formula[i];
                i++;
            }

            // Read atom count
            let count = 0;

            while (i < formula.length && isDigit(formula[i])) {
                count = count * 10 + Number(formula[i]);
                i++;
            }

            if (count === 0) {
                count = 1;
            }

            let current = stack[stack.length - 1];

            current.set(
                atom,
                (current.get(atom) || 0) + count
            );
        }
    }

    // Sort atoms alphabetically
    let atoms = [...stack[0].keys()].sort();

    let answer = "";

    for (let atom of atoms) {

        answer += atom;

        let count = stack[0].get(atom);

        if (count > 1) {
            answer += count;
        }
    }

    return answer;
};


// Check whether character is a digit
function isDigit(ch) {
    return ch >= "0" && ch <= "9";
}