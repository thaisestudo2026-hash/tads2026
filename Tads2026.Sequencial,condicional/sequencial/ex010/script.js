function mostrarResultado(texto) {
    var resultado = document.getElementById("resultado");
    resultado.textContent = texto;
    resultado.classList.add("is-filled");
    alert(texto);
}

function executarExercicio() {
    var horasTrabalhadas = Number(prompt("Digite as horas trabalhadas no mes:"));
    var valorHora = Number(prompt("Digite o valor por hora (R$):"));
    var salarioBruto = horasTrabalhadas * valorHora;
    var imposto = salarioBruto * 0.08;
    var salarioLiquido = salarioBruto - imposto;

    mostrarResultado(
        `Salario bruto: R$ ${salarioBruto.toFixed(2)} | Imposto: R$ ${imposto.toFixed(2)} | Salario liquido: R$ ${salarioLiquido.toFixed(2)}.`
    );
}
