const sponsors = [
  "img/sponsor/2.jpeg",
  "img/sponsor/3.jpeg"
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