        // //object literal
        // let siswa = {
        //     nama : "razan",
        //     kelas : 12,
        //     jurusan : "sija"
        // }
        // console.log(siswa)

        // //function declaration
        // function MethodSiswa (nama, kelas, jurusan) {
        //     //membuat template variable
        //     let siswa = {}
        //     siswa.nama = nama;
        //     siswa.kelas = kelas;
        //     siswa.jurusan = jurusan;
        //     //harus di return kalo pake ini
        //     return siswa;

        // }
        // //eksekusi output
        // let detailSiswa = MethodSiswa ("razan", 12, "jurusan");


        // //function constructor
        // function Siswa(nama, kelas, jurusan) {
        //     //lebih simple daripada declaration
        //     this.nama = nama;
        //     this.kelas = kelas;
        //     this.jurusan = jurusan;
        // }
        // //jika memakai this harus makai new di eksekusi ny
        // let DetailSiswa = new Siswa("celvin", 12, "sija");


        //Object.create()
        //ini make object literal
        // const MethodSiswa = {
        //     makan : function (porsi){
        //         this.energi += porsi;
        //         console.log(`Halo ${this.nama}, selamat makan`); 
        //     },
        //     main : function (jam){
        //         this.energi -= jam;
        //         console.log(`Halo ${this.nama}, selamat bermain`); 
        //     },
        //     tidur : function (jam) {
        //         this.energi += jam * 2;
        //         console.log(`Halo ${this.nama}, selamat tidur`);
        //     }
        // }

        // function Siswa(nama, energi) {

        //     let siswa = Object.create(MethodSiswa);
        //     siswa.nama = nama;
        //     siswa.energi = energi;

        //     return siswa;
        // }
        // let razan = Siswa("Razan", 10);
        // let althaf = Siswa("Althaf", 20);

        // //prototype
        // function Siswa(nama, energi) {
        //     this.nama = nama;
        //     this.energi = energi;
        // }

        // Siswa.prototype.makan = function (porsi) {
        //     this.energi += porsi;
        //     return `Halo ${this.nama}, selamat makan`;
        // }

        // Siswa.prototype.main = function (jam) {
        //     this.energi -= jam;
        //     return `Halo ${this.nama}, selamat main`;
        // }

        // Siswa.prototype.tidur = function (jam) {
        //     this.energi += jam * 2;
        //     return `Halo ${this.nama}, selamat tidur`;
        // }
        // let razan = new Siswa("razan", 10);


        // //versi class
        // class Siswa {
        //     constructor(nama, energi) {
        //         this.nama = nama;
        //         this.energi = energi;
        //     }

        //     makan(porsi) {
        //         this.energi += porsi;
        //         return `Halo ${this.nama}, selamat makan`;
        //     }

        //     main(jam) {
        //         this.energi -= jam;
        //         return `Halo ${this.nama}, selamat main`;
        //     }

        //     tidur(jam) {
        //         this.energi += jam * 2;
        //         return `Halo ${this.nama}, selamat tidur`;
        //     }
        // }
        // let razan = new Siswa("razan", 10);
