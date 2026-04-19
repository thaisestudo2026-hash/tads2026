function mostrarResultado(texto) {
    var resultado = document.getElementById("resultado");
    resultado.textContent = texto;
    resultado.classList.add("is-filled");
    alert(texto);
}

function executarExercicio() {
    var notas = [];
    for (var i = 1; i <= 5; i++) notas.push(Number(prompt(`Digite a nota ${i}:`)));
    var soma = 0;
    for (var i = 0; i < notas.length; i++) soma += notas[i];
    var media = soma / notas.length;
    var acima = 0;
    for (var i = 0; i < notas.length; i++) if (notas[i] > media) acima++;
    mostrarResultado(`Notas: [${notas.join(", ")}]\nMedia: ${media.toFixed(2)}\nAcima da media: ${acima}`);
}
