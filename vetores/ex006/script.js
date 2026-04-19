function mostrarResultado(texto) {
    var resultado = document.getElementById("resultado");
    resultado.textContent = texto;
    resultado.classList.add("is-filled");
    alert(texto);
}

function executarExercicio() {
    var numeros = [];
    for (var i = 1; i <= 5; i++) numeros.push(Number(prompt(`Digite o numero ${i}:`)));
    var inverso = [];
    for (var i = numeros.length - 1; i >= 0; i--) inverso.push(numeros[i]);
    mostrarResultado(`Original: [${numeros.join(", ")}]\nInverso: [${inverso.join(", ")}]`);
}
