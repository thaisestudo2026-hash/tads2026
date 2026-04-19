function mostrarResultado(texto) {
    var resultado = document.getElementById("resultado");
    resultado.textContent = texto;
    resultado.classList.add("is-filled");
    alert(texto);
}

function executarExercicio() {
    var peso = Number(prompt("Digite seu peso (kg):"));
    var altura = Number(prompt("Digite sua altura (m):"));
    var imc = peso / (altura * altura);
    var classe = "Obesidade";
    if (imc < 18.5) classe = "Abaixo do peso";
    else if (imc <= 24.9) classe = "Peso normal";
    else if (imc <= 29.9) classe = "Sobrepeso";
    mostrarResultado(`IMC: ${imc.toFixed(2)} - ${classe}.`);
}
