function mostrarResultado(texto) {
    var resultado = document.getElementById("resultado");
    resultado.textContent = texto;
    resultado.classList.add("is-filled");
    alert(texto);
}

function executarExercicio() {
    var maior = -Infinity;
    var menor = Infinity;
    for (var i = 1; i <= 5; i++) {
        var idade = Number(prompt(`Digite a idade ${i}:`));
        if (idade > maior) maior = idade;
        if (idade < menor) menor = idade;
    }
    mostrarResultado(`Maior idade: ${maior} | Menor idade: ${menor}`);
}
