function primeNumber(inputNumber) {
    isPrime = true;
    if(inputNumber <=1) {
        isPrime = false;
        return isPrime;
    } else {
        for(let i = 2; i< inputNumber; i++) {
            if(inputNumber % i == 0) {
                isPrime = false;
                break;
            }
        }
        return isPrime;
    }

}

let isItPrime = primeNumber(4);

if(isItPrime) {
    console.info( 'Is Prime Number');
} else {
    console.info( 'Is not Prime Number');
}
