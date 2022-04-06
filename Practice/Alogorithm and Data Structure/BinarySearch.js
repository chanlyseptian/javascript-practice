const arr = [3,5,1,9,7];

// [1, 3, 5, 7, 9] --> sorted
// 3 --> target value

//2. Binary Search
const binarySearch = (arr, target) => {
    this.arr = arr.sort((a,b) => a-b);
    console.info(arr);
    let lower = 0;
    let upper = arr.length -1 ;

    while(lower <= upper) {
        let middle = Math.floor((upper + lower) / 2);

        if(target === arr[middle]) {
            return middle;
        }

        if(target < arr[middle]) {
            upper = middle - 1;
        } else {
            lower = middle + 1;
        }

    }
    return -1;
}

console.info(binarySearch(arr, 3));







//1. Simple Search

// const simpleSearch = (arr, target) => {
//     this.arr = arr.sort((a,b) => a-b);
//     console.info(`array sorted ${arr}`);
    
//     for(let i = 0; i<=arr.length; i++) {
//         if (target === arr[i]) {
//             return `target ada di index ke-${i}`;
//         }
//     }
//     return false;
// }

// console.info(simpleSearch(arr, 10));



