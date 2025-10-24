const sponsorImagesLeft = [
  "img/aladino caffè.jpg",
  "img/archidea.png",
  "img/ballottin luciano assicurazioni.jpg",
  "img/banca veronese.jpg",
  "img/bevande verona.jpg",
  "img/cantina farina.jpg",
  "img/carpenteria meccanica guerrra.png",
  "img/citres.png",
  "img/comune oppeano.png",
  "img/consorzio san marco group.png",
  "img/doctor glass.png",
  "img/europack.png",
  "img/eurospin.jpg",
  "img/f.lli merlini.webp",
  "img/f&f serramenti.jpg",
  "img/ferro sport.jpg",
  "img/finex.jpeg",
  "img/floor green vivai.jpg",
  "img/il macellaio carni e affini di baraldo paolo.png",
  "img/immobiliare la corte.jpeg",
  "img/kasba viaggi.png",
  "img/af impianti.jpg"
]
const sponsorImagesRight = [
  "img/le botteghe galvani.jpeg",
  "img/lg service.jpg",
  "img/logistica uno.jpg",
  "img/luciano centomo.png",
  "img/makeroni.png",
  "img/marchi gomme.jpg",
  "img/mazzoni pane - tosano.png",
  "img/mister pomodoro.jpg",
  "img/mix markt.jpg",
  "img/mondal.jpeg",
  "img/monolith.png",
  "img/new edison.png",
  "img/nlmk verona.jpg",
  "img/pentalfa.png",
  "img/perazzani davide trasporto pesce vivo.png",
  "img/società affiliata hellas verona.png",
  "img/studio dentistico bressan.webp",
  "img/termoidraulica rossi marco.jpg",
  "img/voglia di pizza.jpg",
  "img/zetadue service.png",
  "img/aguzzi srl intermediari assicurativi.png"
];

const sponsorImages = [
  "img/le botteghe galvani.jpeg",
  "img/lg service.jpg",
  "img/logistica uno.jpg",
  "img/luciano centomo.png",
  "img/makeroni.png",
  "img/marchi gomme.jpg",
  "img/mazzoni pane - tosano.png",
  "img/mister pomodoro.jpg",
  "img/mix markt.jpg",
  "img/mondal.jpeg",
  "img/monolith.png",
  "img/new edison.png",
  "img/nlmk verona.jpg",
  "img/pentalfa.png",
  "img/perazzani davide trasporto pesce vivo.png",
  "img/società affiliata hellas verona.png",
  "img/studio dentistico bressan.webp",
  "img/termoidraulica rossi marco.jpg",
  "img/voglia di pizza.jpg",
  "img/zetadue service.png",
  "img/aguzzi srl intermediari assicurativi.png",
  "img/aladino caffè.jpg",
  "img/archidea.png",
  "img/ballottin luciano assicurazioni.jpg",
  "img/banca veronese.jpg",
  "img/bevande verona.jpg",
  "img/cantina farina.jpg",
  "img/carpenteria meccanica guerrra.png",
  "img/citres.png",
  "img/comune oppeano.png",
  "img/consorzio san marco group.png",
  "img/doctor glass.png",
  "img/europack.png",
  "img/eurospin.jpg",
  "img/f.lli merlini.webp",
  "img/f&f serramenti.jpg",
  "img/ferro sport.jpg",
  "img/finex.jpeg",
  "img/floor green vivai.jpg",
  "img/il macellaio carni e affini di baraldo paolo.png",
  "img/immobiliare la corte.jpeg",
  "img/kasba viaggi.png",
  "img/af impianti.jpg"
];
let indexLeft = 0;
let indexRight = 0;

function updateSponsors() {
  const left = document.getElementById('sponsor-left');
  const right = document.getElementById('sponsor-right');

  // Fade out
  //[left, right].forEach(el => el.style.opacity = 1);

  setTimeout(() => {
    // Immagini casuali
    const randomLeftIndex = Math.floor(Math.random() * sponsorImages.length);
    const randomRightIndex = Math.floor(Math.random() * sponsorImages.length);

    const nextLeft = sponsorImages[randomLeftIndex];
    const nextRight = sponsorImages[randomRightIndex];

    /*
    Immagini in ordine

    const nextLeft = sponsorImagesLeft[indexLeft % sponsorImagesLeft.length];
    const nextRight = sponsorImagesRight[indexRight % sponsorImagesRight.length];
    */
    // Aggiorna immagini
    left.src = nextLeft;
    right.src = nextRight;
   // rightMirror.src = nextRight;

    // Fade in
   // [left, right].forEach(el => el.style.opacity = 1);

    indexLeft = (indexLeft + 2) % sponsorImagesLeft.length;
    indexRight = (indexRight + 2) % sponsorImagesRight.length;

  }, 500);
}

setInterval(updateSponsors, 2500);

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
