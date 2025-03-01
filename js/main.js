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
    const texts = ['HALOO CANTIKK KUU‼️', 'how"s your day?', 'i hope you"re okayy', 'happy eid fitri yaa cantikk‼️', 'ga kerasa yaa udah lebaran ajaa'];
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
          setTimeout(displayCharacter, 300); // Delay 300ms antar karakter
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
