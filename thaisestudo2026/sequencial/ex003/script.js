function mostrarResultado(texto) {
    var resultado = document.getElementById("resultado");
    resultado.textContent = texto;
    resultado.classList.add("is-filled");
    alert(texto);
}

function executarExercicio() {
    var nome = prompt("Digite o nome do aluno:");
    var n1 = Number(prompt("Digite a primeira nota:"));
    var n2 = Number(prompt("Digite a segunda nota:"));
    var n3 = Number(prompt("Digite a terceira nota:"));
    var media = (n1 + n2 + n3) / 3;
    mostrarResultado(`Aluno: ${nome} | Media final: ${media.toFixed(2)}.`);
}
