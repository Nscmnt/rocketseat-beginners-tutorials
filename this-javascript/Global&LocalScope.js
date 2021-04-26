console.log(this === exports); // no node o this refere se ao exports/module.exports

this.name = "Anna";

function sayMyName() {
  const name = "Jorge";

  console.log(name);
}

sayMyName();

console.log(exports.name);
