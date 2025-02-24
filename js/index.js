// Manipulasi teks untuk <h1> (title)
const title = document.querySelector('.title');
const mainText = 'Special For You'.split('');
mainText.forEach((char) => {
  if (char !== ' ') {
    title.innerHTML += `<span>${char}</span>`;
  } else {
    title.innerHTML += `<span style="margin-right: 20px;"></span>`;
  }
});

// Manipulasi teks untuk <p> (subtitle)
const subtitle = document.querySelector('.subtitle');
const subText = 'Click the button below to see it!'.split('');
subText.forEach((char) => {
  if (char !== ' ') {
    subtitle.innerHTML += `<span>${char}</span>`;
  } else {
    subtitle.innerHTML += `<span style="margin-right: 20px;"></span>`;
  }
});

// Animasi delay acak untuk semua elemen <span>
const allSpans = document.querySelectorAll('.title span, .subtitle span');
allSpans.forEach((element) => {
  const randomDelay = Math.random() * 3; // Delay acak antara 0 hingga 3 detik
  element.style.animationDelay = `${randomDelay}s`;
});
