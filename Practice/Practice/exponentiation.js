//1.
// function exponen(base, pangkat) {
//   return base ** pangkat;
// }

// console.info(exponen(4,4));

//2.
function exponen(base, pangkat) {
  let result = 1;
  for(let i = 1; i <= pangkat; i++) {
    result = result * base;
  }
  return result
}

console.info(exponen(4,4));