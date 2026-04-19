function mostrarResultado(texto) {
    var resultado = document.getElementById("resultado");
    resultado.textContent = texto;
    resultado.classList.add("is-filled");
    alert(texto);
}

function matrizParaTexto(matriz) { return matriz.map((l) => l.join(" ")).join("\n"); }
function executarExercicio() {
    var m = [[4,8,2,1],[9,3,7,5],[6,10,11,0],[12,15,14,13]];
    var maior = m[0][0];
    for (var i = 0; i < m.length; i++) for (var j = 0; j < m[i].length; j++) if (m[i][j] > maior) maior = m[i][j];
    mostrarResultado(`Matriz:\n${matrizParaTexto(m)}\nMaior: ${maior}`);
}
