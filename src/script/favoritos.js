function abrirFavoritos() {
    let contaLogada = JSON.parse(localStorage.getItem("contaTeste"));
    let favoritos = contaLogada.favoritos;
    let dbProdutos = JSON.parse(localStorage.getItem("produtos"));
    const dbProdutosMap = {};
  
    dbProdutos.dados.forEach(item => {
      dbProdutosMap[item.id] = item;
    });

    for (i=0; i<favoritos.length; i++) {
      const id = favoritos[i];
      const produto = dbProdutosMap[id];
  
      if (produto) {
        let copia = document.getElementById("baseItemFavoritos").cloneNode(true);
        
        copia.setAttribute("id", id);
        copia.classList.remove('sumiu');
        copia.querySelector("#fotoProdutoFavorito").src = produto.foto;
        copia.querySelector("#nomeProdutoFavorito").innerHTML = produto.nome;
        
        if (produto.estoque>0){
            copia.querySelector("#estoqueProdutoFavorito").innerHTML = "Em Estoque";
        } else {
            copia.querySelector("#estoqueProdutoFavorito").innerHTML = "Fora de Estoque";
        }
  
        

        document.getElementById("listaFavoritos").appendChild(copia);
      }
    }
  }
  
function excluirFavorito(id) {
    let contaLogada = JSON.parse(localStorage.getItem("contaTeste")); 
    let favoritos = contaLogada.favoritos;

    for (i=0; i<favoritos.length; i++){
        if (favoritos[i] == id){
            favoritos.splice(i, 1);
        }
    }

    contaLogada.favoritos = favoritos;

    localStorage.setItem("contaTeste", JSON.stringify(contaLogada));
    location.reload();
}