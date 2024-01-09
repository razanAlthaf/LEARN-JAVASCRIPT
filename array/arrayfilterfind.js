        //filter
        let angka = [1,6,3,8,2,9];
        let angka2 = angka.filter(function(x){
            return x > 5;
        })
        console.log(angka2.join(","));

        //find
        let nomer = [1,6,3,8,2,9];
        let nomer2 = angka.find(function(x){
            return x > 5;
        })
        console.log(nomer2);        