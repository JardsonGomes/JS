/* Estudo sobre Funcitions
Função é um tipo de dado estruturado
Server para agrupamento de codigo
Reutilização de codigo
dar significado ao grupo de codigo
ou funcções
*/

//declaration - declaração da função
//function statement
function creatPhrases() {
  console.log("Frases motivacionais");
  console.log("Ler livros é importante");
  console.log("Estudar todos os dias, mesmo que ja seja bom");
}

// executar a function
//rodar, chamar, invocar a function
//execute, run, call, invoke
creatPhrases(); // <- executar a function

// -> Parte 2
// As funcções podem ser declaradas dentro de variaveis
// "function()" é uma function expression ou function anonymous
// as funções precisam de um parametro(parameters)
const sum = function (number1, number2) {
  console.log(number1 + number2);
};

sum(2, 3); //"(2,3)" são arguments onde sera substituido nos parameters

/*
const sum = function (number1, number2) {
  total = number1 + number2;
  return total; // utiliza o return para criar uma variavel e ela ser lida em outros cantos
};

let number1 = 34;
let number2 = 25;

console.log(`O número 1 é ${number1}`);
console.log(`O número 2 é ${number2}`);
console.log(`A soma é ${sum(number1, number2)}`);
console.log(total); // <- chamando a variavel total(sabendo que como não foi declarado var, let ou const. ela será uma VAR)
*/

//function scope

let subject = "Create Video";

function creatThink(subject) {
  //<- como na funcção foi declarada um valor entre () o var de dentro não muda o de fora
  subject = "criação";
  return subject;
}

console.log(subject);
console.log(creatThink(subject));

/*
let subject = "Create Video";
 
function creatThink() { //<- caso a função não tenha declaração a variavel subject será substituida global
  subject = "criação";
  return subject;
}
*/

//Function hoisting

sayMyName();

function sayMyName() {
  console.log("Jardson");
} //<- mesmo que a function seja declarada antes de criar, a function sofre hoisting

//arrow function

const MyName = () => {
  // uma função expression, atribuindo mais para uma const
  console.log("jardson");
};

MyName();

// callback function

function callBack(name) {
  console.log("antes de executar a callback");
  name();
  console.log("depois de executar a callback");
}

callBack(() => {
  console.log("estou em uma callback");
});

/*A callback é fazer uma função fora do scope e puxar para dentro de uma outra 
função para outra função ou funcionalidade
pegando o caso acima seria a mesma coisa de ->

function callBack(name) {
  console.log("antes de executar a callback");
  function name() {
    console.log("estou em uma callback");
  }
  name();
  console.log("depois de executar a callback");
}
callBack();

*/

//Função construtora

/* contructor function
  •Expressão new
  •criar um novo objeto
  •this keyword
*/

function Constructor(name) {
  this.name = name;
  this.walk = function () {
    return "andando";
  };
}
const jard = new Constructor("Jardson");

console.log(jard);
