function mostrarResultado(texto) {
    const resultado = document.getElementById("resultado");
    resultado.textContent = texto;
    resultado.classList.add("is-filled");
    alert(texto);
}

function lerNumero(mensagem) {
    return Number(prompt(mensagem));
}

function matrizParaTexto(matriz) {
    return matriz.map((linha) => linha.join(" ")).join("\n");
}

function exercicio01() {
    const matriz = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];
    mostrarResultado(`Matriz 3x3:\n${matrizParaTexto(matriz)}`);
}

function exercicio02() {
    const matriz = [
        [2, 7, 1],
        [4, 9, 3],
        [6, 5, 8]
    ];

    let soma = 0;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) soma += matriz[i][j];
    }

    mostrarResultado(`Matriz:\n${matrizParaTexto(matriz)}\nSoma total: ${soma}`);
}

function exercicio03() {
    const matriz = [
        [4, 8, 2, 1],
        [9, 3, 7, 5],
        [6, 10, 11, 0],
        [12, 15, 14, 13]
    ];

    let maior = matriz[0][0];
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] > maior) maior = matriz[i][j];
        }
    }

    mostrarResultado(`Matriz 4x4:\n${matrizParaTexto(matriz)}\nMaior valor: ${maior}`);
}

function exercicio04() {
    const matriz = [
        [3, 1, 2],
        [4, 5, 6],
        [7, 8, 9]
    ];

    const diagonal = [];
    for (let i = 0; i < matriz.length; i++) diagonal.push(matriz[i][i]);

    mostrarResultado(`Matriz:\n${matrizParaTexto(matriz)}\nDiagonal principal: ${diagonal.join(", ")}`);
}

function exercicio05() {
    const matriz = [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [2, 4, 6, 8]
    ];

    let texto = `Matriz 3x4:\n${matrizParaTexto(matriz)}\n`;
    for (let i = 0; i < matriz.length; i++) {
        let somaLinha = 0;
        for (let j = 0; j < matriz[i].length; j++) somaLinha += matriz[i][j];
        texto += `Soma da linha ${i}: ${somaLinha}\n`;
    }

    mostrarResultado(texto);
}

function exercicio06() {
    const escalar = lerNumero("Digite o multiplicador escalar:");
    const original = [
        [2, 3],
        [4, 5]
    ];
    const novaMatriz = [];

    for (let i = 0; i < original.length; i++) {
        novaMatriz.push([]);
        for (let j = 0; j < original[i].length; j++) {
            novaMatriz[i].push(original[i][j] * escalar);
        }
    }

    mostrarResultado(`Original:\n${matrizParaTexto(original)}\nNova matriz:\n${matrizParaTexto(novaMatriz)}`);
}

function exercicio07() {
    const tamanho = lerNumero("Digite o tamanho N da matriz identidade:");
    const identidade = [];

    for (let i = 0; i < tamanho; i++) {
        identidade.push([]);
        for (let j = 0; j < tamanho; j++) {
            identidade[i].push(i === j ? 1 : 0);
        }
    }

    mostrarResultado(`Matriz identidade ${tamanho}x${tamanho}:\n${matrizParaTexto(identidade)}`);
}

function exercicio08() {
    const tabuleiro = [
        ["X", "X", "X"],
        ["O", "", "O"],
        ["", "O", ""]
    ];

    let temLinhaVencedora = false;
    for (let i = 0; i < 3; i++) {
        if (
            tabuleiro[i][0] !== "" &&
            tabuleiro[i][0] === tabuleiro[i][1] &&
            tabuleiro[i][1] === tabuleiro[i][2]
        ) {
            temLinhaVencedora = true;
        }
    }

    const resposta = temLinhaVencedora ? "Sim" : "Nao";
    mostrarResultado(`Tabuleiro:\n${matrizParaTexto(tabuleiro)}\nExiste linha vencedora? ${resposta}`);
}

function exercicio09() {
    const original = [
        [1, 2, 3],
        [4, 5, 6]
    ];
    const transposta = [];

    for (let coluna = 0; coluna < original[0].length; coluna++) {
        transposta.push([]);
        for (let linha = 0; linha < original.length; linha++) {
            transposta[coluna].push(original[linha][coluna]);
        }
    }

    mostrarResultado(
        `Original (2x3):\n${matrizParaTexto(original)}\nTransposta (3x2):\n${matrizParaTexto(transposta)}`
    );
}

function exercicio10() {
    const cinema = [];
    for (let i = 0; i < 5; i++) {
        cinema.push([]);
        for (let j = 0; j < 5; j++) cinema[i].push("Livre");
    }

    while (true) {
        const linha = lerNumero("Digite a linha para reservar (0 a 4, negativo para sair):");
        if (linha < 0) break;

        const coluna = lerNumero("Digite a coluna para reservar (0 a 4, negativo para sair):");
        if (coluna < 0) break;

        const foraDoMapa = linha > 4 || coluna > 4;
        if (foraDoMapa) {
            alert("Posicao invalida.");
            continue;
        }

        if (cinema[linha][coluna] === "Livre") {
            cinema[linha][coluna] = "Ocupada";
            alert("Reserva realizada.");
        } else {
            alert("Poltrona ja ocupada.");
        }
    }

    mostrarResultado(`Mapa final de poltronas:\n${matrizParaTexto(cinema)}`);
}
