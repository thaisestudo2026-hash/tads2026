

let a = Number(prompt("Digite um número:"));
let b = Number(prompt("Digite outro número:"));
let s = a + b;
alert("Resultado: " + s);


let n = Number(prompt("Digite um número:"));
alert("Antecessor: " + (n - 1));
alert("Sucessor: " + (n + 1));


let nome = prompt("Nome:");
let n1 = Number(prompt("Nota 1:"));
let n2 = Number(prompt("Nota 2:"));
let n3 = Number(prompt("Nota 3:"));
let m = (n1 + n2 + n3) / 3;
alert(nome + " média: " + m);


let r = Number(prompt("Reais:"));
let d = r / 5;
alert("Dólar: " + d);


let l = Number(prompt("Largura:"));
let c = Number(prompt("Comprimento:"));
let area = l * c;
alert("Área: " + area);


let c2 = Number(prompt("Celsius:"));
let f = (c2 * 9/5) + 32;
alert("Fahrenheit: " + f);


let p = Number(prompt("Preço:"));
let desc = p * 0.15;
alert("Final: " + (p - desc));


let conta = Number(prompt("Conta:"));
let total = conta + (conta * 0.10);
alert("Total: " + total);


let idade = Number(prompt("Idade:"));
alert("Dias: " + (idade * 365));


let h = Number(prompt("Horas:"));
let v = Number(prompt("Valor por hora:"));
let bruto = h * v;
let liquido = bruto - (bruto * 0.08);
alert("Salário: " + liquido);