/*
you are required to calculate and print the sum of the elements in an array.
Input Format

The first line of the input consists of an integer .
The next line contains  space-separated integers contained in the array.

Output Format

Return the integer sum of the elements in the array.

 */

function bigSum(ar) {
  let sum = 0;
  
  for ( let i = 0; i < ar.length; i++ ) {
    sum += ar[i];
  }
  return sum;
}

const arr = [1000000001, 1000000002, 1000000003,
             1000000004, 1000000005];


console.info(bigSum(arr));