let arr = [2,4,55,33,221,2];

let arrSorted = arr.sort(function(a,b) {
    return b-a;
})

console.info(arr);
console.info(arrSorted.join(' '));