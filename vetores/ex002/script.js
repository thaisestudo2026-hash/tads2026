function mostrarResultado(texto) {
    var resultado = document.getElementById("resultado");
    resultado.textContent = texto;
    resultado.classList.add("is-filled");
    alert(texto);
}

function executarExercicio() {
    var valores = [3, 7, 10, 2, 8];
    var soma = 0;
    for (var i = 0; i < valores.length; i++) soma += valores[i];
    mostrarResultado(`Vetor: [${valores.join(", ")}]\nSoma: ${soma}`);
}
