function mostrarResultado(texto) {
    var resultado = document.getElementById("resultado");
    resultado.textContent = texto;
    resultado.classList.add("is-filled");
    alert(texto);
}

function matrizParaTexto(matriz) { return matriz.map((l) => l.join(" ")).join("\n"); }
function executarExercicio() {
    var m = [[2,7,1],[4,9,3],[6,5,8]];
    var soma = 0;
    for (var i = 0; i < m.length; i++) for (var j = 0; j < m[i].length; j++) soma += m[i][j];
    mostrarResultado(`Matriz:\n${matrizParaTexto(m)}\nSoma: ${soma}`);
}
