const sponsors = [
  "img/sponsor/Affiliazione_Logo_Oppeano.png",
  "img/sponsor/Ballottin Luciano Sas.jpg",
  "img/sponsor/Banca_Veronese.jpg",
  "img/sponsor/Bevande_Verona.png",
  "img/sponsor/Carpenteria_guerra.png",
  "img/sponsor/Centomo_logo.png",
  "img/sponsor/citres.png",
  "img/sponsor/Doctor_Glass.jpg",
  "img/sponsor/eurospin.jpg",
  "img/sponsor/floor_green.jpg",
  "img/sponsor/green_company.jpg",
  "img/sponsor/guariento_autolavaggio.png",
  "img/sponsor/immobiliare_la_corte.jpeg",
  "img/sponsor/kasba_viaggi.png",
  "img/sponsor/littelfuse.jpg",
  "img/sponsor/logistica_1.jpg",
  "img/sponsor/Makeroni.png"
];

let current = 0;

function updateSponsorImages() {
  const img = document.getElementById("sponsor-img");
  const imgMirror = document.getElementById("sponsor-img-mirror");

  img.style.opacity = 0;
  imgMirror.style.opacity = 0;

  setTimeout(() => {
    img.src = sponsors[current];
    imgMirror.src = sponsors[current];
    img.style.opacity = 1;
    imgMirror.style.opacity = 1;
  }, 500);

  current = (current + 1) % sponsors.length;
}

setInterval(updateSponsorImages, 5000);