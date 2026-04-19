function mostrarResultado(texto) {
    var resultado = document.getElementById("resultado");
    resultado.textContent = texto;
    resultado.classList.add("is-filled");
    alert(texto);
}

function executarExercicio() {
    var numeros = [];
    for (var i = 1; i <= 10; i++) numeros.push(Number(prompt(`Digite o numero ${i}:`)));
    var pares = [];
    for (var i = 0; i < numeros.length; i++) if (numeros[i] % 2 === 0) pares.push(numeros[i]);
    mostrarResultado(`Originais: [${numeros.join(", ")}]\nPares: [${pares.join(", ")}]`);
}
