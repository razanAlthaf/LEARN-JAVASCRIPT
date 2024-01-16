//promise
// janji (terpenuhi/ingkar)
// states (fulfilled/rejected/pending)
// callback (resolve/reject/finally)
//aksi (then / catch)


//contoh
// let ditepati = true;
// const janji1 = new Promise((resolve, reject) => {
//     if ( ditepati ) {
//         resolve('janji telah ditepati');
//     }else {
//         reject('janji diiingkari');
//     }
// });
// janji1
//     .then(response => console.log('OK : ' + response))
//     .catch(response => console.log('NOT OK : ' + response))


//contoh2
// let ditepati = true;
// const janji2 = new Promise((resolve, reject) => {
//     if (ditepati) {
//         setTimeout(() => {
//             resolve('ditepati setelah 2 detik')
//         }, 2000);
//     } else {
//         setTimeout(() => {
//             reject('tidak ditepati')
//         }, 2000);
//     }
// });

// console.log('mulai');
// console.log(janji2.then(() => {console.log(janji2)}));
// janji2
//     .then(response => console.log('OK : ' + response))
//     .catch(response => console.log('NOT OK : ' + response))

// console.log('selesai');


const film = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            judul: 'ancika',
            produser: 'razan',
            pemeran: 'zee, gracia'
        }])
    }, 1000);
})

const cuaca = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            kota: 'bekasi',
            suhu: 21,
            kondisi: 'hujan lebat'
        }])
    }, 500);
})

Promise.all([film, cuaca])

.then(response => {
    const [film, cuaca] = response;
    console.log(film);
    console.log(cuaca);
});