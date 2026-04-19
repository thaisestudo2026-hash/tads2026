function mostrarResultado(texto) {
    var resultado = document.getElementById("resultado");
    resultado.textContent = texto;
    resultado.classList.add("is-filled");
    alert(texto);
}

function executarExercicio() {
    var n1 = Number(prompt("Digite o primeiro numero:"));
    var n2 = Number(prompt("Digite o segundo numero:"));
    var op = prompt("Digite a operacao (+, -, * ou /):");
    var resultado;
    switch (op) {
        case "+": resultado = n1 + n2; break;
        case "-": resultado = n1 - n2; break;
        case "*": resultado = n1 * n2; break;
        case "/":
            if (n2 === 0) return mostrarResultado("Erro: divisao por zero.");
            resultado = n1 / n2;
            break;
        default:
            return mostrarResultado("Operacao invalida.");
    }
    mostrarResultado(`Resultado: ${resultado}`);
}
