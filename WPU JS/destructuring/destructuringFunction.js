//destructuring function return value menggunakan array

// function kalkulasi(a, b) {
//     return [a + b, a - b, a * b, a / b];
// }
// const [tambah, kurang, kali, bagi = 'tidak ada'] = kalkulasi(6, 2)
// console.log(kali);

//destructuring function return value menggunakan object

// function kalkulasi(a, b) {
//     return {
//         tambah : a + b,
//         kurang : a - b,
//         kali : a * b,
//         bagi : a / b        
//     }
// }

// const {tambah, kurang, kali, bagi} = kalkulasi(6, 2)
// console.log(tambah);

//destructuring function arguments

// const siswa1 = {
//     nama : "razan athaf",
//     umur : 16,
//     email : "razan70@gmail.com"
// }

//sebelum desctructuring
// function cetakSiswa(siswa) {
//     return `Halo, nama saya ${siswa.nama} umur saya ${siswa.umur} tahun. salam kenal yaa!!`;
// }

//setelah desctructuring tetapi kurang kompleks
// function cetakSiswa({nama, umur}) {
//     return `Halo, nama saya ${nama} umur saya ${umur} tahun. salam kenal yaa!!`;
// }

// console.log(cetakSiswa(siswa1));


//yang lebih kompleks
const siswa1 = {
    nama : "razan athaf",
    umur : 16,
    email : "razan70@gmail.com",
    nilai : {
        uh : 80,
        uts : 90,
        uas : 85
    }
}

function cetakSiswa({nama, umur, nilai : {uh, uts, uas} }) {
        return `Halo, nama saya ${nama} umur saya ${umur} tahun. Nilai ulangan harian saya ${uas}, nilai uts saya ${uts}, nilai uas saya ${uas}. Salam kenal yaa!!`;
    }
console.log(cetakSiswa(siswa1));