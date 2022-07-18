/* Escreva um programa para ler 3 valores inteiros (considere que não
serão lidos valores iguais) e escrevê-los em ordem crescente.*/


const rs = require("readline-sync");
const list = [];
const firstValue = rs.questionInt("Digíte um primeiro número: ");
list.push(firstValue);
const secondValue = rs.questionInt("Digíte um segundo número: ");
list.push(secondValue);
const thirdValue = rs.questionInt("Digíte um terceiro número: ");
list.push(thirdValue);

list.sort((a, b) => a - b);
console.log(list);