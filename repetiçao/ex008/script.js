function mostrarResultado(texto) {
    var resultado = document.getElementById("resultado");
    resultado.textContent = texto;
    resultado.classList.add("is-filled");
    alert(texto);
}

function executarExercicio() {
    var total = 0;
    var preco;
    do {
        preco = Number(prompt("Preco do produto (0 para parar):"));
        if (preco > 0) total += preco;
    } while (preco !== 0);
    mostrarResultado(`Total da compra: R$ ${total.toFixed(2)}`);
}
