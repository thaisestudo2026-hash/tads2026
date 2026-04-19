function mostrarResultado(texto) {
    var resultado = document.getElementById("resultado");
    resultado.textContent = texto;
    resultado.classList.add("is-filled");
    alert(texto);
}

function executarExercicio() {
    var fib = [0, 1];
    for (var i = 2; i < 10; i++) fib.push(fib[i - 1] + fib[i - 2]);
    mostrarResultado(`Primeiros 10 termos:\n${fib.join(", ")}`);
}
