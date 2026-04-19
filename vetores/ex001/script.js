function mostrarResultado(texto) {
    var resultado = document.getElementById("resultado");
    resultado.textContent = texto;
    resultado.classList.add("is-filled");
    alert(texto);
}

function executarExercicio() {
    var amigos = ["Ana", "Bruno", "Carla", "Diego", "Elisa"];
    mostrarResultado(`Convidados:\n${amigos.join("\n")}`);
}
