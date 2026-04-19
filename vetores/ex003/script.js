function mostrarResultado(texto) {
    var resultado = document.getElementById("resultado");
    resultado.textContent = texto;
    resultado.classList.add("is-filled");
    alert(texto);
}

function executarExercicio() {
    var numeros = [];
    for (var i = 1; i <= 5; i++) numeros.push(Number(prompt(`Digite o numero ${i}:`)));
    var maior = numeros[0];
    var menor = numeros[0];
    for (var i = 1; i < numeros.length; i++) {
        if (numeros[i] > maior) maior = numeros[i];
        if (numeros[i] < menor) menor = numeros[i];
    }
    mostrarResultado(`Numeros: [${numeros.join(", ")}]\nMaior: ${maior} | Menor: ${menor}`);
}
