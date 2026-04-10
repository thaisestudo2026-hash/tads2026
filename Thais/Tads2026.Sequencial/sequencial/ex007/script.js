function mostrarResultado(texto) {
    var resultado = document.getElementById("resultado");
    resultado.textContent = texto;
    resultado.classList.add("is-filled");
    alert(texto);
}

function executarExercicio() {
    var precoOriginal = Number(prompt("Digite o preco do produto (R$):"));
    var valorDesconto = precoOriginal * 0.15;
    var precoFinal = precoOriginal - valorDesconto;

    mostrarResultado(
        `Preco original: R$ ${precoOriginal.toFixed(2)} | Desconto: R$ ${valorDesconto.toFixed(2)} | Preco final: R$ ${precoFinal.toFixed(2)}.`
    );
}
