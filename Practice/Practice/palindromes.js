function palindrom(str) {
  
  let reversedStr = str.split('').reverse().join('');
  
  if (reversedStr === str) {
    return true;
  }
  return false; 
}

console.info(palindrom("abcba"));

