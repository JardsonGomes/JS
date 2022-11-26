// Barra barra é para comentar um código

console.log("Testando o script JS");
//console.log é para escrever alguma mensagem no devtools

/*
  Esse tipo de comententário é para multi linhas de códigos
*/

console.log(1 + 1); /* Tipo numbers podem fazer somas dentro do parenteses
caso não tenha nenhuma string ou booleano*/

console.log(`Usando crases podes colocar expressões exemplo 1+1 = ${1 + 1}`);
// para adicionar number com string você utiliza crases

/*
 -> Booleano é para colocar se é verdadeiro ou falso, bastante usando em "funcções"
onde se necessita de multiplas escolhas
 
 => undefined é valor "indefinido"

 ==> null é objeto que não possui nada dentro, diferente de indefinido


 logo undefined != null
*/

/* 
  Object
   • Objeto
   • Tem propriedades / Atributos
   • Funcionalidades / Métodos
   \/
*/

console.log({
  name: "Jardson",
  idade: 36,
  sexo: "M",
  andar: function () {
    console.log("andar");
  },
});

/* Estudo sobre vetores (Array)
 *Array (vetores)
  • Uma lista
  • Agrupamento de dados
*/

console.log(["Jardson", 36, "M", "anda"]);

pessoa = ["Jardson", 31, "M", "anda", "é lindo"];

console.log(pessoa);


