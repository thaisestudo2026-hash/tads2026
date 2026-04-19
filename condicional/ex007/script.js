function mostrarResultado(texto) {
    var resultado = document.getElementById("resultado");
    resultado.textContent = texto;
    resultado.classList.add("is-filled");
    alert(texto);
}

function executarExercicio() {
    var a = Number(prompt("Digite o primeiro lado:"));
    var b = Number(prompt("Digite o segundo lado:"));
    var c = Number(prompt("Digite o terceiro lado:"));
    var forma = a < b + c && b < a + c && c < a + b;
    if (!forma) return mostrarResultado("Esses valores nao formam triangulo.");
    if (a === b && b === c) return mostrarResultado("Triangulo Equilatero.");
    if (a === b || a === c || b === c) return mostrarResultado("Triangulo Isosceles.");
    return mostrarResultado("Triangulo Escaleno.");
}
