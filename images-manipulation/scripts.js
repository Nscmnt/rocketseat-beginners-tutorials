const photoFile = document.getElementById("photo-file");
let photoPreview = document.getElementById("photo-preview");
let image = new Image();
let photoName;

// select preview image
document.getElementById("select-image").onclick = () => {
  photoFile.click();
};

window.addEventListener("DOMContentLoaded", () => {
  photoFile.addEventListener("change", () => {
    let file = photoFile.files.item(0);
    photoName = file.name;

    //ler um arquivo
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      image = new Image();
      image.src = event.target.result;
      image.onload = onLoadImage;
    };
  });
});

// selection tool
const selection = document.getElementById("selection-tool");
let startX,
  startY,
  relativeStartX,
  relativeStartY,
  endX,
  endY,
  relativeEndX,
  relativeEndY,
  startSelection = false;
const events = {
  mouseover() {
    this.style.cursor = "crosshair";
  },
  mousedown(event) {
    const { clientX, clientY, offsetX, offsetY } = event;

    // console.table({
    //   client: [clientX, clientY],
    //   offset: [offsetX, offsetY],
    // });

    startX = clientX;
    startY = clientY;
    relativeStartX = offsetX;
    relativeStartY = offsetY;

    startSelection = true;
  },
  mousemove(event) {
    endX = event.clientX;
    endY = event.clientY;

    if (startSelection) {
      selection.style.display = "initial";
      selection.style.top = startY + "px";
      selection.style.left = startX + "px";

      selection.style.width = endX - startX + "px";
      selection.style.height = endY - startY + "px";
    }
  },
  mouseup() {
    startSelection = false;

    relativeEndX = event.layerX;
    relativeEndY = event.layerY;

    // mostra botão crop
    cropButton.style.display = "initial";
  },
};

// adicionando eventos a imagem
Object.keys(events).forEach((eventName) => {
  //addEventListener('mouse..', events.mouse...(fx))
  photoPreview.addEventListener(eventName, events[eventName]);
});

// canvas

let canvas = document.createElement("canvas");
let ctx = canvas.getContext("2d");

function onLoadImage() {
  const { width, height } = image;
  canvas.width = width;
  canvas.height = height;

  //limpar o contexto
  ctx.clearRect(0, 0, width, height);

  //desenha imagem no contexto
  ctx.drawImage(image, 0, 0);

  photoPreview.src = canvas.toDataURL();
}

// cotar imagem
const cropButton = document.getElementById("crop-image");
cropButton.onclick = () => {
  const { width: imgW, height: imgH } = image;
  const { width: previewW, height: previewH } = photoPreview;

  const [widthFactor, heightFactor] = [+(imgW / previewW), +(imgH / previewH)];

  const [selectionWidth, SelectionHeight] = [
    +selection.style.width.replace("px", ""),
    +selection.style.height.replace("px", ""),
  ];

  const [croppedWidth, croppedHeight] = [
    +(selectionWidth * widthFactor),
    +(SelectionHeight * heightFactor),
  ];

  const [actualX, actualY] = [
    +(relativeStartX * widthFactor),
    +(relativeStartY * heightFactor),
  ];

  // pega do contexto a imagem cortada

  const croppedImage = ctx.getImageData(
    actualX,
    actualY,
    croppedWidth,
    croppedHeight
  );

  //limpar ctx do canvas
  ctx.clearRect(0, 0, ctx.width, ctx.height);

  //ajuste de proporções

  image.width = canvas.width = croppedWidth;
  image.height = canvas.height = croppedHeight;

  // adicionar a imagem cropada ao contexto do canvas
  ctx.putImageData(croppedImage, 0, 0);

  // escoder ferramente de seleção

  selection.style.display = "none";

  //atualizr preview da imagem

  photoPreview.src = canvas.toDataURL();

  // mostra o botão de download
  downloadButton.style.display = "initial";
};

//download

const downloadButton = document.getElementById("download");
downloadButton.onclick = () => {
  const a = document.createElement("a");
  a.download = photoName + "-cropped.png";
  a.href = canvas.toDataURL();
  a.click();
};
