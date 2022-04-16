/*
Given a square matrix, calculate the absolute difference between the sums of its diagonals.

For example, the square matrix arr is shown below:

1 2 3
4 5 6
9 8 9  
The left-to-right diagonal = 1 + 5 + 9 = 15. The right to left diagonal = 3 + 5 + 9 = 17. Their absolute difference is 15-17 = 2.

 */

function diagonalDifference(arr) {
    // Write your code here
    let leftDiag = 0;
    let rightDiag = 0;
    let n = arr[0].length;

    for (let i = 0; i < n; i++) {
        for (let j = n-1; j < n; j--) {
            leftDiag += arr[i][i];
            rightDiag += arr[i][j];
        }
    }
    let diff = Math.abs(leftDiag - rightDiag);

    return leftDiag;
    
}

const arr = [[1,2,3],[4,5,6],[9,8,9]];

console.info(diagonalDifference(arr));