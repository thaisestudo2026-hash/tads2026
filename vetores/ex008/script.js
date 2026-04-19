function mostrarResultado(texto) {
    var resultado = document.getElementById("resultado");
    resultado.textContent = texto;
    resultado.classList.add("is-filled");
    alert(texto);
}

function executarExercicio() {
    var base = Number(prompt("Digite o numero base:"));
    var quantidade = Number(prompt("Digite a quantidade de multiplos:"));
    var multiplos = [];
    for (var i = 1; i <= quantidade; i++) multiplos.push(base * i);
    mostrarResultado(`[${multiplos.join(", ")}]`);
}
