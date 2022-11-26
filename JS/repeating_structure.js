// Estrutura de repetições

//->for

for (let i = 0; i <= 10; i++) {
  console.log(i);
}
// o "for" vai repetir até a condição mandar.
//break para a execução
//continue pula a execução e continua

for (let i = 100; i >= 1; i--) {
  if (i === 50) {
    console.log(i); //R> de 100 a 50
    break;
  }
  console.log(i); // R> de 100 a 51
}
//No "for" pode tbm ter uma condição interna, e pode ser utilizado o "break"
// para a finalização do for

// -> while
//Usado para quando não sabemos onde vai parar, só vai parar quando completar
// sua finalidade

let i = 1;

while (i < 10) {
  console.log(i);
  i++;
}

while (i > 10) {
  console.log(i);
  i /= 21;
}

//-> for .. of
//é uma função que vai criar um loop tbm a partir de uma variável que tivermos

let name = "jardson";
let names = ["Carla", "Gabriel", "Beatriz"];

for (let char of names) {
  console.log(char);
}
//R> "Carla", "Gabriel", "Beatriz"
for (let char of name) {
  console.log(char);
}
//R> "j""a""r""d""s""o""n"
//No caso de uma string, ele vai transforma em um array e depois separar11

//-> for .. in
// Ele vai criar um loop em cima de um objeto

let person = {
  name: "Jard",
  age: 31,
  weigth: 99.9,
};

for (let proprety in person) {
  console.log(proprety + " :");
  //R> aqui ele pega a propriedade, sendo ela *name, age, weigth*
  console.log(person[proprety]);
  //R> aqui ele pega o valor atribuido
}
