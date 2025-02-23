
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    const titleElement = document.getElementById('title');
    
    // Teks pertama
    const firstText = 'I LOVE U';
    const firstTitles = firstText.split('');
    let firstIndex = 0;

    // Teks kedua
    const secondText = 'FOREVER'; // Ganti dengan teks yang diinginkan
    const secondTitles = secondText.split('');
    let secondIndex = 0;

    function animateFirstText() {
      if (firstIndex < firstTitles.length) {
        titleElement.innerHTML += firstTitles[firstIndex];
        firstIndex++;
        setTimeout(animateFirstText, 300);
      } else {
        // Setelah teks pertama selesai, hilangkan dan mulai teks kedua
        setTimeout(() => {
          titleElement.innerHTML = ''; // Kosongkan teks
          animateSecondText(); // Mulai animasi teks kedua
        }, 1000); // Delay sebelum pindah ke teks kedua
      }
    }

    function animateSecondText() {
      if (secondIndex < secondTitles.length) {
        titleElement.innerHTML += secondTitles[secondIndex];
        secondIndex++;
        setTimeout(animateSecondText, 300);
      }
    }

    // Mulai animasi pertama
    animateFirstText();

    clearTimeout(c);
  }, 1000);
};
