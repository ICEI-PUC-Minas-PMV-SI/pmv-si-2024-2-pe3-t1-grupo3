function paginaDetalhePedido(elemento) {
  localStorage.setItem("idAcompanhamento", elemento.parentNode.id);

  document.location.href = "acompanhamento.html";
}

function abrirHistoricoCompras() {
  let contas = JSON.parse(localStorage.getItem("Data"));
  let id = JSON.parse(localStorage.getItem("idUser")) - 1;
  let contaLogada = contas[id];
  let compras = contaLogada.compras;
  let dbCompras = JSON.parse(localStorage.getItem("dbCompras"));
  const dbComprasMap = {};

  dbCompras.dados.forEach(item => {
    dbComprasMap[item.id] = item;
  });

  for (i=compras.length-1; i>=0; i--) {
    const id = compras[i];
    const compra = dbComprasMap[id];
    const total = compra.valor+compra.frete;

    if (compra) {
      let copia = document.getElementById("baseItemHistorico").cloneNode(true);
      
      copia.setAttribute("id", id);
      copia.classList.remove('sumiu');
      copia.querySelector("#numeroPedidoHistorico").innerHTML = id;
      copia.querySelector("#dataPedidoHistorico").innerHTML = compra.data;
      copia.querySelector("#statusPedidoHistorico").innerHTML = compra.status;
      copia.querySelector("#valorPedidoHistorico").innerHTML = "R$ " + total;

      document.getElementById("listaHistoricoCompra").appendChild(copia);
    }
  }
}

function abrirAcompanhamento() {
  let dbCompras = JSON.parse(localStorage.getItem("dbCompras")).dados;
  let idPedido = localStorage.getItem("idAcompanhamento");
  let pedido;
  let dbProdutos = JSON.parse(localStorage.getItem("dbProdutos"));
  let produtos;
  const dbProdutosMap = {};

  for (i=0; i<dbCompras.length; i++){
    if (dbCompras[i].id == idPedido){
      pedido = dbCompras[i];
      produtos = pedido.produtos;
    }
  }

  document.getElementById("numeroPedidoAcompanhamento").innerHTML = pedido.id;
  document.getElementById("dataPedidoAcompanhamento").innerHTML = pedido.data;
  document.getElementById("statusPedidoAcompanhamenot").innerHTML = pedido.status;

  document.getElementById("ruaAcompanhamento").innerHTML = pedido.endereco.rua;
  document.getElementById("numeroAcompanhamento").innerHTML = pedido.endereco.numero;
  document.getElementById("complementoAcompanhamento").innerHTML = pedido.endereco.complemento;
  document.getElementById("bairroAcompanhamento").innerHTML = pedido.endereco.bairro;
  document.getElementById("cidadeAcompanhamento").innerHTML = pedido.endereco.cidade;
  document.getElementById("estadoAcompanhamento").innerHTML = pedido.endereco.estado;
  document.getElementById("paisAcompanhamento").innerHTML = pedido.endereco.pais;
  document.getElementById("metodoValorAcompanhamento").innerHTML = pedido.pagamento;

  document.getElementById("subtotalAcompanhamento").innerHTML = pedido.valor;
  document.getElementById("freteAcompanhamento").innerHTML = pedido.frete.toFixed(2);
  document.getElementById("totalAcompanhamento").innerHTML = pedido.valor + pedido.frete;

  dbProdutos.dados.forEach(item => {
    dbProdutosMap[item.id] = item;
  });

  for (i=0; i<produtos.length; i++) {
    const id = produtos[i].id;
    const produto = dbProdutosMap[id];

    if (produto) {
      let copia = document.getElementById("baseProdutoAcompanhamento").cloneNode(true);
      
      copia.classList.remove('sumiu');
      copia.querySelector("#imgProdutoAcompanhamento").src = produto.foto;
      copia.querySelector("#nomeProdutoAcompanhamento").innerHTML = produto.nome;

      document.getElementById("itensPedido").appendChild(copia);
    }
  }
}