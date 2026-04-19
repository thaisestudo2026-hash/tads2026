function mostrarResultado(texto) {
    var resultado = document.getElementById("resultado");
    resultado.textContent = texto;
    resultado.classList.add("is-filled");
    alert(texto);
}

function matrizParaTexto(matriz) { return matriz.map((l) => l.join(" ")).join("\n"); }
function executarExercicio() {
    var cinema = [];
    for (var i = 0; i < 5; i++) {
        cinema.push([]);
        for (var j = 0; j < 5; j++) cinema[i].push("Livre");
    }
    while (true) {
        var linha = Number(prompt("Linha (0 a 4, negativo para sair):"));
        if (linha < 0) break;
        var coluna = Number(prompt("Coluna (0 a 4, negativo para sair):"));
        if (coluna < 0) break;
        if (linha > 4 || coluna > 4) {
            alert("Posicao invalida.");
        } else if (cinema[linha][coluna] === "Livre") {
            cinema[linha][coluna] = "Ocupada";
            alert("Reserva realizada.");
        } else {
            alert("Poltrona ja ocupada.");
        }
    }
    mostrarResultado(`Mapa final:\n${matrizParaTexto(cinema)}`);
}
