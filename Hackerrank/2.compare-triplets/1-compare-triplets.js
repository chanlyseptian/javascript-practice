/*
The task is to find their comparison points by comparing a[0] with b[0], a[1] with b[1], and a[2] with b[2].

If a[i] > b[i], then Alice is awarded 1 point.
If a[i] < b[i], then Bob is awarded 1 point.
If a[i] = b[i], then neither person receives a point.
*/
function compareTriplets(a, b) {
    // Write your code here
    let alice = [];
    let bob = [];

    if (a[0] > b[0]) {
      alice++;
    } else if (a[0] === b[0]){
      alice = alice+0;
    } else {
      bob++;
    }

    if (a[1] > b[1]) {
      alice++;
    } else if (a[1] === b[1]){
      alice = alice+0;
    } else {
      bob++;
    }

    if (a[2] > b[2]) {
      alice++;
    } else if (a[2] === b[2]){
      alice = alice+0;
    } else {
      bob++;
    }

    let result = [alice, bob];

    return result;
    
}

const arr1 = [1, 2, 3];
const arr2 = [3, 2, 1];

console.info(compareTriplets(arr1, arr2));