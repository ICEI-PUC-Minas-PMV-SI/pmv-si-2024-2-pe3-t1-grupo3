const confirm = (event) => {
    event.preventDefault();
    let id = 1;
    let data = [];
    let notError = true;
    const dataTemp = window.localStorage.getItem("Data") ? JSON.parse(localStorage.getItem('Data')) : [];
    const inputValue = document.querySelectorAll('input');

    if (dataTemp.length > 0) {
        id += dataTemp.length;
        dataTemp.map((val) => {
            if (val.email === inputValue[1].value) notError = false;
        });
    };

    const form = { id: id, cargo: "user", name: inputValue[0].value, email: inputValue[1].value, password: inputValue[2].value };


    if (inputValue[0].value === '' || inputValue[1].value === '' || inputValue[2].value === '' || inputValue[3].value === '') {
        console.log('entro');
        alert("Todos os campos devem ser preenchidos.");
        return;
    } else {
        if (inputValue[2].value === inputValue[3].value) {
            if (notError) {
                data = [...dataTemp, form];
                window.localStorage.setItem("Data", JSON.stringify(data));
                window.localStorage.setItem("logado", "true");

                let ultimo = data.length-1;
                window.localStorage.setItem("idUser", JSON.stringify(data[ultimo].id));
                
                window.location.href = "index.html";
                alert('Cadastro realizado com sucesso.');
            } else {
                alert('Esse e-mail já está sendo utilizado.');
            };
        } else {
            alert('As senhas precisam ser iguais.');
        };
    };
};