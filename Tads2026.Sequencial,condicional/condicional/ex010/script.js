function mostrarResultado(texto) {
    var resultado = document.getElementById("resultado");
    resultado.textContent = texto;
    resultado.classList.add("is-filled");
    alert(texto);
}

function executarExercicio() {
    var preco = Number(prompt("Digite o preco da etiqueta (R$):"));
    var opcao = Number(prompt("1-Pix/Dinheiro  2-Cartao a vista  3-2x cartao  4-3x ou mais"));
    var total;
    switch (opcao) {
        case 1: total = preco * 0.9; break;
        case 2: total = preco * 0.95; break;
        case 3: total = preco; break;
        case 4: total = preco * 1.1; break;
        default: return mostrarResultado("Opcao invalida.");
    }
    mostrarResultado(`Valor final: R$ ${total.toFixed(2)}`);
}
