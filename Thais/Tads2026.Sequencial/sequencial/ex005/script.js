function mostrarResultado(texto) {
    var resultado = document.getElementById("resultado");
    resultado.textContent = texto;
    resultado.classList.add("is-filled");
    alert(texto);
}

function executarExercicio() {
    var largura = Number(prompt("Digite a largura do terreno (m):"));
    var comprimento = Number(prompt("Digite o comprimento do terreno (m):"));
    var area = largura * comprimento;
    mostrarResultado(`A area do terreno e ${area.toFixed(2)} m2.`);
}
