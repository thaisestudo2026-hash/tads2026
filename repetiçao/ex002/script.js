function mostrarResultado(texto) {
    var resultado = document.getElementById("resultado");
    resultado.textContent = texto;
    resultado.classList.add("is-filled");
    alert(texto);
}

function executarExercicio() {
    var numero = Number(prompt("Digite um numero inteiro:"));
    var texto = `Tabuada do ${numero}:\n`;
    for (var i = 1; i <= 10; i++) texto += `${numero} x ${i} = ${numero * i}\n`;
    mostrarResultado(texto);
}
