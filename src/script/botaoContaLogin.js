function contaLogin() {
    let logado = localStorage.getItem("logado");

    if (logado == 'true'){
        window.location.href = "conta.html";
    } else {
        window.location.href = "login.html";
    }
}

function finalizarConta() {
    let logado = localStorage.getItem("logado");

    if (logado == 'true'){
        finalizar();
    } else {
        alert("É necessário estar logado para completar a compra.");
    }
}



function minhasTrocasConta(){
    let logado = localStorage.getItem("logado");

    if (logado == 'true'){
        preencherTrocas();
    } else {
        alert("É necessário estar logado para visualizar trocas.");
    }
}