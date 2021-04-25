export default function (Photo) {
  Photo.load = function () {
    Photo.photoFile = document.getElementById("photo-file");

    Photo.photoFile.addEventListener("change", () => {
      const file = Photo.photoFile.files.item(0);
      Photo.photoName = file.name;

      // ler um arquivo
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = onLoadReader;
    });

    function onLoadReader(event) {
      Photo.image = new Image();
      Photo.image.src = event.target.result;
      Photo.image.onload = onLoadImage;
    }

    function onLoadImage() {
      const { width, height } = Photo.image;
      Photo.canvas.width = width;
      Photo.canvas.height = height;

      Photo.ctx // limpar o contexto
        .clearRect(0, 0, width, height);

      Photo.ctx // desenha imagem no contexto
        .drawImage(Photo.image, 0, 0);

      Photo.preview();
    }
  };
}
