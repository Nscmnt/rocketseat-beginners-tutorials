const { body } = document,
  containerColor = document.querySelector(".container-color"),
  currentColor = document.querySelector("#choose-color"),
  rangeColor = document.querySelector("#range-color"),
  newColor = document.querySelector("#new-color");

let newHex = "",
  chosenColor = "";

try {
  // criar função que manipule a cor, o primeiro parâmentro é a cor em hexadecimal o segundo seria o calculo de luminosidade sobre a cor escolhida
  body.style.backgroundColor = lumuiance("#6633CC ", 0);
  rangeColor.addEventListener("input", ({ target }) => {
    chosenColor = currentColor.value;
    if (chosenColor.length < 3) {
      alert("Campo Choose Color é obrigatório formato #000000");
      return;
    }

    setChangesValues(chosenColor, target.value);
  });
  currentColor.addEventListener("blur", ({ target }) => {
    if (target.value.length === 7) {
      setChangesValues(target.value);
    } else if (target.value.length < 3) {
      alert("Campo Choose Color é obrigatório formato #000000");
      return;
    }
  });
} catch (e) {
  console.log("Houve um Erro" + e.message);
}

function lumuiance(hex, luminosity = 0) {
  hex = hex.replace(/[^0-9a-f]/gi, "");

  // console.log(hex);
  const isValidHex = hex.length == 6 || hex.length == 3;

  if (!isValidHex) throw new Error("Invalid HEX");
  if (hex.length === 3) hex += hex;

  //Transformar hex em rgb
  // r (red)  / g (green)  / b (blue)
  const black = 0;
  const white = 255;

  const twoDigitGroup = hex.match(/([0-9a-f]){2}/gi);

  let newHex = "#";
  for (let twoDigit of twoDigitGroup) {
    const numberFromHex = parseInt(twoDigit, 16); // string e base de conversão
    const calculateLuminosity = numberFromHex + luminosity * 255;

    const blackOrLuminosity = Math.max(black, calculateLuminosity);
    const partilsColor = Math.min(white, blackOrLuminosity);

    const newColor = Math.round(partilsColor);
    const numberToHex = newColor.toString(16);

    const finalHex = `0${numberToHex}`.slice(-2);

    newHex = newHex + finalHex;
  }

  return newHex;
}

function setChangesValues(chosenColor, valueRange) {
  newHex = lumuiance(chosenColor, valueRange);
  containerColor.style.backgroundColor = newHex.toUpperCase();
  newColor.value = newHex;
}
