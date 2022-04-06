// Object di dalamnya ada function
let dataMahasiswa = {
    nama : 'Chanly Septian',
    lulus : true,
    IPSemester : [3.5, 3.3, 3.4, 3.2, 3.3, 3.5, 3.4, 3.5],
    IPKeseluruhan : function() {
        let total = 0;
        for(let i = 0; i< this.IPSemester.length; i++) {
            total += this.IPSemester[i];
        }
        return total / this.IPSemester.length;
        
    }   
}

dataMahasiswa.IPKeseluruhan();

//Object dengan Function Declaration
function buatObjectMahasiswa(nama, nim, email, jurusan) {
    let mhs = {};
    mhs.nama = nama;
    mhs.nim = nim;
    mhs.email = email;
    mhs.jurusan= jurusan; 
    return mhs;
}

let mhs2 = buatObjectMahasiswa('Chan', '1301198504', 'chanly17@gmail.com', 'Informatika')

//Constructor (harus dengan new dan harus huruf besar)
function Mahasiswa(nama,nim, email, jurusan) {
    this.nama = nama;
    this.nim = nim;
    this.email = email;
    this.jurusan = jurusan;
}

let mhs3 = new Mahasiswa('Septian', '1301199', 'septian172@gmail.com', 'Informatika'); //wajib dengan new