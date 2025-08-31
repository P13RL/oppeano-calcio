const sponsorImages = [
  "img/citres.png",
  "img/finex.jpeg",
  "img/lg service.jpg",
  "img/.png",
  "img/perazzani davide trasporto pesce vivo.png",
  "img/termoidraulica rossi marco.jpg",
  "img/ballottin luciano assicurazioni.jpg",
  "img/comune oppeano.png",
  "img/floor green vivai.jpg",
  "img/il macellaio carni e affini di baraldo paolo.png",
  "img/kasba viaggi.png",
  "img/littlefuse.png",
  "img/logistica uno.jpg",
  "img/mister pomodor.jpg",
  "img/monolith.png",
  "img/new edison.png",
  "img/pentalfa.png",
  "img/aguzzi srl intermediari assicurativi.png",
  "img/bevande verona.jpg",
  "img/carpenteria meccanica guerrra.png",
  "img/europack.png",
  "img/eurospin.jpg",
  "img/f&f serramenti.jpg",
  "img/le botteghe galvani.jpeg",
  "img/luciano centomo.png",
  "img/makeroni.png",
  "img/mazzoni pane - tosano.png",
  "img/mix markt.jpg",
  "img/nlmk verona.jpg",
  "img/società affiliata hellas verona.png",
  "img/voglia di pizza.jpg",
  "img/zetadue service.png",
  "img/af impianti.jpg",
  "img/aladino caffè.jpg",
  "img/archidea.png",
  "img/banca veronese.jpg",
  "img/consorzio san marco group.png",
  "img/ferro sport.jpg",
  "img/immobiliare la corte.jpeg",
  "img/marchi gomme.jpg",
  "img/mondal.jpeg"
];
let index = 0;

function updateSponsors() {
  const left = document.getElementById('sponsor-left');
  const leftMirror = document.getElementById('sponsor-left-mirror');

  // Fade out
  [left, leftMirror].forEach(el => el.style.opacity = 0);

  setTimeout(() => {
    const nextLeft = sponsorImages[index % sponsorImages.length];

    // Aggiorna immagini
    left.src = nextLeft;
    leftMirror.src = nextLeft;
   // rightMirror.src = nextRight;

    // Fade in
    [left, leftMirror].forEach(el => el.style.opacity = 1);

    index = (index + 2) % sponsorImages.length;
  }, 500);
}

setInterval(updateSponsors, 3000);

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
