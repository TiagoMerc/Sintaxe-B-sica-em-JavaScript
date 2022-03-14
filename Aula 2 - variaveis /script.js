//Tipos primitivos

//Boolean
var VOuF =false;
console.log(typeof(VOuF)); //Saber o tipo da variável -> typeof 

// number
var numeroQualquer = 1;
console.log(typeof(numeroQualquer));

//String
var nome ='diana';
console.log(typeof(nome));

// function
var funcao = function() {}
console.log(typeof(funcao));

// como declarar
var variavel = 'diana';
variavel = 'martine';
console.log(variavel);

 let variavel2 = 'diana'; 
variavel2 = 'martine';
console.log(variavel2);

const constante = 'diana';
//constante = 'martine';
console.log(constante);

var escopoGlobal = 'global';
console.log(escopoGlobal);

function escopoLocal() {
  let escopoLocalInterno = 'local';
  console.log(escopoLocalInterno);
}
 escopoLocal();

 //Atribuição
 var atribuicao = 'diana';

 //Comparação 
 var comparacao = '0' == 0;
 console.log(comparacao);

 //Comparação identica
 var comparacaoIdentica = '0' === 0;
  console.log(comparacaoIdentica);

//Adição   
 var adicao = 1 + 1;
  console.log(adicao);

//Subtração
var subtracao = 2 - 1;
  console.log(subtracao);

//Multiplicação
var multiplicacao = 2 * 3;
  console.log(multiplicacao);

//Divisão real 
var divisaoReal = 6 / 2;
 console.log(divisaoReal);
 
//Divisão Inteiro
var DivisaoInteira = 5 % 2;
  console.log(DivisaoInteira);

//Potenciação
var potenciacao = 2 ** 10;
  console.log(potenciacao);

// maior que 
var maiorQue = 5 > 2;
  console.log(maiorQue);  

//Menor que
var menorQue = 5 < 2;
   console.log(menorQue);
   
// Maior ou igual a
var maiorOuIgual = 5 >= 2;
  console.log(maiorOuIgual);

//Menor ou igual 
var menorOuIgual = 5 <= 2;
  console.log(menorOuIgual);

var e = true && true;
  console.log(e);

var ou = false || false;
  console.log(ou);
  
var nao = ! true;
  console.log(nao);