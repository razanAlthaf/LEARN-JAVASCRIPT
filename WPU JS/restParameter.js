//Rest parameter

// function myFunc() {
    // return `a = ${a}, b = ${b}, sisanya = ${myArgs}`;
    // return [...arguments]; ini sama kaya yang dibawah, ini rest parameter
    // return Array.from(arguments); ini cara ngubah jadi array pake from
// }

// console.log(myFunc(1,2,3,4,5));


//contoh lagi bisa dipake buat apa
// function jumlahkan(...angka) {
    // pake for of bisa
    // let total = 0;
    // for (const a of angka) {
    //     total += a
    // }
    // return total
    // pake reduce juga bisa
    // return angka.reduce((a, b) => a + b );
// }
// console.log(jumlahkan(1,2,3,4,5));


//array destructuring mengunakan rest parameter
// const kelompok = ['razan', 'althaf', 'subrata', 'fajar', 'alpat'];
// const [ketua, wakil, ...anggota] = kelompok;
// console.log(anggota);


//object destructuring menggunakan rest parameter
// const kelompok = {
//     ketua: 'razan',
//     wakil: 'althaf',
//     FE: 'alpat',
//     BE: 'pajar'
// }
// const {ketua, ...anggota} = kelompok;
// console.log(anggota);


//filtering

// function filterBy(type, ...values) {
//     return values.filter(v => typeof v === type);
// }

// console.log(filterBy('boolean', 0, 6, true, false, "oi", 'number'));