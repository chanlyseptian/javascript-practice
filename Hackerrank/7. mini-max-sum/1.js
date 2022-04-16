/*
Sample Input
1 2 3 4 5

Sample Output
10 14

min = 1+2+3+4 = 10
max = 2+3+4+5 = 14
*/

const miniMax = arr => {
    let min = arr[0];
    let max = arr[0];

    
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] <= min) {
            min = arr[i];
        }
        if (arr[i] >= max) {
            max = arr[i];
        }
    }

    let sum = arr.reduce((acc,curr) => acc + curr);

    return console.log(sum - max, sum - min);  
}

const arr1 = [1,2,3,4,5];
const arr2 = [1,3,5,7,9];
const arr3 = [5,5,5,5,5];

console.log(miniMax(arr3)); 