function mostrarResultado(texto) {
    var resultado = document.getElementById("resultado");
    resultado.textContent = texto;
    resultado.classList.add("is-filled");
    alert(texto);
}

function matrizParaTexto(matriz) { return matriz.map((l) => l.join(" ")).join("\n"); }
function executarExercicio() {
    var m = [[1,2,3],[4,5,6],[7,8,9]];
    mostrarResultado(`Matriz:\n${matrizParaTexto(m)}`);
}
