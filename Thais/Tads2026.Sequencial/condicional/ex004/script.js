function enviarBoasVindas() {
    var r = document.getElementById("resultado");
    var nome = document.getElementById("nomeInput").value.trim();
    if (!nome) {
        r.textContent = "Por favor, digite seu nome no campo acima.";
        r.classList.remove("is-filled");
        return;
    }
    r.textContent =
        "Seja bem-vindo(a), " + nome + "!\n\n" +
        "Ficamos felizes em ter você no curso de TADS.";
    r.classList.add("is-filled");
}
