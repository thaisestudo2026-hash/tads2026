function mostrarResultado(texto) {
    var resultado = document.getElementById("resultado");
    resultado.textContent = texto;
    resultado.classList.add("is-filled");
    alert(texto);
}

function matrizParaTexto(matriz) { return matriz.map((l) => l.join(" ")).join("\n"); }
function executarExercicio() {
    var m = [[1,2,3,4],[5,6,7,8],[2,4,6,8]];
    var texto = `Matriz:\n${matrizParaTexto(m)}\n`;
    for (var i = 0; i < m.length; i++) {
        var soma = 0;
        for (var j = 0; j < m[i].length; j++) soma += m[i][j];
        texto += `Soma da linha ${i}: ${soma}\n`;
    }
    mostrarResultado(texto);
}
