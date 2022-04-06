 /* 1. Deret Fibonancci
input : 7
output : 0,1,1,2,3,5,8,13
*/
// let a = 0;
// let b = 1;
// console.log(`${a}\n${b}`);
// let hasil = []

// for(let i = 1; i <=8; i++) {
//   hasil = a + b;
//   console.info(`${ hasil}`);
//   a = b;
//   b = hasil;
// }
 
// 2. 
//  function tampilAngka(n) {
//   if(n === 0) return;

//   console.log(n);
//   return tampilAngka(n-1)
// }

// tampilAngka(10)

//3. Array join

// let arr = ['Chanly', 'Septian', 'Ambarita'];
// for(let i=0; i<arr.length; i++) {
//   console.info(arr.join(" "));
// }

//3. Array Push

// let arr2 = ['Chanly', 'Septian', 'Ambarita'];
// arr2.push('Nani');

// console.info(arr2.join(" "));

//4. Array splice (kaya tali diiket/disambung)
//rumus -> splice(indexAwal, mauDihapusBerapa, elemenBaru/Value, dst..)
// let arr2 = ['Chanly', 'Septian', 'Ambarita'];
// arr2.splice(2, 0, 'Nani');
// console.info(arr2);

// 5.Array Slice (Mengiris / menghasilkan menjadi array baru)
//rumus -> slice(awal, akhir+1)
// let arr2 = ['Chanly', 'Septian', 'Ambarita'];
// let arr3 = arr2.slice(1,3);
// console.info(arr3);

/* 6. Looping Array*/

// dengan for  
// let arr = [1,2,3,4,5,6,7,8,9];
// for(let i = 0; i<arr.length; i++) {
//   console.info(arr[i]);
// }

// dengan forEach
// let arr = [1,2,3,4,5,6,7,8,9];
// arr.forEach(function(items){
//   console.info(items);
// });

//Contoh lain forEach
// let arr = ['Chanly','Septian', 'Ambarita'];
// arr.forEach(function(items, index){
//   console.info("Mahasiswa ke - " + (index+1) + " adalah "+ items);
// });

//dengan Map
// let arr = [1,23,4,5,6,7,88,11,20];
// let useMap = arr.map(function(items) {
//   return items * 2;
// })
// console.info(useMap.join('-'));

// 7. Sort untuk mengurutkan array ascending / descending (a-b asc / b-a desc)
// let arr = [1,23,4,5,6,7,88,11,20];
// arr.sort(function(a,b){
//   return a-b;
// })
// console.info(arr);

// 8. Filter (untuk mencari elemen pada array, mirip seperti find, tetapi filter bisa pakai operator logika dan lebih banyak nilai)
// let arr = [1,23,4,5,6,7,88,11,20];
// let arrFilter = arr.filter(function(items){
//   return items > 5; //cari nilai pada array yg lebih dari 5
// });
// console.info(arrFilter.sort(function(a,b) {
//   return a-b;
// }));

// 9.Find (hanya menemukan satu nilai)
// let arr = [1,23,4,5,6,7,88,11,20];
// let arrFind = arr.find(function(items){
//   return items > 5;
// });
// console.info(arrFind);

