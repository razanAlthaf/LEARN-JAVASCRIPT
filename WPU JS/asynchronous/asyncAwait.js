const token = ~~[Math.random() * 12345];
const pictures = ['1.jpg', '2.jpg', '3.jpg'];

function login(username) {
    console.log('processing get token now...');
    return new Promise((success, failed) => { 
        setTimeout(() => {
            if (username != 'razan')
            failed('sorry wrong data')
            success({token})
        }, 200)
    })
}
function getUser(token) {
    console.log('processing get apiKey now...');
    return new Promise((success, failed) => {
        if(!token) failed('failed get data')
        if(token)
        setTimeout(() => {
        success({apiKey: 'xkey123'})
    }, 500);
    })
}
function getPicture(apiKey) {
    console.log('processing get pictures now');
    return new Promise((success, failed) => {
        if(!apiKey) failed('failed get data')
        if(apiKey)
        setTimeout(() => {
        success({pic: pictures})
    }, 700);
    })
}

async function userDisplay() {
    try {
        const {token} = await login('razan')
    const {apiKey} = await getUser(token)
    const {pic} = await getPicture(apiKey)

    console.log(`
        token anda adalah = ${token}
        apiKey anda adalah = ${apiKey}
        request gambar anda adalah = ${pic}
        `
    );
    } catch (err) {
        console.log(err);
    }
}

userDisplay()