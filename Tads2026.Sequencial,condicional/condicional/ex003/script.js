function mostrarResultado(texto) {
    var resultado = document.getElementById("resultado");
    resultado.textContent = texto;
    resultado.classList.add("is-filled");
    alert(texto);
}

function executarExercicio() {
    var n1 = Number(prompt("Digite a primeira nota:"));
    var n2 = Number(prompt("Digite a segunda nota:"));
    var media = (n1 + n2) / 2;
    var situacao = "Reprovado";
    if (media >= 7) situacao = "Aprovado";
    else if (media >= 5) situacao = "Em Recuperacao";
    mostrarResultado(`Media: ${media.toFixed(1)} - ${situacao}.`);
}
