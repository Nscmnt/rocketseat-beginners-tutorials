// mesma coisa que o call porém pegando um array de args

// function.apply(this, [arg1, arg2 ])

this.name = "Camila";

function sayMyName(age) {
  this.age = age;
  console.log(this.name, this.age);
}

const dev = {
  name: "Isabella",
};

sayMyName.apply(this, [18]);
sayMyName.apply(dev, [19]);

function multiply() {
  const args = Array.from(arguments);

  return args.reduce((acc, item) => {
    return acc * item;
  }, 1);
}

const total = multiply.apply(this, [2, 2]);
console.log(total);
