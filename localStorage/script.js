// variables
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
const imageContainer = document.querySelector(".image");
const button = document.querySelector("button");

// Events
window.onload = getExternalImage();
button.onclick = () => updateImage();
imageContainer.onclick = () => updateAll();

// Methods

function updateAll() {
  updateFavorites();
  updateClasses();
}

function updateFavorites() {
  const { index, existsInLocalStorage, imageSource } = getState();

  existsInLocalStorage
    ? favorites.splice(index, 1)
    : favorites.push(imageSource);

  localStorage.setItem("favorites", JSON.stringify(favorites));
}

async function updateImage() {
  await getExternalImage();
  updateClasses();
}

function updateClasses() {
  const { existsInLocalStorage } = getState();

  imageContainer.classList.remove("fav");

  if (existsInLocalStorage) {
    imageContainer.classList.add("fav");
  }
}

function getState() {
  const imageSource = document.querySelector(".image img").src;
  const index = favorites.indexOf(imageSource);
  const existsInLocalStorage = index != -1;

  return { imageSource, index, existsInLocalStorage };
}

async function getExternalImage() {
  const response = await fetch("https://source.unsplash.com/random");

  imageContainer.innerHTML = `<img class="transition" src="${response.url}">`;
}
