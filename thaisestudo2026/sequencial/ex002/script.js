function mostrarResultado(texto) {
    var resultado = document.getElementById("resultado");
    resultado.textContent = texto;
    resultado.classList.add("is-filled");
    alert(texto);
}

function executarExercicio() {
    var numero = Number(prompt("Digite um numero inteiro:"));
    var antecessor = numero - 1;
    var sucessor = numero + 1;
    mostrarResultado(`Voce digitou ${numero}. O antecessor e ${antecessor} e o sucessor e ${sucessor}.`);
}
