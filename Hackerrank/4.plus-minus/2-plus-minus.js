/*
Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

Sample Input

STDIN           Function
-----           --------
6               arr[] size n = 6
-4 3 -9 0 4 1   arr = [-4, 3, -9, 0, 4, 1]
Sample Output

0.500000
0.333333
0.166667

*/

function plusMinus(arr) {
    // Write your code here
    let positive = arr.filter(number => number > 0).length / arr.length;
    let zero = arr.filter(number => number === 0).length / arr.length;
    let negative = arr.filter(number => number < 0).length / arr.length ;

    return console.info(`${positive.toFixed(6)}\n${zero.toFixed(6)}\n${negative.toFixed(6)}`);
    
    
}

const arr = [-4, 3, -9, 0, 4, 1];

plusMinus(arr);