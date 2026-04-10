function mostrarResultado(texto) {
    var resultado = document.getElementById("resultado");
    resultado.textContent = texto;
    resultado.classList.add("is-filled");
    alert(texto);
}

function executarExercicio() {
    var reais = Number(prompt("Quanto voce tem na carteira (R$)?"));
    var cotacao = 5;
    var dolares = reais / cotacao;
    mostrarResultado(`Com R$ ${reais.toFixed(2)}, voce pode comprar US$ ${dolares.toFixed(2)}.`);
}
