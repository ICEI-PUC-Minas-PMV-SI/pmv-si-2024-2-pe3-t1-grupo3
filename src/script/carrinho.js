function adicionarCarrinho(id) {
    let carrinho = JSON.parse(localStorage.getItem("carrinho"));
    let achou = false;

    if (carrinho.length == 0) {
        carrinho.push({id: id,qtd: 1});
    } else {
        for (i=0; i<carrinho.length;i++){
            if (carrinho[i].id == id){
                carrinho[i].qtd = carrinho[i].qtd + 1;
                achou = true;
            }
        }
        if(!achou){
            carrinho.push({id: id,qtd: 1});
        }
    }

    localStorage.setItem("carrinho", JSON.stringify(carrinho));
}

function preencherCarrinho() {
    let carrinho = JSON.parse(localStorage.getItem("carrinho"));
    let dbProdutos = JSON.parse(localStorage.getItem("dbProdutos"));
    let dbProdutosMap = {};
    let subtotal = 0;
    let frete = 0;
    let totalCompra = 0;

    dbProdutos.dados.forEach(item => {
      dbProdutosMap[item.id] = item;
    });

    for (i=0; i<carrinho.length;i++){
        const id = carrinho[i].id;
        const produto = dbProdutosMap[id];

        if (produto) {
            let copia = document.getElementById("produtoBase").cloneNode(true);
            let totalProduto = produto.valor*carrinho[i].qtd;

            copia.setAttribute("id", id);
            copia.classList.remove('sumiu');
            copia.querySelector(".foto").src = produto.foto;
            copia.querySelector(".nome").innerHTML = produto.nome;
            copia.querySelector(".valor").innerHTML = "Unidade: R$ " + produto.valor;
            copia.querySelector(".custo").innerHTML = "Total: R$ " + totalProduto.toFixed(2);
            copia.querySelector(".qtd").value = carrinho[i].qtd;
            
            subtotal += totalProduto;
            frete += 2.5;

            document.getElementById("produtosCarrinho").appendChild(copia);
        }
    }

    totalCompra = subtotal + frete;

    document.getElementById("subTotal").innerHTML = subtotal.toFixed(2);
    document.getElementById("frete").innerHTML = frete.toFixed(2);
    document.getElementById("totalCompra").innerHTML = totalCompra.toFixed(2);

    let contas = JSON.parse(localStorage.getItem("Data"));
    let id = JSON.parse(localStorage.getItem("idUser")) - 1;
    let endereco = contas[id].endereco;

    if (endereco){
        document.getElementById("addNovoEnd").value = JSON.stringify(endereco);
        document.getElementById("labelEndereco").innerHTML = endereco.rua +", "+ endereco.numero +", "+ endereco.complemento;
        document.getElementById("addNovoEnd").onclick = null;
    }
}

function excluirItem(id) {
    let carrinho = JSON.parse(localStorage.getItem("carrinho"));
    
    for (i=0; i<carrinho.length;i++) {
        if (carrinho[i].id == id){
            carrinho.splice(i,1);
        }
    }

    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    location.reload();
}

function atualizarQtd(qtd, id) {
    let carrinho = JSON.parse(localStorage.getItem("carrinho"));
    
    for (i=0; i<carrinho.length;i++) {
        if (carrinho[i].id == id){
            carrinho[i].qtd = qtd;
        }
    }

    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    location.reload();
}

function finalizar() {
    let dbCompras = JSON.parse(localStorage.getItem("dbCompras"));
    let d = new Date();
    let compra = {
        id: dbCompras.dados.length+1,
        data: d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear(),
        status: "Em Andamento",
        valor: parseFloat(document.getElementById("subTotal").innerHTML),
        frete: parseFloat(document.getElementById("frete").innerHTML),
        pagamento: document.getElementById("selecao").value,
        produtos: JSON.parse(localStorage.getItem("carrinho")),
        endereco: document.getElementById("addNovoEnd").value
    };
    let contas = JSON.parse(localStorage.getItem("Data"));
    let id = JSON.parse(localStorage.getItem("idUser")) - 1;

    if (compra.pagamento == 'Selecione o método' || compra.endereco == 'on') {
        alert("Selecione endereço e método de pagamento!")
    } else {
        dbCompras.dados.push(compra);

        if (contas[id].compras){
            contas[id].compras.push(compra.id);
        } else {
            contas[id]["compras"] = [compra.id];
        }
    
        localStorage.setItem("dbCompras", JSON.stringify(dbCompras));
        localStorage.setItem("Data", JSON.stringify(contas));
        localStorage.setItem("carrinho", "[]");
    
        alert("Pedido realizado com sucesso!");
    
        location.reload();
    }
}