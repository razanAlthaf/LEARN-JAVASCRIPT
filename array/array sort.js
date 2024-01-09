        let sort = [1,2,3,6,9,8,5,18];
        sort.sort(function (a,b) { 
            return a-b;
        });
        console.log(sort.join(' - '));
