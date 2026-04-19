function mostrarResultado(texto) {
    var resultado = document.getElementById("resultado");
    resultado.textContent = texto;
    resultado.classList.add("is-filled");
    alert(texto);
}

function executarExercicio() {
    var pares = [];
    for (var i = 2; i <= 50; i += 2) pares.push(i);
    mostrarResultado(`Pares de 1 a 50:\n${pares.join(", ")}`);
}
