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

    // Daftar teks yang akan ditampilkan
    const texts = ['HALOO CANTIKK KUU‼️', 'HOW"S UR DAY CANTIKK?', 'I HOPE YOUR"E OKAYY', 'MINAL AIDZIN WAL FAIDZIN YAA CANTIKK‼️', 'MAAF LAHIR DAN BATIN YAA', 'MAAFIN AKU YAA?☹️', 'FOR NOW, I WILL ALWAYS HERE FOR YOU', 'I PROVE IT ALL', 'REMEMBER, I ALWAYS HERE‼️', 'CALL ME IF YOU NEED ME, OKAY?', 'MAKASII UDAH BACA INI SEMUA CANTIKK‼️🤍✨' ];
    let textIndex = 0; // Indeks untuk teks saat ini

    // Fungsi untuk animasi teks
    function animateText() {
      const currentText = texts[textIndex];
      const currentTitles = currentText.split('');
      let charIndex = 0;

      // Fungsi untuk menampilkan karakter
      function displayCharacter() {
        if (charIndex < currentTitles.length) {
          titleElement.innerHTML += currentTitles[charIndex];
          charIndex++;
          setTimeout(displayCharacter, 87,5); // Ubah delay menjadi 150ms untuk kecepatan lebih tinggi
        } else {
          // Setelah teks selesai, kosongkan dan pindah ke teks berikutnya
          setTimeout(() => {
            titleElement.innerHTML = ''; // Kosongkan teks
            textIndex++; // Pindah ke teks berikutnya
            if (textIndex < texts.length) {
              animateText(); // Mulai animasi teks berikutnya
            }
          }, 1000); // Delay 1 detik sebelum pindah ke teks berikutnya
        }
      }

      displayCharacter(); // Mulai menampilkan karakter
    }

    // Mulai animasi teks pertama
    animateText();

    clearTimeout(c);
  }, 1000); // Delay 1 detik sebelum mulai animasi
};
