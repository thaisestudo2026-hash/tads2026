function mostrarResultado(texto) {
    var resultado = document.getElementById("resultado");
    resultado.textContent = texto;
    resultado.classList.add("is-filled");
    alert(texto);
}

function executarExercicio() {
    var senha = prompt("Defina uma senha:");
    var tentativa = prompt("Digite a senha:");
    while (tentativa !== senha) {
        alert("Senha incorreta, tente novamente.");
        tentativa = prompt("Digite a senha:");
    }
    mostrarResultado("Acesso concedido!");
}
