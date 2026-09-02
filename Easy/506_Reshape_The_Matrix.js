/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
    let rows = mat.length;

    let cols = mat[0].length;

    if (rows * cols !== r * c) {
        return mat;
    }

    let result = [];
    for (let i = 0; i < r; i++) {
        result.push([]);
    }

    let index = 0;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {

            let newRow = Math.floor(index / c);
            let newCol = index % c;

            result[newRow][newCol] = mat[i][j];

            index++;
        }
    }
    return result;

};