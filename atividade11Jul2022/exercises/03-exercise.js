/* Escreva um programa que verifique a validade de uma
senha fornecida pelo usuário. A senha válida é o número: 1234.
Devem ser impressas as seguintes mensagens: "Acesso permitido!" caso
a senha seja válida ou "Acesso negado!" caso a senha seja inválida. */


const rs = require("readline-sync");
const access = rs.questionInt("Digite a senha de quatro números: ");
const password = 1234;

if (access === password) {
	console.log("Acesso permitido!");
} else {
	console.log("Acesso negado!");
}