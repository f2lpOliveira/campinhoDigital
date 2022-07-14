/* Escreva um programa para ler o ano de nascimento de uma pessoa e escrever
uma mensagem que diga se ela poderá ou não votar este ano (não é necessário
considerar o mês em que ela nasceu). */


const rs = require("readline-sync");
const anoDeNascimento = rs.questionInt("Digite seu ano de nascimento: ");
const ano = 2022;
const idade = ano - anoDeNascimento;

if (idade < 16) {
	console.log("Dado inválido, tente novamente!");
} else if (idade >= 16) {
	console.log("Você tem: " + idade + " anos.");
	console.log("Portanto, você está apto a votar!");
} else {
	console.log("Você tem: " + idade + " anos.");
	console.log("Portanto, você não está apto a votar!");
}