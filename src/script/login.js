const confirm = (event) => {
    event.preventDefault();
    const data = JSON.parse(localStorage.getItem('Data'));
    const inputValue = document.querySelectorAll('input');
    let stop = false

    for (let index = 0; index < data.length; index++) {
     const val = data[index];
     if (stop) break;

        if (val.email === inputValue[0].value && val.password === inputValue[1].value) {
            let idUser = index + 1;
            window.localStorage.setItem("idUser", JSON.stringify(idUser));
            stop = true;

            window.location.href = "index.html";

            window.localStorage.setItem("logado", "true");
        };
    };

    if (!stop) {
        alert("Usuário ou senha incorreta.");
    }

    if (!inputValue[0].value || !inputValue[1].value) {
 alert("Por favor, preencha todos os campos.");
 return;
}
};