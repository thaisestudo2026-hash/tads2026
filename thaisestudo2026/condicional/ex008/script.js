function mostrarResultado(texto) {
    var resultado = document.getElementById("resultado");
    resultado.textContent = texto;
    resultado.classList.add("is-filled");
    alert(texto);
}

function executarExercicio() {
    var n = Number(prompt("Digite um numero de 1 a 7:"));
    var dia = "Dia invalido";
    switch (n) {
        case 1: dia = "Domingo"; break;
        case 2: dia = "Segunda-feira"; break;
        case 3: dia = "Terca-feira"; break;
        case 4: dia = "Quarta-feira"; break;
        case 5: dia = "Quinta-feira"; break;
        case 6: dia = "Sexta-feira"; break;
        case 7: dia = "Sabado"; break;
    }
    mostrarResultado(dia);
}
