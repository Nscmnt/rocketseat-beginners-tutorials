// function().call(this, arg1, arg2)

// retorna o this do contexto informado

this.name = "Camila";

function sayMyName(age) {
  this.age = age;
  console.log(this.name, this.age); // não existe o this name
}

const dev = {
  name: "Isabella",
};

sayMyName.call(this, 18);
sayMyName.call(dev, 19);
