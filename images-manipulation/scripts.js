import Photo from "./Photo/index.js";

window.addEventListener("DOMContentLoaded", () => {
  Photo.load();
});

// Selecionar imagem
document.getElementById("select-image").onclick = () => {
  document.getElementById("photo-file").click();
};

// Cortar imagem
Photo.cropButton.onclick = () => Photo.crop();

// Exportar imagem
Photo.downloadButton.onclick = () => Photo.download();
