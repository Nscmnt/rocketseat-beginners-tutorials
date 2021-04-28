// Estudo sobre o this, no browser o this refere ao objeto global window, enquanto no node existe um objeto chamado global, porém devido o node ser modulos o this refere se ao module.exports / export

console.log(this === exports); // node -- true

// console.log(this === window); // browser - true

console.log(global === exports); // false

this.name = "Loki";

console.log(exports.name); // { name: 'Loki'}

// no browser as variaveis e função em escopo global ficam penduradas no window

// this em escopo de função, caso uma função seja executada em escopo global o this referencia seu objeto global, no caso do node ele referencia o global

function myFn() {
  return this;
}

// console.log(myFn()); // retorna o global (node) - window (browser)

// no browser quando você declara uma variavel utilizando 'var' ela se pendura ao window, com 'let' e 'const' isso não acontece.

// na manipulação da DOM o this referencia o alvo do evento, com as particularidades das arrow functions

// this em objetos

const person = {
  firstName: "Walter",
  lastName: "White",
  nickName: "Heisenberg",
  getFullName() {
    const { firstName, lastName, nickName } = this; // utilizando destruturing
    // return `${this.firstName} ${this.lastName} ou ${this.nickName}`;

    return `${firstName} ${lastName} ou ${nickName}`;
  },
  printBio() {
    const fullname = this.getFullName();
    console.log(`${fullname} é um personagem de Breaking Bad.`);
  },
  laugh: () => {
    // console.log(this); // escopo do mudulo ou window no browser
    console.log(`${this.nickName} diz: hahahaha!`);
  },
};

// quando utilizado dentro de um objeto o this referencia o escopo do objeto

console.log(person.getFullName()); // 'Walter White ou Heisenberg'

// person.printBio(); // Walter White ou Heisenberg é um personagem de Breaking Bad.

// porém não é sempre que o this referencia o objeto que é declarado, o this vai mudar dependendo de onde a função é executada.
// ex:

const printBio = person.printBio; // armazenando a referencia da função na const

printBio(); // this.getFullName is not a function  * aqui o this é o objeto global pois a função foi executada em seu escopo global sem esta conectado diretamente ao objeto que foi criado.

// this em arrow functions

// O this das arrow functions herdam o escopo de onde o objeto foi declarado

person.laugh(); // undefined diz: hahahaha!

// this em classes referencia o objeto criado da class, arrow function possui comportamento diferente confrome exemplo anterior

class MyClass {
  constructor(value) {
    this.prop1 = value;
  }

  isThisEqualObj() {
    console.log(this === obj);
    setTimeout(() => {
      console.log(this === obj);
    }, 1000);
  }
}

const obj = new MyClass("value");

// o this dentro do arrow do setTimout referencia o escopo anterior ao da função onde ela foi declada, logo o seu escopo também é o escopo do objeto

obj.isThisEqualObj(); // true - true

// exemplo de classe e substituindo por function

// class Cat {
//   constructor(name) {
//     this.name = name;
//   }

//   getName() {
//     return this.name;
//   }
// }

// const myCat = new Cat("Loki");
// console.log(myCat.getName()); // 'Loki'

// formas de evitar o this, criação de objetos apartir de factory function

const makeCat = (name) => ({
  getName: () => name,
});

const myCat = makeCat("Loki");

console.log(myCat.getName());
