// Strings: Exibindo frases com aspas
console.log("Ele disse: \"Olá, mundo!\""); // Escape para aspas duplas
console.log('Ela respondeu: \'Oi!\''); // Escape para aspas simples

// Number: Valor de pi arredondado
let valorPi = Math.PI;
console.log(valorPi.toFixed(2));

// Boolean: Resultado do código
let condicao1 = 5 > 3;
let condicao2 = 5 === "5";
console.log(condicao1 && condicao2); // false porque '===' compara tipos e valores

// Null vs Undefined
let valorNulo = null;
let valorIndefinido;
console.log(valorNulo, valorIndefinido);

// Array: Adicionando elementos
let lista = [1, 2, { nome: "João" }];
lista.push(3);
console.log(lista);

// Date: Próximo aniversário
let proximoAniversario = new Date(2025, 4, 15);
console.log(`${proximoAniversario.getDate()}/${proximoAniversario.getMonth() + 1}/${proximoAniversario.getFullYear()}`);

// Var, Let e Const
const valorX = 10;
{
  let valorY = 20;
  var valorZ = 30;
}
console.log(valorX); // 10
// console.log(valorY); // Erro: valorY is not defined
console.log(valorZ); // 30 (var possui escopo de função/global)

// Nomes e Regras de variáveis
// let 1num = 10; // Inválido: não pode começar com número
// let nome completo = "Maria"; // Inválido: espaços não são permitidos
// let const = 50; // Inválido: "const" é uma palavra reservada

// Atribuir ao declarar
let valorA;
console.log(valorA); // undefined
valorA = 15;
console.log(valorA); // 15
valorA = "Texto";
console.log(typeof valorA); // string

// If Else: Verificar se um número é positivo, negativo ou zero
let numero = -5;
if (numero > 0) {
  console.log("Positivo");
} else if (numero < 0) {
  console.log("Negativo");
} else {
  console.log("Zero");
}

// If Else If: Classificação de idade
let faixaEtaria = 25;
if (faixaEtaria >= 0 && faixaEtaria <= 12) {
  console.log("Criança");
} else if (faixaEtaria >= 13 && faixaEtaria <= 17) {
  console.log("Adolescente");
} else if (faixaEtaria >= 18 && faixaEtaria <= 59) {
  console.log("Adulto");
} else {
  console.log("Idoso");
}

// Switch: Dias da semana
let diaSemana = 3;
switch (diaSemana) {
  case 1:
    console.log("Domingo");
    break;
  case 2:
    console.log("Segunda-feira");
    break;
  case 3:
    console.log("Terça-feira");
    break;
  case 4:
    console.log("Quarta-feira");
    break;
  case 5:
    console.log("Quinta-feira");
    break;
  case 6:
    console.log("Sexta-feira");
    break;
  case 7:
    console.log("Sábado");
    break;
  default:
    console.log("Número inválido");
}

// Try Catch: Divisão com tratamento de erro
function dividirNumeros(num1, num2) {
  try {
    if (num2 === 0) throw new Error("Divisão por zero não é permitida");
    console.log(num1 / num2);
  } catch (error) {
    console.error(error.message);
  }
}
dividirNumeros(10, 0);

// While: Números de 1 a 10
let contador = 1;
while (contador <= 10) {
  console.log(contador);
  contador++;
}

// For: Tabuada do 7
for (let multiplicador = 1; multiplicador <= 10; multiplicador++) {
  console.log(`7 x ${multiplicador} = ${7 * multiplicador}`);
}

// For Of: Exibindo frutas
let listaFrutas = ["Maçã", "Banana", "Uva"];
for (let fruta of listaFrutas) {
  console.log(fruta);
}

// For In: Exibindo propriedades e valores do objeto
const dadosPessoa = { nome: "João", idade: 30, cidade: "Recife" };
for (let chave in dadosPessoa) {
  console.log(`${chave}: ${dadosPessoa[chave]}`);
}
