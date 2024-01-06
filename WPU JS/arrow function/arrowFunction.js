        //function expression conotoh awal
        // const tampilNama = function (nama) {
        //  return `halo ${nama}`;
        // }
        // console.log(tampilNama('razan'));


        //arrow function contoh
        // const tampilNama = (nama) => { 
        //     return `halo ${nama}`;
        // }
        // console.log(tampilNama('razan'));


        //lebih simple lagi kalo kaya gini
        // const tampilNama = nama => `halo ${nama}`;
        // console.log(tampilNama('razan'));


        //kalo dua atau lebih parameter
        // const tampilNama = (nama, waktu) => {
        //     return `halo ${nama}, selamat ${waktu}`;
        // }
        // console.log(tampilNama('razan', 'malam'));

        //studi kasus
        //function biasa
        // let siswa = ['razan', 'althaf', 'subrata'];
        // let jumlahHuruf = siswa.map(function (nama) {
        //     return nama.length;
        // });
        // console.log(jumlahHuruf);

        //arrow function
        // let jumlahHuruf = siswa.map(nama => nama.length);
        // console.log(jumlahHuruf);

        //contoh lain
        // let jumlahHuruf = siswa.map(nama => ({nama, jmlHuruf : nama.length}));
        // console.table(jumlahHuruf)


        //beda video

        //contoh menggunakan constructor function

        // const Siswa = function () {
        //         this.nama = 'razan';
        //         this.umur = '17';
        //         this.salam = function () {
        //                 console.log(`halo nama saya ${this.nama}, umur saya ${this.umur} tahun`);
        //         }
        // }
        // const razan = new Siswa();

        //kalo pake arrow function

        // bisa make nya cuma buat ke method seperti contoh salam
        // const Siswa = function () {
        //         this.nama = 'razan';
        //         this.umur = '17';
        //         this.salam = () => {
        //                 console.log(`halo nama saya ${this.nama}, umur saya ${this.umur} tahun`);
        //         }
        // }
        // const razan = new Siswa();


        //arrow function ternyata gabisa pake keyword this ini contoh error nya
        // const siswa1 = {
        //         nama : 'razan',
        //         umur : 17,
        //         salam: () => {
        //                 console.log(`halo nama saya ${this.nama}, umur saya ${umur}`);
        //         }
        // }



        /*NOTE : arrow function tidak punya konsep this,
         maka this yang di setInterval akan mencari ke lexical scope nya, jadi nyarinya
        bukan ke global. maka dari itu jika menggunakan function biasa tidak bisa, jika
        memakai arrow function bisa. karena ada hoisting*/

        /* intinya jika memakai function biasa mencarinya ke global scope, jika menggunakan
        arrow function mencarinya ke parent scope yang mempunyai this. dicoba aja kalo
        ga percaya, arrow function yang di setInterval di ubah jadi anonymous function */
        
        
        // const Siswa = function () {
        //         this.nama = 'razan';
        //         this.umur = 17;
        //         this.salam = function () {
        //         console.log(`halo nama saya ${this.nama}, umur saya ${this.umur} tahun`);
        //         }


        //         setInterval( () => {
        //                 console.log(this.umur++);
        //         }, 500);

        // }
        // const razan = new Siswa();


        //contoh penerapan arrow function di kehidupan aslinya

        