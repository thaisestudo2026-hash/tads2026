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
    const numero = lerNumero("Digite um numero inteiro:");
    const tipo = numero % 2 === 0 ? "par" : "impar";
    mostrarResultado(`O numero ${numero} e ${tipo}.`);
}

function exercicio02() {
    const anoNascimento = lerNumero("Digite seu ano de nascimento:");
    const anoAtual = lerNumero("Digite o ano atual:");
    const idade = anoAtual - anoNascimento;
    const mensagem = idade >= 18
        ? `Voce tem ${idade} anos. Ja pode tirar CNH.`
        : `Voce tem ${idade} anos. Ainda nao pode tirar CNH.`;
    mostrarResultado(mensagem);
}

function exercicio03() {
    const nota1 = lerNumero("Digite a primeira nota:");
    const nota2 = lerNumero("Digite a segunda nota:");
    const media = (nota1 + nota2) / 2;

    let situacao = "Reprovado";
    if (media >= 7) situacao = "Aprovado";
    else if (media >= 5) situacao = "Em Recuperacao";

    mostrarResultado(`Media: ${media.toFixed(1)} - ${situacao}.`);
}

function exercicio04() {
    const hora = lerNumero("Que horas sao? (0 a 23):");

    if (hora >= 0 && hora <= 11) return mostrarResultado("Bom dia!");
    if (hora >= 12 && hora <= 17) return mostrarResultado("Boa tarde!");
    if (hora >= 18 && hora <= 23) return mostrarResultado("Boa noite!");
    return mostrarResultado("Hora invalida.");
}

function exercicio05() {
    const ano = lerNumero("Digite um ano:");
    const ehBissexto = (ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0;
    mostrarResultado(ehBissexto ? `O ano ${ano} e bissexto.` : `O ano ${ano} nao e bissexto.`);
}

function exercicio06() {
    const peso = lerNumero("Digite seu peso (kg):");
    const altura = lerNumero("Digite sua altura (m):");
    const imc = peso / (altura * altura);

    let classificacao = "Obesidade";
    if (imc < 18.5) classificacao = "Abaixo do peso";
    else if (imc <= 24.9) classificacao = "Peso normal";
    else if (imc <= 29.9) classificacao = "Sobrepeso";

    mostrarResultado(`IMC: ${imc.toFixed(2)} - ${classificacao}.`);
}

function exercicio07() {
    const ladoA = lerNumero("Digite o primeiro lado:");
    const ladoB = lerNumero("Digite o segundo lado:");
    const ladoC = lerNumero("Digite o terceiro lado:");

    const formaTriangulo =
        ladoA < ladoB + ladoC &&
        ladoB < ladoA + ladoC &&
        ladoC < ladoA + ladoB;

    if (!formaTriangulo) return mostrarResultado("Esses valores nao formam triangulo.");
    if (ladoA === ladoB && ladoB === ladoC) return mostrarResultado("Forma triangulo Equilatero.");
    if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) return mostrarResultado("Forma triangulo Isosceles.");
    return mostrarResultado("Forma triangulo Escaleno.");
}

function exercicio08() {
    const opcao = lerNumero("Digite um numero de 1 a 7:");
    let dia = "Dia invalido";

    switch (opcao) {
        case 1: dia = "Domingo"; break;
        case 2: dia = "Segunda-feira"; break;
        case 3: dia = "Terca-feira"; break;
        case 4: dia = "Quarta-feira"; break;
        case 5: dia = "Quinta-feira"; break;
        case 6: dia = "Sexta-feira"; break;
        case 7: dia = "Sabado"; break;
    }

    mostrarResultado(dia);
}

function exercicio09() {
    const n1 = lerNumero("Digite o primeiro numero:");
    const n2 = lerNumero("Digite o segundo numero:");
    const operacao = prompt("Digite a operacao (+, -, * ou /):");
    let resultado;

    switch (operacao) {
        case "+":
            resultado = n1 + n2;
            break;
        case "-":
            resultado = n1 - n2;
            break;
        case "*":
            resultado = n1 * n2;
            break;
        case "/":
            if (n2 === 0) return mostrarResultado("Erro: divisao por zero.");
            resultado = n1 / n2;
            break;
        default:
            return mostrarResultado("Operacao invalida.");
    }

    mostrarResultado(`Resultado: ${resultado}`);
}

function exercicio10() {
    const precoEtiqueta = lerNumero("Digite o preco da etiqueta (R$):");
    const formaPagamento = lerNumero(
        "Escolha a forma de pagamento:\n1- Pix/Dinheiro\n2- Cartao a vista\n3- Cartao em 2x\n4- Cartao em 3x ou mais"
    );

    let total;
    switch (formaPagamento) {
        case 1: total = precoEtiqueta * 0.9; break;
        case 2: total = precoEtiqueta * 0.95; break;
        case 3: total = precoEtiqueta; break;
        case 4: total = precoEtiqueta * 1.1; break;
        default:
            return mostrarResultado("Opcao invalida.");
    }

    mostrarResultado(`Valor final a pagar: R$ ${total.toFixed(2)}`);
}
