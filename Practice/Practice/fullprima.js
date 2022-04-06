function checkDigits(n){

  // check all digits are prime or not
  while (n > 0) {
      let dig = n % 10;

      // check if digits are prime or not
      if (dig != 2 && dig != 3 && dig != 5 && dig != 7) {
        return false;
      }
    
      n = parseInt(n / 10, 10);
  }
  return true;
}
       
// To check if n is prime or not
function prime(n) {
    if (n == 1)
        return false;

    // check for all factors
    for (let i = 2; i * i <= n; i++) {
        if (n % i == 0)
            return false;
    }

    return true;
}
       
// To check if n is Full Prime
function isFullPrime(n) {
    // The order is important here for
    // efficiency
    return (checkDigits(n) && prime(n));
}
     
console.info(isFullPrime(231));