
function isLowerTriangular(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = i + 1; j < matrix[i].length; j++) {
            if (matrix[i][j] !== 0) {
                return false;
            }
        }
    }
    return true;
}

const lowerTriangularMatrix = [
    [1, 0, 0],
    [2, 3, 0],
    [4, 5, 6]
];

const nonLowerTriangularMatrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log("Is lower triangular matrix:", isLowerTriangular(lowerTriangularMatrix));
console.log("Is lower triangular matrix:", isLowerTriangular(nonLowerTriangularMatrix));
