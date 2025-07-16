const sponsorImages = [
  "img/sponsor/Affiliazione_Logo_Oppeano.png",
  "img/sponsor/Banca_Veronese.jpg",
  "img/sponsor/Doctor_Glass.jpg",
  "img/sponsor/Carpenteria_guerra.png",
  "img/sponsor/Centomo_logo.png",
  "img/sponsor/citres.png",
  "img/sponsor/Bevande_Verona.png",
  "img/sponsor/eurospin.jpg",
  "img/sponsor/floor_green.jpg",
  "img/sponsor/green_company.jpg",
  "img/sponsor/guariento_autolavaggio.png",
  "img/sponsor/immobiliare_la_corte.jpeg",
  "img/sponsor/kasba_viaggi.png",
  "img/sponsor/littelfuse.jpg",
  "img/sponsor/logistica_1.jpg",
  "img/sponsor/Makeroni.png",
  "img/sponsor/AB.jpg",
  "img/sponsor/Ballottin Luciano Sas.jpg"
];
let index = 0;

function updateSponsors() {
  const left = document.getElementById('sponsor-left');
  const right = document.getElementById('sponsor-right');
  const leftMirror = document.getElementById('sponsor-left-mirror');
  const rightMirror = document.getElementById('sponsor-right-mirror');

  // Fade out
  [left, right, leftMirror, rightMirror].forEach(el => el.style.opacity = 0);

  setTimeout(() => {
    const nextLeft = sponsorImages[index % sponsorImages.length];
    const nextRight = sponsorImages[(index + 1) % sponsorImages.length];

    // Aggiorna immagini
    left.src = nextLeft;
    right.src = nextRight;
    leftMirror.src = nextLeft;
    rightMirror.src = nextRight;

    // Fade in
    [left, right, leftMirror, rightMirror].forEach(el => el.style.opacity = 1);

    index = (index + 2) % sponsorImages.length;
  }, 500);
}

setInterval(updateSponsors, 5000);

const scrollContainerLeft = document.getElementById("scroll-container-left");
const scrollContainerRight = document.getElementById("scroll-container-right");
let scrollDirectionLeft = 1; // 1 = giù, -1 = su
let scrollDirectionRight = 1; // 1 = giù, -1 = su


function autoScroll() {
  // Scorri di 1px ogni 30ms
  scrollContainerLeft.scrollTop += scrollDirectionLeft;
  scrollContainerRight.scrollTop += scrollDirectionRight;

  // Quando arrivi in fondo, inverte la direzione
  if (scrollContainerLeft.scrollTop + scrollContainerLeft.clientHeight >= scrollContainerLeft.scrollHeight) {
    scrollDirectionLeft = -1;
  }
  if (scrollContainerRight.scrollTop + scrollContainerRight.clientHeight >= scrollContainerRight.scrollHeight) {
    scrollDirectionRight = -1;
  }

  // Quando torni in cima, torna a scorrere giù
  if (scrollContainerLeft.scrollTop <= 0) {
    scrollDirectionLeft = 1;
  }
  if (scrollContainerRight.scrollTop <= 0) {
    scrollDirectionRight = 1;
  }
}

// Avvia lo scrolling automatico
setInterval(autoScroll, 30);