//contoh async
// function satu() {
//     console.log('satu');
// };
// function dua() {
//     console.log('function dua proses...');
//     setTimeout(() => {
//         console.log('dua');
//     }, 3000);
// };
// function tiga() {
//     console.log('tiga');
// };

// satu()
// dua()
// tiga()


//latihan callback
const token = ~~[Math.random() * 12345];
const pictures = ['1.jpg', '2.jpg', '3.jpg'];

function login(username, callback) {
    console.log('processing get token now...');
    setTimeout(() => {
        callback({token, username})
    }, 200)
}
function getUser(token, callback) {
    console.log('processing get apiKey now...');
    if(token)
    setTimeout(() => {
        callback({apiKey: 'xkey123'})
    }, 500);
}
function getPicture(apiKey, callback) {
    console.log('processing get pictures now');
    if(apiKey)
    setTimeout(() => {
        callback({pic: pictures})
    }, 700);
}

//nested callback
login('razan', function(response) {
    const {token} = response;
    getUser(token, function (response) {
        const {apiKey} = response;
        getPicture(apiKey, function (response) {
            const {pic} = response;
            console.log(pic);
        })
    })
});