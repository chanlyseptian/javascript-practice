/*
Enter the first number: 1
Enter the last number: 10
Odd numbers:
1 3 5 7 9
Event numbers:
2 4 6 8 10
*/

function oddEven(start, end) {
    let tempOdd = [];
    let tempEven = [];

    for(let i = start; i <= end; i++) {
        if(i % 2 === 1) {
            tempOdd.push(i); 
        } else if( i % 2 === 0) {
            tempEven.push(i);
        }
    }

    return console.info(`Odd numbers:\n${tempOdd}
    \nEven numbers:\n${tempEven}`);
}

oddEven(1,10);