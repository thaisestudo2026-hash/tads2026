function mostrarResultado(texto) {
    var resultado = document.getElementById("resultado");
    resultado.textContent = texto;
    resultado.classList.add("is-filled");
    alert(texto);
}

function executarExercicio() {
    var n = Number(prompt("Digite um numero inteiro:"));
    var fat = 1;
    for (var i = n; i >= 1; i--) fat *= i;
    mostrarResultado(`Fatorial de ${n} = ${fat}.`);
}
