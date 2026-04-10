function dizerOi() {
    var r = document.getElementById("resultado");
    var nome = document.getElementById("nomeInput").value.trim();
    if (!nome) {
        r.textContent = "Digite seu nome no campo acima.";
        r.classList.remove("is-filled");
        return;
    }
    r.textContent = "Oi, " + nome + "!";
    r.classList.add("is-filled");
}
