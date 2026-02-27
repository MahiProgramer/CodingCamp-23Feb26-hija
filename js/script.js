// Toggle menu mobile
const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
// Ambil elemen HTML berdasarkan class.

toggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
// Jika belum ada class active → tambahkan
// Jika sudah ada → hapus


// Animasi fade-in saat scroll
const sections = document.querySelectorAll('.section');
// Ambil semua section yang punya class .section.


window.addEventListener('scroll', () => { /*Saat halaman di-scroll, jalankan fungsi.*/
    const triggerBottom = window.innerHeight * 0.8; //Hitung 80% tinggi layar.

    sections.forEach(section => {
        const boxTop = section.getBoundingClientRect().top; //Ambil posisi section dari atas layar.

        if(boxTop < triggerBottom){ //Kalau section sudah masuk area layar → tampilkan animasi.
            section.style.opacity = 1;
            section.style.transform = "translateY(0)"; //Bikin muncul dan naik ke posisi normal.
        } else {
            section.style.opacity = 0;
            section.style.transform = "translateY(50px)"; //Kalau belum terlihat → sembunyikan dan geser ke bawah.
        }
    });
});

// initial style
sections.forEach(section => {
    section.style.opacity = 0;
    section.style.transition = "all 0.6s ease";
}); //Saat pertama load: Section transparan, Ada animasi transisi

function saveName() {
    const name = document.getElementById("userNameInput").value;
    const welcomeText = document.getElementById("welcomeText");

    if(name.trim() !== "") {
        welcomeText.innerHTML = "Welcome, " + name + " 👋 to Our Website";
        document.getElementById("namePopup").style.display = "none";
    } else {
        alert("Silakan isi nama terlebih dahulu!");
    }
}

const form = document.getElementById("messageForm");

form.addEventListener("submit", function(e){
    e.preventDefault();

    const nama = document.getElementById("nama").value;
    const tanggal = document.getElementById("tanggal").value;
    const pesan = document.getElementById("pesan").value;
    const jk = document.querySelector('input[name="jk"]:checked').value;

    const now = new Date();

    document.getElementById("currentTime").innerText = now;
    document.getElementById("outNama").innerText = nama;
    document.getElementById("outTanggal").innerText = tanggal;
    document.getElementById("outJK").innerText = jk;
    document.getElementById("outPesan").innerText = pesan;

    document.getElementById("outputBox").style.display = "block";
});
