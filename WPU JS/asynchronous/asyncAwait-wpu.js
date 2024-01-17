    // const coba = new Promise (resolve => {
    //     setTimeout(() => {
    //         resolve('selesai')
    //     }, 1000);
    // });
    
    // coba.then(() => console.log(coba))
    // console.log('mulai');
    // console.log(coba);
    // console.log('selesai');

    function cobaPromise() {
        return new Promise (resolve => {
            setTimeout(() => {
                resolve('selesai')
        }, 1000);
        });
    }

    // const coba = cobaPromise();
    // coba.then(coba => console.log(coba));

    async function cobaAsync() {
        const coba = await cobaPromise();
        console.log(coba);
    }

    cobaAsync()