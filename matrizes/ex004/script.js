function mostrarResultado(texto) {
    var resultado = document.getElementById("resultado");
    resultado.textContent = texto;
    resultado.classList.add("is-filled");
    alert(texto);
}

function matrizParaTexto(matriz) { return matriz.map((l) => l.join(" ")).join("\n"); }
function executarExercicio() {
    var m = [[3,1,2],[4,5,6],[7,8,9]];
    var diagonal = [];
    for (var i = 0; i < m.length; i++) diagonal.push(m[i][i]);
    mostrarResultado(`Matriz:\n${matrizParaTexto(m)}\nDiagonal: ${diagonal.join(", ")}`);
}
