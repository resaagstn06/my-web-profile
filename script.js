// Seleksi elemen DOM menggunakan getElementById dan querySelector
const tombolSapa = document.getElementById("btn-sapa");
const teksPesan = document.querySelector("#pesan-dinamis");
const judulUtama = document.querySelector("#main-header h1");

// Fungsi Event Handler
function tampilkanSambutan() {
  teksPesan.textContent = "Halo! Selamat datang di website portofolio UTS Pemrograman Web 1.";
  teksPesan.style.color = "#2563eb";
  judulUtama.textContent = "Resa Agustina (TRPL - Polinus)";
}

// Mendaftarkan Event Listener pada tombol
tombolSapa.addEventListener("click", tampilkanSambutan);
