        function faktorial(x){
            if(x === 0){
                return 1;
            }
            return x * faktorial(x - 1);
        }
        console.log(faktorial(5));


        function Angka(n){
            if(n === 0){
                return;
            }
            console.log(n);
            Angka(n - 1);
        }

        Angka(10);
