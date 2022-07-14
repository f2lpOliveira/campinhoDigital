/* Faça um programa que receba um número e verifique se este
número é par ou impar, escrevendo na tela "PAR" ou "ÍMPAR" */


const rs = require("readline-sync");
const number = rs.questionInt("Digíte um número: ");

if (number % 2 === 0) {
	console.log("O número " + number + " é par.");
} else {
	console.log("o número " + number + " é ímpar.");
}