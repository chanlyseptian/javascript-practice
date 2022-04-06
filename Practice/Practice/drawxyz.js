function drawXYZ(number) {
  for ( let i = 1; i <= number; i++) {
    if ( i % 3 === 0) {
      process.stdout.write("X ");
    } else if ( i % 2 === 0 ) {
      process.stdout.write("Z ");
    } else if ( i % 2 === 1 ) {
      process.stdout.write("Y ");
    }
  }
}

drawXYZ(5);