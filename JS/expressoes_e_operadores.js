/* Estudo sobre Expressions and Operators
  -Expressions
  -Operators
   •Binary 
   •Unary
   •Ternary
*/

let number; // Expressões no JS o ";" não é obrigatório

(function () {
  console.log("alo");
})(); // Porém o ";" é recomendado para que o JS entenda que a expressão acaba ali

//• Binary Express

number = 1;
console.log(number + 1);
// Na expressão existe um numero somado com uma variável
console.log(++number);
// Na expressão acima é uma expressão Unary pois ele soma a variavel com ela mesmo
console.log(false ? "Aló" : "NaN");
//Na expressão acima é uma Ternary pois ela tem uma condition que existe três fatores

//-> Expressão "new"

let name = new String("Jard");
//o "new" cria um novo objeto que serve para usar o molde mais de uma vez
name.surName = "Gomes";
let age = new Number(31);
console.log(name, age);

//-> Operators Unary

const person = {
  name: "Jard",
  age: 25,
};
console.log(typeof person); // "typeof" é uma operação unaria
// Nessa operação ele vai mostrar o tipo de variável
delete person.age; // "delete" é uma operação unaria
//Nessa operação de "delete" ele remove (caso haja) uma propriedade do objeto

//-> Operadores aritiméticos

// multiplicação
console.log(1 * 3);
console.log(1.2 * 5);

//divisão
console.log(1 / 3);

//soma
console.log(1 + 1);

//subtração
console.log(1 - 1);

//resto da divisão
let remainder;
remainder = 11 % 3;
console.log(remainder);

//incremento
let increment;
increment = 0;
increment++;
console.log(increment);

//decrement
increment--;
let decrement = increment;
console.log(decrement);

//exponecial
console.log(2 ** 2); // no caso fica 2 elevado a 2

//-> Group operator (...)

let total = 2 + 3 * 5;
console.log(total);

total = (2 + 3) * 5; // usando os "()" ele faz um agrupamento como na matemática

//-> comparação "=="

let one = 1;
let two = 2;
console.log(one == two);
console.log(one == "1"); //Mesmo que o numero vire "string" dara true

//-> Diferentes "!" e "=" logo "!="
console.log(one != two);

//-> estritamente igual a ou diferente

// =*3 ou "==="
console.log(one === "1");
// Assim o "one" será false, pois sabe que o "1" é string e não number
console.log(one !== "1");
//Assim o "one " será true, pois sabe que o "1" é string e é verdade

//-> Operadores de atribuição

let x;

//assingmant
x = 1;
console.log(x);

//addtion assingmant
x += 2;
console.log(x);

//subtraction assingmant
x -= 1;
console.log(x);

//multiply assingmant
x *= 3;
console.log(x);

//division assingmant
x /= 2;
console.log(x);

//rameider, exponetiation
x **= 3;
console.log(x);

x %= 2;
console.log(x);

// -> Operadores lógicos (logical operators)
// - 2 valores booleanos, quando verificados, resultará em true or false

let pao = true;
let queijo = true;

//AND &&

console.log(pao && queijo);

//OR ||
console.log(pao || queijo);

//NOT !
console.log(!pao); //usa "!" para da a negativa
//R> false

//-> Operador Condicional (Ternary)
/*
  Dependendo da condição, nós receberemos valores diferentes

  
  //Condição então valor 1 se não valor 2
   -> condition ? value1 : value2

*/
//Exemplo de condições

let ovo = true;

//café da manhã top
const niceBreakfast = pao && ovo ? "café top" : "falta algo";
console.log(niceBreakfast);

/*  Falsy 
    Quando um valor é considerado false em contextos onde um booleano é 
    obrigatório (condicionais e loops)
    false
    0
    -0
    ""
    null 
    undefined
    NaN
*/

console.log(null ? "verdadeiro" : "false");

/*
  Truthy
  Quando um valor é considerado true em contextos onde um booleano é 
  obrigatório (condicionais e loops)

  true
  {}
  []
  1
  3.23
  "0"
  "false"
  -1
  infinity
  -infinity

*/
console.log("false" ? "verdadeiro" : "false");

/* Operator precedence
    ou precedência de operadores


 * grouping                     ()
 * negação e incremento         ! ++ --
 * multiplication and division  * /
 * adição e subtração           + -
 * realacional                  < <= > >= >=c
 * igualdade                    == != !== ===
 * AND                          &&
 * OR e                         ||
 * condicional                  ?:
 * assignment                   = += -= *= /=
 */
