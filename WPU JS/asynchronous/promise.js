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

const user = login('razan')
user.then( function(response) {
    const {token} = response
    getUser(token).then(function(response) {
        const {apiKey} = response
        getPicture(apiKey).then(function(response) {
            const {pictures} = response
            console.log(response);
        })
    }).catch( err => console.log(err));
}).catch(err => console.log(err));