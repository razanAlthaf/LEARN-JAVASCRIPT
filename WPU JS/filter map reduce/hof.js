
const angka = [1, 4, 3, 7, 5, 9, 6, -1, 2, 8];

//mencari angka >= 3
// contoh menggunakan for

// const newAngka = [];
// for (let i = 0; i < angka.length; i++) {
//     if (angka[i] >= 3) {
//         newAngka.push(angka[i]);
//     }
// }
// console.log(newAngka)


//filter
// const newAngka = angka.filter(a => a >= 3; );
// console.log(newAngka);

//map
//mengalikan angka jadi kali 2
// const newAngka = angka.map(a => a * 2);
// console.log(newAngka);

//reduce
//menjumlahkan semua variabel angka
// const newAngka = angka.reduce((accumulator, currentValue) => 
// accumulator + currentValue, 0);
// console.log(newAngka)

//method chaining
//cari angka > 5
//lalu dikalikan tiga
//lalu di jumlahkan
const hasil = angka.filter(a => a > 5)//7,9,6,8
.map(a => a * 3)//di x 3
.reduce((acc, cur) => acc + cur);//dijumlahin hasilnya

console.log(hasil)