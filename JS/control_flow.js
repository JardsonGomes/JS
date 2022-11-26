// Control flow
/*
  O controle do fluxo normalmente é linha a linha, porém, da para condicionar 
  qual linha vai começar o fluxo
*/

//->   If else
// o Termo "if" sempre vai precisar de uma condicional
let temperature = 38.5;
let highTemperature = temperature >= 38.0;
let mediumTemperature = temperature >= 37.0 && temperature <= 37.9;

if (mediumTemperature) {
  console.log("Está febril");
} else if (highTemperature) {
  console.log("Com muita febre");
} else {
  console.log("Sem febre");
}

//-> switch
function calculate(number1, operator, number2) {
  let result;

  // o switch vem com uma expressão
  switch (operator) {
    case "+":
      result = number1 + number2;
      break;
    case "-":
      result = number1 - number2;
      break;
    case "*":
      result = number1 * number2;
      break;
    case "/":
      result = number1 / number2;
      break;
    default:
      console.log("Não implementado");
      break;
  }
  return result;
}

console.log(calculate(4, "+", 8));
console.log(calculate(15, "-", 13));
console.log(calculate(4, "*", 3));
console.log(calculate(8, "/", 8));
console.log(calculate(4, "%", 8));

//-> throw, try catch

//throw vem do inglês lançar

function sayMyName(name = "") {
  if (name === "") {
    throw "Nome é necessario";
  }

  console.log("depois do erro");
}
//try... catch no try vem do inglês tentar, logo onde é chamado a função é no try
try {
  sayMyName();
} catch (e) {
  console.log(e);
}
//catch vem do inglês pegar, logo o catch captura o erro do throw e executa o
//comando  dado a ele
/*
  Caso haja um throw e não tiver um try catch a aplicação inteira sofre um bug 
  e para de funcionar. mesmo que haja outras linhas de códigos que não condiz a
  função usada para o throw try catch
*/
