/*
The task is to find their comparison points by comparing a[0] with b[0], a[1] with b[1], and a[2] with b[2].

If a[i] > b[i], then Alice is awarded 1 point.
If a[i] < b[i], then Bob is awarded 1 point.
If a[i] = b[i], then neither person receives a point.
*/

function compareTriplets(a, b) {
  let alice = 0;
  let bob = 0;  

  for (let i = 0; i< a.length; i++) {
    if (a[i] > b[i]) {
      alice++;
    } else if (a[i] === b[i]) {
      alice = alice + 0;
      bob = bob + 0;
    } else {
      bob++;
    }
  }

  return [alice ,bob];

}

const arr1 = [1, 2, 3];
const arr2 = [3, 2, 1];

console.info(compareTriplets(arr1, arr2));