/**
 * ===============================
 * Pair Programming
 * =
 * 
 * Istilah Pair Programming merupakan definisi dari 2 programmer yang saling ber kontribusi dalam pembuatan program atau membuat solusi dari problem.
 * 
 * Diberikan sebuah kelas (array) yang berisi peserta untuk di pasangkan dengan ketentuan berikut :
 * 1. Peserta di pasangkan hanya ber 2
 * 2. Peserta di pasangkan dengan initial nama yang berbeda
 * 3. Jumlah peserta harus Genap
 * 
 * Contoh : 
 * 
 * let students = ["Accio","Benny","John","Jim","Iota","Scott"]
 * 
 * Result : ["Accio - Benny","John - Iota","Jim - Scott"]
 * 
 * DILARANG :
 * - Menggunakan built in function, kecuali .push()
 */

// Accio - Benny - John - Jim - Iota - Scott
// false - false - John - Jim - Iota - Scott   ["Accio-Benny"]
// false - false - false - Jim - false - Scott ["Accio-Benny","John-Iota"]
// false - false -false - false - false - false ["Accio-Benny","John-Iota","Jim-Scott"]

// Test case
// console.log(pairStudent(["Cena", "Charice", "Bertha", "George", "Accio", "Abe", "Ann", "Chuck", "Danish", "Eugene"]))
/**
 * [
 *   "Cena - Bertha",
 *   "Charice - George",
 *   "Accio - Chuck",
 *   "Abe - Danish",
 *   "Ann - Eugene"
 * ]
 */

// console.log(pairStudent(["Cena", "Charice", "Bertha", "George", "Accio"]))
// Harus genap


const pairStudent = arr => {
    let tempStudents = [];

    for(let i = 0; i < arr.length; i++) {
        for(let j = i; j < arr.length; j++) {
            if(arr[i][0] !== arr[j][0] && arr[i] !== 'done' && arr[j] !== 'done') {
                tempStudents.push(arr[i] + ' - ' + arr[j]);
                arr[i] = 'done';
                arr[j] = 'done';
                break;
            }

        }
    }




    console.log(tempStudents);
}


const array3 = ["Accio","Benny","John","Jim","Iota","Scott"];
const array1 = ["Cena", "Charice", "Bertha", "George", "Accio"];
const array2 = ["Cena", "Charice", "Bertha", "George", "Accio", "Abe", "Ann", "Chuck", "Danish", "Eugene"];

pairStudent(array2);

