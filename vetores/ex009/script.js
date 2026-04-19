function mostrarResultado(texto) {
    var resultado = document.getElementById("resultado");
    resultado.textContent = texto;
    resultado.classList.add("is-filled");
    alert(texto);
}

function executarExercicio() {
    var v1 = [1, 3, 5];
    var v2 = [2, 4, 6];
    var v3 = v1.concat(v2);
    mostrarResultado(`V1: [${v1.join(", ")}]\nV2: [${v2.join(", ")}]\nV3: [${v3.join(", ")}]`);
}
