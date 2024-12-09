function openPage(x, y) {
    var indice = x
    var target = y
    var url = '../content/content' + indice + '.html'
    
//busca o conteúdo sem refresh -objeto-
  var xml = new XMLHttpRequest()
// stataus 200, é quando tudo deu certo (Tipo erro 404)
    xml.onreadystatechange = function () {
        if (xml.readyState == 4 && xml.status == 200) {
            document.getElementById(target).innerHTML = xml.responseText
        }
    }
// get chama a inf da url content a e b
    xml.open("GET", url, true)
//executa função
    xml.send()
}

function finalizarTroca() {
    let dbTrocas = JSON.parse(localStorage.getItem("dbTrocas"));
    let troca = {
        id: dbTrocas.dados.length+1,
        titulo: document.getElementById("tituloPeca").value,
        descricao: document.getElementById("descricaoPeca").value,
        tipo: document.getElementById("tipoPeca").value
    };
    let contas = JSON.parse(localStorage.getItem("Data"));
    let id = JSON.parse(localStorage.getItem("idUser")) - 1;

    if (troca.titulo == '' || troca.descricao == '' || troca.tipo == '') {
        alert("Preencha todos os campos!");
    } else {
        dbTrocas.dados.push(troca);

        if (contas[id].trocas){
            contas[id].trocas.push(troca.id);
        } else {
            contas[id]["trocas"] = [troca.id];
        }

        localStorage.setItem("dbTrocas", JSON.stringify(dbTrocas));
        localStorage.setItem("Data", JSON.stringify(contas));

        alert("Pedido realizado com sucesso!");

        location.reload();
    }
}

function preencherTrocas() {
    let contas = JSON.parse(localStorage.getItem("Data"));
    let id = JSON.parse(localStorage.getItem("idUser")) - 1;
    let contaLogada = contas[id];
    let trocas = contaLogada.trocas;
    let dbTrocas = JSON.parse(localStorage.getItem("dbTrocas"));
    const dbTrocasMap = {};

    if(!document.getElementById("bannerImg")){
        document.querySelector(".novoPedido").setAttribute("id","sumiu");
    } else {
        document.getElementById("bannerImg").setAttribute("id", "sumiu");
    }

    dbTrocas.dados.forEach(item => {
        dbTrocasMap[item.id] = item;
    });

    document.querySelector(".listaTrocas").setAttribute("id","");

    if (trocas) {
        for (i=trocas.length-1; i>=0; i--) {
            const id = trocas[i];
            const troca = dbTrocasMap[id];

            if (troca) {
                let copia = document.querySelector(".baseItemTrocas").  cloneNode(true);

                copia.setAttribute("id", id);
                copia.querySelector("#idTroca").innerHTML = id;
                copia.querySelector("#tituloTroca").innerHTML = troca.titulo;
                copia.querySelector("#tipoTroca").innerHTML = troca.tipo;
                copia.querySelector("#descricaoTroca").innerHTML = troca.descricao;

                document.querySelector(".listaTrocas").appendChild(copia);
            }
        }
    }
}

function novoPedidoConta() {
    if(!document.getElementById("bannerImg")){
        document.querySelector(".listaTrocas").setAttribute("id","sumiu");
    } else {
        document.getElementById("bannerImg").setAttribute("id", "sumiu");
    }

    document.querySelector(".novoPedido").setAttribute("id","");
}