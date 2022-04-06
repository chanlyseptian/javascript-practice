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
    let [a,b,c] = arr;
    let leftRightDiag = a[0] + b[1] + c[2];
    let rightLeftDiag = a[2] + b[1] + c[0];
    
    return Math.abs(leftRightDiag - rightLeftDiag);
    

}

const arr = [[1,2,3],[4,5,6],[9,8,9]];

console.info(diagonalDifference(arr));