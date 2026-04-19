function mostrarResultado(texto) {
    var resultado = document.getElementById("resultado");
    resultado.textContent = texto;
    resultado.classList.add("is-filled");
    alert(texto);
}

function executarExercicio() {
    var ano = Number(prompt("Digite um ano:"));
    var ehBissexto = (ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0;
    mostrarResultado(ehBissexto ? `O ano ${ano} e bissexto.` : `O ano ${ano} nao e bissexto.`);
}
