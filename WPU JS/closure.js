        // function init (){
        //     let nama = "razan";
        //     function tampilNama() {
        //         console.log(nama);
        //     }

        //     tampilNama();
        // }
        // init();


        function ucapkanSalam(waktu) {
            return function(nama) {
                console.log(`halo ${nama}, selamat ${waktu}`);
            }
        }

        let selamatPagi = ucapkanSalam("pagi");
        let selamatSiang = ucapkanSalam("siang");
        let selamatMalam = ucapkanSalam("malam");

        selamatPagi('razan');
        selamatSiang('althaf');
        // console.dir(selamatPagi('razan'));