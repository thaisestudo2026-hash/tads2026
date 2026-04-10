function mostrarResultado(texto) {
    var resultado = document.getElementById("resultado");
    resultado.textContent = texto;
    resultado.classList.add("is-filled");
    alert(texto);
}

function executarExercicio() {
    var idade = Number(prompt("Digite sua idade (anos completos):"));
    var diasVividos = idade * 365;
    mostrarResultado(`Com ${idade} anos, voce ja viveu aproximadamente ${diasVividos} dias.`);
}
