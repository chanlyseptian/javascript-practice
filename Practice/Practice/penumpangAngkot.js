// let penumpang = ['Chanly'];

// let tambahPenumpang = function(namaPenumpang, penumpang) {
//  // Jika angkot kosong, tambah penumpang
//  if(penumpang.length === 0) {
//   penumpang.push(namaPenumpang);
//   return penumpang;
//  }

//  else {
//   // Jika ada yang undefined, isi arraynya dengan yg terbaru
//   for(let i = 0; i<=penumpang.length; i++)  {
//    if( penumpang[i] == undefined ){
//     penumpang[i] = namaPenumpang;
//     return penumpang;
//    } else if( penumpang[i] == namaPenumpang){ //Jika sudah ada nama yang sama, maka tampilkan peringatan
//      console.info(namaPenumpang + " sudah ada didalam angkot");
//      return penumpang;
//    }
//    else if ( i == penumpang.length-1) { //Jika tidak atau sudah penuh, maka tambahkan penumpang (posisi terakhir)
//     penumpang.push(namaPenumpang);
//     return penumpang;
//    }
//   }
//  }
// }

// let hapusPenumpang = function(namaPenumpang, penumpang) {
// 	if(penumpang.length == 0) {
// 		console.info('angkot kosong!');
// 		return penumpang;
// 	} else {
// 		for(let i = 0; i<=penumpang.length; i++) {
// 			if( penumpang[i] == namaPenumpang ){
// 				penumpang[i] = undefined;
// 				return penumpang;
// 			} else if( i == penumpang.length-1){
// 				console.info(namaPenumpang + " tidak ada di dalam angkot");
// 				return penumpang;
// 			}
// 		}
// 	}
// }