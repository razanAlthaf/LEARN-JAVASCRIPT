//iterable (dapat diubah)
// - string
// - array
// - arguments/node list
// - typedArray
// - map
// - set
// - user-defined iterables



// const nama = ['razan', 'althaf', 'subrata'];

//for biasa
// for (let i = 0; i < nama.length; i++){
// console.log(nama[i]);
// }

//for each hanya untuk array
// nama.forEach(n => console.log(n));

//contoh
// const nama = ['razan', 'althaf', 'subrata'];
// nama.forEach((m, i) => {
//     console.log(`${m} adalah nama ke-${i + 1}`);
// })

//for of dapat digunakan hanya untuk iterable

// for (const n of nama){
//     console.log(n);
// }

// const nama = "razan";

// for( const n of nama){
//     console.log(n);
// }

//methode entries

// for(const [i, m] of nama.entries()) {
     // console.log(`${m} adalah nama ke-${i + 1}`);
//     console.log(i);
// }


//arguments
// function jumlahAngka() {
    // return arguments.reduce((a, i) => a + i); //error    
    // arguments.forEach(a => jumlah += a); //error karena hanya untuk array
//     let jumlah = 0 ;
//     for (a of arguments) {
//         jumlah += a;
//     }
//     return jumlah;
// }

// console.log(jumlahAngka(1, 2, 3, 4, 5));


//for in bisa untuk object, pokoknya enumerable.
// const siswa = {
//     nama: 'razan althaf s',
//     kelas: 12,
//     email: 'razan70@gmail.com'
// }

// for (s in siswa) {
//     console.log(siswa[s]);
// }