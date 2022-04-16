const factorial = n => {
    n = BigInt(n);
    let x = BigInt(1);

    for(let i = n; i >= 1; i--) {
        x *= i;
    }
    console.log(x.toString()); 
}

console.log(factorial(25)); 