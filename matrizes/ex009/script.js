function mostrarResultado(texto) {
    var resultado = document.getElementById("resultado");
    resultado.textContent = texto;
    resultado.classList.add("is-filled");
    alert(texto);
}

function matrizParaTexto(matriz) { return matriz.map((l) => l.join(" ")).join("\n"); }
function executarExercicio() {
    var original = [[1,2,3],[4,5,6]];
    var t = [];
    for (var c = 0; c < original[0].length; c++) {
        t.push([]);
        for (var l = 0; l < original.length; l++) t[c].push(original[l][c]);
    }
    mostrarResultado(`Original:\n${matrizParaTexto(original)}\nTransposta:\n${matrizParaTexto(t)}`);
}
