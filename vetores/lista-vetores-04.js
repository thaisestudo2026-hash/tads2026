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
    const convidados = ["Ana", "Bruno", "Carla", "Diego", "Elisa"];
    mostrarResultado(`Lista de convidados:\n${convidados.join("\n")}`);
}

function exercicio02() {
    const numeros = [3, 7, 10, 2, 8];
    let soma = 0;

    for (let i = 0; i < numeros.length; i++) soma += numeros[i];
    mostrarResultado(`Vetor: [${numeros.join(", ")}]\nSoma total: ${soma}`);
}

function exercicio03() {
    const numeros = [];
    for (let i = 1; i <= 5; i++) numeros.push(lerNumero(`Digite o numero ${i}:`));

    let maior = numeros[0];
    let menor = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > maior) maior = numeros[i];
        if (numeros[i] < menor) menor = numeros[i];
    }

    mostrarResultado(`Numeros: [${numeros.join(", ")}]\nMaior: ${maior} | Menor: ${menor}`);
}

function exercicio04() {
    const numeros = [];
    for (let i = 1; i <= 10; i++) numeros.push(lerNumero(`Digite o numero ${i}:`));

    const pares = [];
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) pares.push(numeros[i]);
    }

    mostrarResultado(`Originais: [${numeros.join(", ")}]\nPares: [${pares.join(", ")}]`);
}

function exercicio05() {
    const frutas = ["maca", "banana", "uva", "pera", "laranja"];
    const busca = prompt("Digite a fruta que deseja buscar:").toLowerCase().trim();
    const posicao = frutas.indexOf(busca);

    if (posicao >= 0) return mostrarResultado(`Fruta encontrada na posicao ${posicao}.`);
    return mostrarResultado("Fruta nao encontrada.");
}

function exercicio06() {
    const numeros = [];
    for (let i = 1; i <= 5; i++) numeros.push(lerNumero(`Digite o numero ${i}:`));

    const ordemInversa = [];
    for (let i = numeros.length - 1; i >= 0; i--) ordemInversa.push(numeros[i]);

    mostrarResultado(`Original: [${numeros.join(", ")}]\nInverso: [${ordemInversa.join(", ")}]`);
}

function exercicio07() {
    const notas = [];
    for (let i = 1; i <= 5; i++) notas.push(lerNumero(`Digite a nota do aluno ${i}:`));

    let soma = 0;
    for (let i = 0; i < notas.length; i++) soma += notas[i];
    const media = soma / notas.length;

    let quantidadeAcimaDaMedia = 0;
    for (let i = 0; i < notas.length; i++) {
        if (notas[i] > media) quantidadeAcimaDaMedia++;
    }

    mostrarResultado(
        `Notas: [${notas.join(", ")}]\nMedia da turma: ${media.toFixed(2)}\nAcima da media: ${quantidadeAcimaDaMedia}`
    );
}

function exercicio08() {
    const base = lerNumero("Digite o numero base:");
    const quantidade = lerNumero("Digite a quantidade de multiplos:");
    const multiplos = [];

    for (let i = 1; i <= quantidade; i++) multiplos.push(base * i);
    mostrarResultado(`Primeiros ${quantidade} multiplos de ${base}:\n[${multiplos.join(", ")}]`);
}

function exercicio09() {
    const vetorA = [1, 3, 5];
    const vetorB = [2, 4, 6];
    const vetorUnido = vetorA.concat(vetorB);

    mostrarResultado(
        `Vetor 1: [${vetorA.join(", ")}]\nVetor 2: [${vetorB.join(", ")}]\nUniao: [${vetorUnido.join(", ")}]`
    );
}

function exercicio10() {
    const original = [1, 2, 2, 3, 4, 4, 4, 5];
    const semRepetidos = [];

    for (let i = 0; i < original.length; i++) {
        if (!semRepetidos.includes(original[i])) semRepetidos.push(original[i]);
    }

    mostrarResultado(`Original: [${original.join(", ")}]\nSem repetidos: [${semRepetidos.join(", ")}]`);
}
