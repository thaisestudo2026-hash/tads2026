function mostrarResultado(texto) {
    var resultado = document.getElementById("resultado");
    resultado.textContent = texto;
    resultado.classList.add("is-filled");
    alert(texto);
}

function executarExercicio() {
    var anoNascimento = Number(prompt("Digite seu ano de nascimento:"));
    var anoAtual = Number(prompt("Digite o ano atual:"));
    var idade = anoAtual - anoNascimento;
    if (idade >= 18) {
        mostrarResultado(`Voce tem ${idade} anos. Ja pode tirar CNH.`);
    } else {
        mostrarResultado(`Voce tem ${idade} anos. Ainda nao pode tirar CNH.`);
    }
}
