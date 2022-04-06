/*
Given an array of integers, find the sum of its elements.

For example, if the array [1,2,3] so return 6
*/

function sumArr(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

const arr = [5,5,5,25];
console.info(sumArr(arr));