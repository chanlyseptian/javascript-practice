/*
Given a list of numbers with an odd number of elements, find the median?

arr = [5,3,2,1,4];
sorted arr = [1,2,3,4,5]
median = 3
*/

const findMedian = arr => {
    let newArr = arr.sort((a,b) => a-b);

    if(newArr.length === 0) console.log(`there is no input`);


    else {
        if(arr.length % 2 === 1) {
            let findPos = Math.floor(newArr.length / 2);
            return console.log(`Odd number Array : ${newArr[findPos]}`); 
        } 
        else if(arr.length % 2 === 0) {
            let findPos = Math.floor(newArr.length / 2);
            let medPos = (newArr[findPos] + newArr[findPos - 1]) / 2;
            return console.log(`Even number Array : ${medPos}`);
        }
    }
    
}

findMedian([5,3,2,1,4,7,8,9]);
findMedian([15,33,22,11,54,37,58,69]); 
findMedian([5,3,2,1,4,7,8]); 
findMedian([]); 

