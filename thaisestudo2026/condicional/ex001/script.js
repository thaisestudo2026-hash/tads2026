function mostrarResultado(texto) {
    var resultado = document.getElementById("resultado");
    resultado.textContent = texto;
    resultado.classList.add("is-filled");
    alert(texto);
}

function executarExercicio() {
    var numero = Number(prompt("Digite um numero inteiro:"));
    var tipo = numero % 2 === 0 ? "par" : "impar";
    mostrarResultado(`O numero ${numero} e ${tipo}.`);
}
