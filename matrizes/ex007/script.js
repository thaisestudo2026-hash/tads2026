function mostrarResultado(texto) {
    var resultado = document.getElementById("resultado");
    resultado.textContent = texto;
    resultado.classList.add("is-filled");
    alert(texto);
}

function matrizParaTexto(matriz) { return matriz.map((l) => l.join(" ")).join("\n"); }
function executarExercicio() {
    var n = Number(prompt("Digite o tamanho N:"));
    var identidade = [];
    for (var i = 0; i < n; i++) {
        identidade.push([]);
        for (var j = 0; j < n; j++) identidade[i].push(i === j ? 1 : 0);
    }
    mostrarResultado(matrizParaTexto(identidade));
}
