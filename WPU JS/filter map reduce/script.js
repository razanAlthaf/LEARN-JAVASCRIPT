//ambil semu elemen video
const videos = Array.from(document.querySelectorAll('[data-duration]'));

//pilih hanya yang "VIDEO GAME"
let vidGame = videos.filter(video => video.textContent.includes('VIDEO GAME'))

// //ambil durasi masing2 video
.map(item => item.dataset.duration)

// //ubah durasi menjadi float, ubah menit jadi detik
.map(waktu => {
    const parts = waktu.split(':').map(part => parseFloat(part));
    return (parts[0] * 60) + parts[1];
})
//jumlahkan semua detik
.reduce((total, detik) => total + detik);

// //ubah formatnya menjadi jam menit detik
const jam = Math.floor(vidGame / 3600);
vidGame = vidGame - jam * 3600;
const menit = Math.floor(vidGame / 60);
const detik = vidGame - menit * 60;

// //simpan ke dom
const pDurasi = document.querySelector('.Total-durasi');
pDurasi.textContent = `${jam} Jam ${menit} Menit ${detik} Detik.`;
const jmlVid = videos.filter(video => video.textContent.includes('VIDEO GAME')).length;
const pJmlVid = document.querySelector('.jumlah-video');
pJmlVid.textContent = `${jmlVid} video`;