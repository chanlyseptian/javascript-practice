function fibonacci(n) {
    if(n < 2) {
        return n;
    } else {
        return fibonacci(n-1) + (n-2);
    }
    
}

const input = prompt("Enter the number : ");

if(input <=0) {
    console.info('Enter a positive number');
} else {
    for(let i = 0; i<input; i++) {
        console.info(fibonacci(i));
    }
}

