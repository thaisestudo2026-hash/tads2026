function mostrarResultado(texto) {
    const resultado = document.getElementById("resultado");
    resultado.textContent = texto;
    resultado.classList.add("is-filled");
    alert(texto);
}

function lerNumero(mensagem) {
    return Number(prompt(mensagem));
}

function exercicio01() {
    const numero1 = lerNumero("Digite o primeiro numero inteiro:");
    const numero2 = lerNumero("Digite o segundo numero inteiro:");
    const soma = numero1 + numero2;

    mostrarResultado(`A soma de ${numero1} + ${numero2} = ${soma}.`);
}

function exercicio02() {
    const numero = lerNumero("Digite um numero:");
    const antecessor = numero - 1;
    const sucessor = numero + 1;

    mostrarResultado(`Voce digitou ${numero}. O antecessor e ${antecessor} e o sucessor e ${sucessor}.`);
}

function exercicio03() {
    const nome = prompt("Digite o nome do aluno:");
    const nota1 = lerNumero("Digite a 1a nota:");
    const nota2 = lerNumero("Digite a 2a nota:");
    const nota3 = lerNumero("Digite a 3a nota:");
    const media = (nota1 + nota2 + nota3) / 3;

    mostrarResultado(`Aluno: ${nome} | Media final: ${media.toFixed(2)}.`);
}

function exercicio04() {
    const valorEmReais = lerNumero("Quanto voce tem na carteira (R$)?");
    const cotacaoDolar = 5;
    const valorEmDolares = valorEmReais / cotacaoDolar;

    mostrarResultado(
        `Com R$ ${valorEmReais.toFixed(2)}, voce pode comprar US$ ${valorEmDolares.toFixed(2)} (cotacao R$ 5,00).`
    );
}

function exercicio05() {
    const largura = lerNumero("Digite a largura do terreno (m):");
    const comprimento = lerNumero("Digite o comprimento do terreno (m):");
    const area = largura * comprimento;

    mostrarResultado(`A area do terreno e ${area.toFixed(2)} m2.`);
}

function exercicio06() {
    const celsius = lerNumero("Digite a temperatura em Celsius (C):");
    const fahrenheit = (celsius * 9) / 5 + 32;

    mostrarResultado(`${celsius} C equivalem a ${fahrenheit.toFixed(2)} F.`);
}

function exercicio07() {
    const precoOriginal = lerNumero("Digite o preco do produto (R$):");
    const valorDesconto = precoOriginal * 0.15;
    const precoFinal = precoOriginal - valorDesconto;

    mostrarResultado(
        `Preco original: R$ ${precoOriginal.toFixed(2)} | Desconto (15%): R$ ${valorDesconto.toFixed(2)} | Preco final: R$ ${precoFinal.toFixed(2)}.`
    );
}

function exercicio08() {
    const valorConta = lerNumero("Digite o valor total da conta (R$):");
    const valorGorjeta = valorConta * 0.1;
    const totalPagar = valorConta + valorGorjeta;

    mostrarResultado(
        `Conta: R$ ${valorConta.toFixed(2)} | Taxa de servico (10%): R$ ${valorGorjeta.toFixed(2)} | Total a pagar: R$ ${totalPagar.toFixed(2)}.`
    );
}

function exercicio09() {
    const idadeAnos = lerNumero("Digite sua idade (anos completos):");
    const diasVividos = idadeAnos * 365;

    mostrarResultado(`Com ${idadeAnos} anos, voce ja viveu aproximadamente ${diasVividos} dias.`);
}

function exercicio10() {
    const horasTrabalhadas = lerNumero("Digite o numero de horas trabalhadas no mes:");
    const valorHora = lerNumero("Digite o valor recebido por hora (R$):");
    const salarioBruto = horasTrabalhadas * valorHora;
    const valorImpostos = salarioBruto * 0.08;
    const salarioLiquido = salarioBruto - valorImpostos;

    mostrarResultado(
        `Salario bruto: R$ ${salarioBruto.toFixed(2)} | Impostos (8%): R$ ${valorImpostos.toFixed(2)} | Salario liquido: R$ ${salarioLiquido.toFixed(2)}.`
    );
}
