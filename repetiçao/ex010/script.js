function mostrarResultado(texto) {
    var resultado = document.getElementById("resultado");
    resultado.textContent = texto;
    resultado.classList.add("is-filled");
    alert(texto);
}

function executarExercicio() {
    var sorteado = Math.floor(Math.random() * 10) + 1;
    var tentativas = 0;
    var palpite;
    do {
        palpite = Number(prompt("Adivinhe o numero (1 a 10):"));
        tentativas++;
        if (palpite !== sorteado) alert("Errou, tente novamente.");
    } while (palpite !== sorteado);
    mostrarResultado(`Parabens, voce acertou em ${tentativas} tentativa(s)!`);
}
