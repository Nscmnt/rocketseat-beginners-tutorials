let bar = document.createElement("div");
const postWrap = document.querySelector(".post-wrap");

bar.classList.add("bar-scroll");
document.body.append(bar);

function updateBar() {
  const textHeigth = postWrap.offsetHeight;
  const pagePositionY = window.pageYOffset;
  const updatedBar = (pagePositionY * 100) / textHeigth;

  bar.style.width = updatedBar + "%";
}

window.addEventListener("load", () => {
  document.addEventListener("scroll", updateBar);
});
