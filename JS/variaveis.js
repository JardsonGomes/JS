/* Estudo sobre variáveis
Existe três tipos de variáveis
• var // quase nunca usado
• let
• const // const é usado para a variável que não muda.

o JS é case-sensitive e aceitam a cadeia de caracteres Unicode:
  Pode: Iniciar com caracteres especiais: "$ _ "
    -> Iniciar com letras, letras maiusculas e minusculas diferencia a variable
    -> colocar acentos
  Não pode: 
   ->iniciar com numeros(number)
   -> colocar espaços vazios no nome ou entre eles.

Para vê o tipo da variável utiliza o comonda typeof variável

exemplo:

let clima = ""
console.log(typeof clima)
R. é uma string

let clima = 
console.log(typeof clima)
R. é undefined

let clima = 2
console.log(typeof clima)
R. é um number

let clima = false/true
console.log(typeof clima)
R. é um booleano

(Quando se usa o "var" como varíavel o JS utiliza uma programação automatica 
chamanda de hoisting[
  Onde o "var" independemte de onde foi criada, ela jogara a variável para o 
  começo do código
]

console.log(x)       === var x
{                    ===  console.log(x) 
  var x = 0          === {x = 0}
}  

dará o mesmo resulatado onde x está como undefined pq var foi declarado, mas,
seu valor só foi atribuido após a linha de execução.)

(o "let" são locais e só funcionam no escopo onde foi criada)
(o "const" são locais e só funcionam no escopo onde foi criada e não pode
ser modificado)

Para que o código seja plausível fazer variáveis com nomes plausíveis.
Que explique o que a variável é ou faz
e caso a variável use espaço colocar o segundo nome em maiusculas
ex.: verifyTest, testCase
De preferencia, usar sempre as variaveis em inglês


let age, isHuman;
let name = "jardson";
isHuman = true;
age = 31;

console.log("O " + name + " tem " + age + " anos e é humano ?" + isHuman);
Concatenando variaveis com textos

console.log(`O ${name} tem ${age} anos de idade`);
interpolação de variaveis com textos

*/

const person = {
  name: "Jardson",
  age: 31,
  weight: 88.6,
  isAdmin: true,
};

console.log(person.name); // dessa forma eu pego somente um item da variável

/*
Para acessar os valores separado de um array usamos o [] e depois a posição
sempre a posição começara com 0
*/

const person1 = ["Jardson", 31, 88.6, true];

console.log(person1[2]);

//para saber o tamanho do array se usa console.log(person1.length)
