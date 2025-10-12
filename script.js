// 💍 Dynamische Navigation & Effekte für die Hochzeitswebsite

// Basisdomain für externe Links
const baseDomain = "https://unser-liebesfest.ch";

// Dynamische Links generieren
document.querySelectorAll('nav a[data-section]').forEach(link => {
    const section = link.getAttribute('data-section');
    link.href = `${baseDomain}/${section}`;

    // Externe Links im neuen Tab öffnen (außer Home & Kontakt)
    if (section !== 'home' && section !== 'kontakt') {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    }
});

// 🌸 Sanftes Scrollen für interne Links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// 💃 Dynamische Slideshow
const slideshowImages = [
    "Pictures/Tanz1.JPG",
    "Pictures/Tanz2.JPG",
    "Pictures/Tanz3.JPG",
    "Pictures/Tanz4.JPG",
    "Pictures/Tanz5.JPG",
    "Pictures/Tanz6.JPG",
    "Pictures/Tanz7.JPG",
    "Pictures/Tanz8.JPG",
    "Pictures/Tanz9.JPG"
];

let currentImageIndex = 0;
const slideshowElement = document.getElementById("slideshow");

if (slideshowElement) {
    function changeImage() {
        // Bild ausblenden
        slideshowElement.style.opacity = 0;

        // Nach 1 Sekunde neues Bild setzen
        setTimeout(() => {
            currentImageIndex = (currentImageIndex + 1) % slideshowImages.length;
            slideshowElement.src = slideshowImages[currentImageIndex];
            // Bild wieder einblenden
            slideshowElement.style.opacity = 1;
        }, 1000);
    }

    // Alle 3 Sekunden wechseln (langsamer & sanfter)
    setInterval(changeImage, 3000);
}

// 💞 Countdown zur Hochzeit
const countdownElement = document.getElementById("countdown");

// Ziel-Datum (26. Juni 2026, 15:45 Uhr)
const targetDate = new Date("June 26, 2026 15:45:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    countdownElement.innerHTML = "💍 Heute ist unser grosser Tag! 💕";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdownElement.innerHTML = `
    Noch ${days} Tage, ${hours} Std, ${minutes} Min und ${seconds} Sek!
  `;
}

// Alle 1 Sekunde aktualisieren
setInterval(updateCountdown, 1000);
updateCountdown();
