function mostrarResultado(texto) {
    var resultado = document.getElementById("resultado");
    resultado.textContent = texto;
    resultado.classList.add("is-filled");
    alert(texto);
}

function matrizParaTexto(matriz) { return matriz.map((l) => l.join(" ")).join("\n"); }
function executarExercicio() {
    var escalar = Number(prompt("Digite o multiplicador escalar:"));
    var original = [[2,3],[4,5]];
    var nova = [];
    for (var i = 0; i < original.length; i++) {
        nova.push([]);
        for (var j = 0; j < original[i].length; j++) nova[i].push(original[i][j] * escalar);
    }
    mostrarResultado(`Original:\n${matrizParaTexto(original)}\nNova:\n${matrizParaTexto(nova)}`);
}
