function mostrarResultado(texto) {
    var resultado = document.getElementById("resultado");
    resultado.textContent = texto;
    resultado.classList.add("is-filled");
    alert(texto);
}

function executarExercicio() {
    var original = [1, 2, 2, 3, 4, 4, 4, 5];
    var unico = [];
    for (var i = 0; i < original.length; i++) if (!unico.includes(original[i])) unico.push(original[i]);
    mostrarResultado(`Original: [${original.join(", ")}]\nSem repetidos: [${unico.join(", ")}]`);
}
