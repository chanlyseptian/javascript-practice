/*
This is a staircase of size : 4

   #
  ##
 ###
####

Print a staircase as described above.

Its base and height are both equal to . It is drawn using # symbols and spaces. The last line is not preceded by any spaces.
*/

function staircase(n) {
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n - 1; j++) {
      process.stdout.write(" ");
    }
    for (let k = 0; k <= i; k++) {
      process.stdout.write("#");
    }
    console.info();
  }

}


staircase(4);