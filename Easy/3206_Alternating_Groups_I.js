/**
 * @param {number[]} colors
 * @return {number}
 */
var numberOfAlternatingGroups = function(colors) {
     let n = colors.length;
    let count = 0;

    for (let i = 0; i < n; i++) {

        let first = colors[i];
        let second = colors[(i + 1) % n];
        let third = colors[(i + 2) % n];

        if (first !== second && second !== third) {
            count++;
        }
    }

    return count;
    
};