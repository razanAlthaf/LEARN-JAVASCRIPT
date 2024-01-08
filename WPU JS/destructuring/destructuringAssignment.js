// destructuring array
const perkenalan = ['halo', 'razan', 16];

// const [salam, nama, umur] = perkenalan;
// console.log(umur);

//skip items

// const [salam, , , umur] = perkenalan;
// console.log(nama);


//swap items
// let a = 1;
// let b = 2;

// console.log(a);
// console.log(b);
// [a, b] = [b, a];

// console.log(a);
// console.log(b);

//rest parameter

// const [a, b ,...value] = [1, 2, 3, 4, 5];
// console.log(value);

//destructuring object

// const siswa = {nama : "razan",umur : 16}

// const { nama, umur} = siswa;
// console.log(nama);

//destructuring object tanpa deklarasi

// ({nama, umur} = {
//     nama : "razan",
//     umur : 16
// });
// console.log(umur);

//assign ke variabel baru

// const siswa = {
//     nama : "razan",
//     umur : 16
// }

// const {nama : n, umur : u} = siswa;
// console.log(n);

//memberikan nilai default

// const siswa = {
//     nama : "razan",
//     umur : 16
// }

// const {nama : n, umur : u, email : e = "razan70@gmail.com"} = siswa;
// console.log(e);

//mengambil value object menggunakan function dari parameter

// const siswa = {
//     id : 1,
//     nama : "razan",
//     umur : 16,
//     kelas : 12
// };

// const siswa2 = {
//     id : 2,
//     nama : "althaf",
//     umur : 16,
//     kelas : 12
// };

// function getIdSiswa ({id}) {
//     return id;
// }
// console.log(getIdSiswa(siswa2));