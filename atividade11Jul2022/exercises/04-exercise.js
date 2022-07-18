/* As maçãs custam R$0,30 cada se forem compradas menos do que 12, e
R$0,25 se forem compradas 12 ou mais. Escreva um programa que leia
o número de maçãs compradas, calcule e escreva o valor total da compra. */


const rs = require("readline-sync");
const number = rs.questionInt("Quantas maçãs você deseja comprar? ");
const retailPrice = number * 0.30;
const wholesalePrice = number * 0.25;

if (number < 12) {
	console.log("O valor total de " + number + " maçã(s) é: " + "R$" + parseFloat(retailPrice.toFixed(2)));
} else {
	console.log("O valor total de " + number + " maçã(s) é: " + "R$" + parseFloat(wholesalePrice.toFixed(2)));
}