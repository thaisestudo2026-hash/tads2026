function mostrarResultado(texto) {
    var resultado = document.getElementById("resultado");
    resultado.textContent = texto;
    resultado.classList.add("is-filled");
    alert(texto);
}

function executarExercicio() {
    var conta = Number(prompt("Digite o valor da conta (R$):"));
    var gorjeta = conta * 0.1;
    var total = conta + gorjeta;
    mostrarResultado(`Conta: R$ ${conta.toFixed(2)} | Gorjeta: R$ ${gorjeta.toFixed(2)} | Total: R$ ${total.toFixed(2)}.`);
}
