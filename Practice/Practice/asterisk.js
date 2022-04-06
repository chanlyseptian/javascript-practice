/*
     * 
    * *
   * * *
  * * * *
 * * * * *
*/
      
function nestedLoopBintang(n) {
  let i;
  let j;
  for (i=1; i<=n; i++) {
    for (j=i; j<=n; j++) {
        process.stdout.write(" ");
    }
    for (j=1; j<=i; j++) {
        process.stdout.write("* ");
    }
    console.info();
  }
}

console.info(nestedLoopBintang(5));
