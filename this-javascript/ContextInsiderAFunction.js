// Não pega o contexto global caso esteja em 'modo strict' ( no node estamos nesse modo)

this.name = "Christian";

function sayMyName() {
  console.log(this.name); // underfined
}

sayMyName();
