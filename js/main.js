// main.js

window.onload = () => {
  // Hapus kelas "not-loaded" setelah delay 1 detik
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    // Ambil elemen dengan ID 'title'
    const titleElement = document.getElementById('title');

    if (!titleElement) {
      console.error("Elemen dengan ID 'title' tidak ditemukan!");
      return;
    }

    // Teks pertama
    const firstText = 'I LOVE U';
    const firstTitles = firstText.split('');
    let firstIndex = 0;

    // Teks kedua
    const secondText = 'FOREVER'; // Ganti dengan teks yang diinginkan
    const secondTitles = secondText.split('');
    let secondIndex = 0;

    // Animasi untuk teks pertama
    function animateFirstText() {
      if (firstIndex < firstTitles.length) {
        titleElement.innerHTML += firstTitles[firstIndex];
        firstIndex++;
        setTimeout(animateFirstText, 300); // Delay 300ms antar karakter
      } else {
        // Setelah teks pertama selesai, hilangkan dan mulai teks kedua
        setTimeout(() => {
          titleElement.innerHTML = ''; // Kosongkan teks
          animateSecondText(); // Mulai animasi teks kedua
        }, 1000); // Delay 1 detik sebelum pindah ke teks kedua
      }
    }

    // Animasi untuk teks kedua
    function animateSecondText() {
      if (secondIndex < secondTitles.length) {
        titleElement.innerHTML += secondTitles[secondIndex];
        secondIndex++;
        setTimeout(animateSecondText, 300); // Delay 300ms antar karakter
      }
    }

    // Mulai animasi pertama
    animateFirstText();

    clearTimeout(c);
  }, 1000); // Delay 1 detik sebelum mulai animasi
};
