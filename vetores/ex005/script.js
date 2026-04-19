function mostrarResultado(texto) {
    var resultado = document.getElementById("resultado");
    resultado.textContent = texto;
    resultado.classList.add("is-filled");
    alert(texto);
}

function executarExercicio() {
    var frutas = ["maca", "banana", "uva", "pera", "laranja"];
    var busca = prompt("Digite a fruta para buscar:").toLowerCase().trim();
    var pos = frutas.indexOf(busca);
    if (pos >= 0) mostrarResultado(`Fruta encontrada na posicao ${pos}.`);
    else mostrarResultado("Fruta nao encontrada.");
}
