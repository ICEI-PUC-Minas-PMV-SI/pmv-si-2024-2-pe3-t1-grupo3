function menuConta(id) {
    document.getElementById("perfilConta").className = "desaparecer";
    document.getElementById("cartoesConta").className = "desaparecer";
    document.getElementById("enderecoConta").className = "desaparecer";
    document.getElementById("senhaConta").className = "desaparecer";
    document.getElementById("historicoConta").className = "desaparecer";
    document.getElementById("privacidadeConta").className = "desaparecer";

    document.getElementById(id).className = "";
}