// bind, retorna a função chamada, porém ligada ao contexto que lhe foi passado
// bound function

this.name = "Camila";
this.age = 40;

function sayMyName(age) {
  this.age = age;
  console.log(this.name, this.age);
}

const dev = {
  name: "Isabella",
  age: 25,
  sayMyAge() {
    console.log(this.age);
  },
};

const boundSayMyName = sayMyName.bind(this);
boundSayMyName(18);

// retirando o sayMyAge de uma contecto e "ligando" a outro

const age = dev.sayMyAge.bind(this);
age();
