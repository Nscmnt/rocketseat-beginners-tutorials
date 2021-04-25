export default function (Photo) {
  Photo.downloadButton = document.getElementById("download");

  Photo.download = () => {
    const name = Photo.photoName.replace(".jpg", "");
    const a = document.createElement("a");
    a.download = name + "-cropped.png";
    a.href = Photo.canvas.toDataURL();
    a.click();
  };
}
