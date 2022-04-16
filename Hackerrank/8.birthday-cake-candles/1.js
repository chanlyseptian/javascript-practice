/*
candles = [4,4,1,3]
The maximum height candles are 4 units high. There are 2 of them, so return 2.
*/

const birthdayCakeCandles = candles => {
    
    let max = 0;

    candles.forEach(candle => candle > max ? max = candle : max);

    const result = candles.filter(candle => candle === max);
    let sum = result.length;
    console.log(sum);

}
//[5,4,4,1,3,5,5]
birthdayCakeCandles([3,2,1,3]);
//result : 3