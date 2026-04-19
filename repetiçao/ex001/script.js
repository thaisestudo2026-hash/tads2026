function mostrarResultado(texto) {
    var resultado = document.getElementById("resultado");
    resultado.textContent = texto;
    resultado.classList.add("is-filled");
    alert(texto);
}

function executarExercicio() {
    var valores = [];
    for (var i = 10; i >= 0; i--) valores.push(i);
    mostrarResultado(`${valores.join("...")}\nDECOLAGEM!`);
}
