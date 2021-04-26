// arrow mantém o escopo onde é definida

// Sendo assim alterações dentro da arrow altera seu escopo superior
this.name = "Valesca";

const age = (age) => {
  const birthYear = (age) => {
    const year = 2021 - age;
    console.log(this.name, year);
  };

  birthYear(age);
};

age(31);
