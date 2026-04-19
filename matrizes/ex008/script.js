function mostrarResultado(texto) {
    var resultado = document.getElementById("resultado");
    resultado.textContent = texto;
    resultado.classList.add("is-filled");
    alert(texto);
}

function matrizParaTexto(matriz) { return matriz.map((l) => l.join(" ")).join("\n"); }
function executarExercicio() {
    var tabuleiro = [["X","X","X"],["O","","O"],["","O",""]];
    var venceu = false;
    for (var i = 0; i < 3; i++) {
        if (tabuleiro[i][0] !== "" && tabuleiro[i][0] === tabuleiro[i][1] && tabuleiro[i][1] === tabuleiro[i][2]) venceu = true;
    }
    mostrarResultado(`Tabuleiro:\n${matrizParaTexto(tabuleiro)}\nLinha vencedora? ${venceu ? "Sim" : "Nao"}`);
}
