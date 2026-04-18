function mostrarResultado(texto) {
    var resultado = document.getElementById("resultado");
    resultado.textContent = texto;
    resultado.classList.add("is-filled");
    alert(texto);
}

function executarExercicio() {
    var hora = Number(prompt("Que horas sao? (0 a 23):"));
    if (hora >= 0 && hora <= 11) return mostrarResultado("Bom dia!");
    if (hora >= 12 && hora <= 17) return mostrarResultado("Boa tarde!");
    if (hora >= 18 && hora <= 23) return mostrarResultado("Boa noite!");
    return mostrarResultado("Hora invalida.");
}
