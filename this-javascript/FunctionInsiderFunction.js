// context function insider function
// não pega o this global

this.name = "Valesca";

function age(age) {
  function birthYear(age) {
    const year = 2021 - age;
    console.log(this.name, year);
  }

  birthYear(age);
}

age(31);
