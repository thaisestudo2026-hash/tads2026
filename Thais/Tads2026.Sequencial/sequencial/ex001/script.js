function mostrarResultado(texto) {
    var resultado = document.getElementById("resultado");
    resultado.textContent = texto;
    resultado.classList.add("is-filled");
    alert(texto);
}

function executarExercicio() {
    var n1 = Number(prompt("Digite o primeiro numero inteiro:"));
    var n2 = Number(prompt("Digite o segundo numero inteiro:"));
    var soma = n1 + n2;
    mostrarResultado(`A soma de ${n1} + ${n2} = ${soma}.`);
}
