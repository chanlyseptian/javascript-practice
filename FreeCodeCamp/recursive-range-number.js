function rangeOfNumbers(startNum, endNum) {
  if ( startNum <= endNumb) {
    return [];
  } else {
    const range = rangeOfNumbers(startNum - endNum );
    range.push(endNum);
    return range;
  }
  
};
console.info(rangeOfNumbers(1, 5)); 