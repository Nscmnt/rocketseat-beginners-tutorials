// context function insider function
// não pega o this global, porém pega o escopo interno

this.name = "Valesca";

function age() {
  this.name = "Clayton";
  return function birthYear(age) {
    const year = 2021 - age;
    console.log(this.name, year);
  };

  // birthYear(age);
}

const Age = age();
console.log(Age); // [Function: birthYear]
Age(31); // 'Clayton' 1990
