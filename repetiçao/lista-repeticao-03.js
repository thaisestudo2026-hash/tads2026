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
    const contagem = [];
    for (let i = 10; i >= 0; i--) contagem.push(i);
    mostrarResultado(`${contagem.join("...")}\nDECOLAGEM!`);
}

function exercicio02() {
    const numero = lerNumero("Digite um numero inteiro:");
    let texto = `Tabuada do ${numero}:\n`;

    for (let i = 1; i <= 10; i++) {
        texto += `${numero} x ${i} = ${numero * i}\n`;
    }

    mostrarResultado(texto);
}

function exercicio03() {
    const n = lerNumero("Digite um inteiro positivo N:");
    let soma = 0;
    for (let i = 1; i <= n; i++) soma += i;
    mostrarResultado(`A soma de 1 ate ${n} e ${soma}.`);
}

function exercicio04() {
    const pares = [];
    for (let i = 2; i <= 50; i += 2) pares.push(i);
    mostrarResultado(`Numeros pares de 1 a 50:\n${pares.join(", ")}`);
}

function exercicio05() {
    const senhaCadastrada = prompt("Defina uma senha:");
    let tentativa = prompt("Digite a senha para login:");

    while (tentativa !== senhaCadastrada) {
        alert("Senha incorreta, tente novamente.");
        tentativa = prompt("Digite a senha para login:");
    }

    mostrarResultado("Acesso concedido!");
}

function exercicio06() {
    const numero = lerNumero("Digite um numero inteiro:");
    let fatorial = 1;

    for (let i = numero; i >= 1; i--) fatorial *= i;
    mostrarResultado(`Fatorial de ${numero} = ${fatorial}.`);
}

function exercicio07() {
    const fibonacci = [0, 1];
    for (let i = 2; i < 10; i++) fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    mostrarResultado(`Primeiros 10 numeros de Fibonacci:\n${fibonacci.join(", ")}`);
}

function exercicio08() {
    let total = 0;
    let preco;

    do {
        preco = lerNumero("Digite o preco do produto (0 para finalizar):");
        if (preco > 0) total += preco;
    } while (preco !== 0);

    mostrarResultado(`Valor total da compra: R$ ${total.toFixed(2)}`);
}

function exercicio09() {
    let maior = -Infinity;
    let menor = Infinity;

    for (let i = 1; i <= 5; i++) {
        const idade = lerNumero(`Digite a idade da pessoa ${i}:`);
        if (idade > maior) maior = idade;
        if (idade < menor) menor = idade;
    }

    mostrarResultado(`Maior idade: ${maior} | Menor idade: ${menor}.`);
}

function exercicio10() {
    const numeroSorteado = Math.floor(Math.random() * 10) + 1;
    let tentativas = 0;
    let palpite;

    do {
        palpite = lerNumero("Adivinhe um numero de 1 a 10:");
        tentativas++;
        if (palpite !== numeroSorteado) alert("Errou, tente novamente.");
    } while (palpite !== numeroSorteado);

    mostrarResultado(`Parabens, voce acertou em ${tentativas} tentativa(s)!`);
}
