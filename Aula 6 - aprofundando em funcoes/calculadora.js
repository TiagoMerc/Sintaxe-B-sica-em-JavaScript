function calculadora() {
  const operacao = Number(prompt('Escolha uma operação:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão real (/)\n 5 - Divisão inteira (%)\n 6 - Potenciação (**)'));
  

  //Verificando se a operação é valida
  if (!operacao || operacao >= 7) {
    alert('Erro - operação inválida!');
    calculadora();
  } else{

  //Variáveis
let n1 = Number(prompt('Insira o primeiro valor:'));
let n2 = Number(prompt('Insira o segundo valor:'));
let resultado;

//Verificando se as variáveis são validas
if (!n1 || !n2) {
  alert('Erro - parâmetros inválidos!'); 
  calculadora(); 
} else {

//Funções aritmética
//Função Soma
function soma() {
  resultado = n1 + n2;
  alert(`${n1} + ${n2} = ${resultado}`);
  novaOperacao();
}
//Função Subração
function subtracao() {
  resultado = n1 - n2;
  alert(`${n1} - ${n2} = ${resultado}`);
  novaOperacao();
}
//Função Multiplicacao
function multiplicacao() {
  resultado = n1 * n2;
  alert(`${n1} * ${n2} = ${resultado}`);
  novaOperacao();
}
//Função Divisão Real
function divisaoReal() {
  resultado = n1 / n2;
  alert(`${n1} / ${n2} = ${resultado}`);
  novaOperacao();
}
//Função Divisão Inteira
function divisaoInteira() {
  resultado = n1 % n2;
  alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`);
  novaOperacao();
}
//Função Subração
function potenciacao() {
  resultado = n1 ** n2;
  alert(`${n1} elevado a ${n2}º é igual a ${resultado}`);
  novaOperacao();
}

      //Nova Operação
      function novaOperacao() {
        let opcao = prompt('Deseja fazer outra operação?\n 1 - Sim\n 2 - Não');

        if (opcao == 1) {
          calculadora();
        } else if (opcao == 2) {
          alert('Até mais!');
        } else {
          alert('Digite uma opção válida!');
          novaOperacao();
        }
      }  
    }   
  }
  //Verificação
/*   if (operacao == 1) {
    soma();
  } else if (operacao == 2) {
    subtracao();
  } else if (operacao == 3) {
    multiplicacao();
  } else if (operacao == 4) {
    divisaoReal();
  } else if (operacao == 5) {
    divisaoInteira();
  } else if (operacao == 6) {
    potenciacao();
  } */

    //Utilizando Switch case
    switch (operacao) {
      case 1:
        soma();
        break;
      case 2: 
        subtracao();
        break;
      case 3: 
        multiplicacao();
        break;
      case 4:
        divisaoReal();
        break;
      case 5:
        divisaoInteira();
        break;  
      case 6:
        potenciacao();
        break;
      }
  }

calculadora();