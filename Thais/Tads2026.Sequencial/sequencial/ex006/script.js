function mostrarResultado(texto) {
    var resultado = document.getElementById("resultado");
    resultado.textContent = texto;
    resultado.classList.add("is-filled");
    alert(texto);
}

function executarExercicio() {
    var celsius = Number(prompt("Digite a temperatura em Celsius (C):"));
    var fahrenheit = (celsius * 9) / 5 + 32;
    mostrarResultado(`${celsius} C equivalem a ${fahrenheit.toFixed(2)} F.`);
}
