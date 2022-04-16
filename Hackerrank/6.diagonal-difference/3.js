/*
1 2 3
4 5 6
9 8 9  

The left-to-right diagonal = 1+5+9 = 15. 
he right to left diagonal = 3+5+9 = 17. 
Their absolute difference is | 15 - 17 | = 3.
*/

const diagDiff = (...arr) => {

    let diagLeft = [];
    let diagRight = [];

    for(let i = 0; i < arr.length; i++) {
        diagLeft.push(arr[i][i]);
    }
    let count = 0;
    for(let i = arr.length-1; i >= 0; i--) {
        diagRight.push(arr[i][count])
        count++;
    }

    

    let diagleftSum = diagLeft.reduce((acc,curr) => acc + curr);
    let diagRightSum = diagRight.reverse().reduce((acc,curr) => acc + curr);

    const absSum = Math.abs(diagleftSum - diagRightSum);

    return absSum;
}


console.log(diagDiff([1, 2, 3],[4, 5, 6],[9, 8, 9])); 