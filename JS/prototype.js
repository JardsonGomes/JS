// ESTUDO SOBRE PROTÓTIPOS
//Prototypes

/* 
  type conversion (typecasting) vs type coersion
  •Alteração de um tipo de dado para outro tipo
*/
console.log("9" + 5);
//R> "95" // logo o 5 foi coersion de number para string
console.log(Number("9") + 5);
//R> "14" // logo o 9 foi conversion de um string para um number

let string = "123";
console.log(Number(string)); // transformando uma string em number

let number = 312;
console.log(String(number)); // transformando um number em string

// -> Contando quantos caracteres tem uma palavra <-//

let word = "dsjah mdsjhan s jhans";
console.log(word.length);
// com o length você conta a quantidades de caracteres tem uma palavra
// Para contar quantos digitos tem um number, precisa primeiro transformar ele em string

// -> Transformando ou fixando um numero quebrando na quantidade desejada <-//

let number1 = 1234541.2524;
console.log(number1);
// R> 1234541.2524
console.log(number1.toFixed(2));
// R> 1234541.25
//o toFixed faz com que a quantidade maxima de caracteres depois do "." seja dois
console.log(number1.toFixed(2).replace(".", ","));
//R> 1234541,25
//o replace faz a troca do "." por o que desejar, no exemplo abaixo foi uma ","

// -> Transformando letras maiusculoas ou minusculas <-//
let word1 = "Olá mundo";
console.log(word1);
//R> Olá mundo
console.log(word1.toUpperCase());
//R> OLÁ MUNDO
// Com o toUpperCase a string fica toda em caixa alta.
console.log(word1.toLowerCase());
//R> olá mundo
// Com o toLowerCase a string fica toda em caixa baixa

// -> Manipulando Strings e Arrays <-//
/* Separe um texto que contem espaços, em um novo array onde cada texto é uma posição
do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque "_"
*/
let phrase = "Eu quero comer";
let myPhrase = phrase.split(" "); //O split pega a opção desejada e separa como array
console.log(myPhrase);
//R> ["Eu", "quero", "comer"]
/*Outro exemplo
let myPhrase = phrase.split("o"); Nesse caso o "o" seria o ponto de separação, assim ele desapareceria
R> ["Eu quer", " c", "mer"]
*/
myPhrase = myPhrase.join(" "); //O join pega a opção desejada e adiciona no array e transforma em uma string
console.log(myPhrase);
//R> "Eu quero comer"
/*
Outro exemplo
myPhrase = myPhrase.join("0"); //O join pega a opção desejada e adiciona no array e transforma em uma string
console.log(myPhrase);
R>Eu0quero0comer
*/

// -> Verificando se o texto contém uma palavra específica <-//

phrase = "Eu quero comer !";

console.log(phrase.includes("comer"));
//R>true
console.log(phrase.includes("arroz"));
//R>false

/* 
Com o includes podemos verificar se uma palavra chave contem ou não em uma string
Também sabendo que o "includes" é sensitivity, logo letras maiusculas e minusculas
fazem diferença
*/

// -> Criação de um array com o método construtor <-//

let myArray = new Array("a", "b", "c");
console.log(myArray.length);
//R> 3
// Assim se cria uma array com construtor

myArray = new Array(15);
console.log(myArray.length);
//R> 15
// Caso a construção  com o construtor seja com number,
//Ela vai ser criada com a quantidade de espaços porém em branco

// -> Transformar uma cadeia de caracteres em elementos de um array <-//

let words = "manipulation";
console.log(Array.from(words));
//Logo cada letra da string vira uma cadeia de caracteres

// -> Manipoulando um array <-//

let techs = ["html", "css", "js"];
// -> Adicionando um item
techs.push("nodejs", "json", "c++");
// -> Adicionando no começo do array
techs.unshift("sql");
// remover do fim
techs.pop();
// remover do começo
techs.shift();
// pegar alguns items específicos no aray
techs.slice((1, 3));
//R> Logo ele pega o que tem entre esses elementos no array
//remover 1 ou mais items em qualquer posição do array
techs.splice(1, 1);
//encontrar a posição de um elemento no array e remover a quantidade apartir da posição marcada
let index = techs.indexOf("json");
console.log(index);
//R> nesse console vai mostrar a posição da palavra chave no array
techs.splice(3, 3);
// pode ser usado tbm com a variável exemplo
techs.splice(index, 1);

index = techs.indexOf("json");
console.log(index);
//-1
//Quando o item não se encontrar mais na array ele vai da o resultado -1
