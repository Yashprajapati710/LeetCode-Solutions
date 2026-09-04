/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function (img) {

    let rows = img.length;
    let cols = img[0].length;

    let result = Array.from(
        { length: rows },
        () => Array(cols).fill(0)
    );

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {

            let sum = 0;
            let count = 0;

            // Check 3 x 3 neighborhood
            for (let x = i - 1; x <= i + 1; x++) {
                for (let y = j - 1; y <= j + 1; y++) {

                    if (x >= 0 && x < rows &&
                        y >= 0 && y < cols) {

                        sum += img[x][y];
                        count++;
                    }
                }
            }

            result[i][j] = Math.floor(sum / count);
        }
    }

    return result;
};