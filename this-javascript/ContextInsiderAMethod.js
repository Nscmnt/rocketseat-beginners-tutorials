// Não pega o escopo externo

this.name = "João";

const dev = {
  name: "Maria",
  sayMyName() {
    console.log(this.name);
  },
};

dev.sayMyName(); // "Maria"
