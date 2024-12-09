// Conta: dados; ...; compras: 1,2,3,4,5,6; ....

var contaex = {
    nome: "Teste",
    idade: "32",
    compras: [120687,340956,801700],
    genero: "M",
    favoritos: [1,2,3]
};

// Compra: id, data, status, valor, frete, produtos, endereço

var dbCompras = {
    dados: [
        {
            id: 120687,
            data: "01/09/2024",
            status: "Finalizado",
            valor: 180.67,
            frete: 0,
            pagamento: "Pix",
            produtos: [1,2,3],
            endereco: {
                rua: "Rua A",
                numero: "1000",
                complemento: "Apto 1",
                bairro: "Bairro 2",
                cidade: "Metropolis",
                estado: "Minas Gerais",
                pais: "Brasil",
                cep: "33333-333"
            }
        },
        {
            id: 340956,
            data: "05/10/2024",
            status: "Finalizado",
            valor: 124.65,
            frete: 10.00,
            pagamento: "Boleto",
            produtos: [2,3],
            endereco: {
                rua: "Rua A",
                numero: "1000",
                complemento: "Apto 1",
                bairro: "Bairro 2",
                cidade: "Metropolis",
                estado: "Minas Gerais",
                pais: "Brasil",
                cep: "33333-333"
            }
        },
        {
            id: 801700,
            data: "15/11/2024",
            status: "Em Andamento",
            valor: 85.00,
            frete: 10.00,
            pagamento: "Cartão",
            produtos: [1],
            endereco: {
                rua: "Rua A",
                numero: "1000",
                complemento: "Apto 1",
                bairro: "Bairro 2",
                cidade: "Metropolis",
                estado: "Minas Gerais",
                pais: "Brasil",
                cep: "33333-333"
            }
        }
    ]
};

//Produtos : id, nome, foto

var dbProdutos = {
    dados: [
        {
            id: 1,
            nome: "Short",
            foto: "../imagem/short1.jpg",
            estoque: 2,
            valor: 79.99
        },
        {
            id: 2,
            nome: "Camiseta",
            foto: "../imagem/blusa1.jpg",
            estoque: 0,
            valor: 105.99
        },
        {
            id: 3,
            nome: "Camiseta",
            foto: "../imagem/blusa2.jpg",
            estoque: 2,
            valor: 102.99
        },
        {
            id: 4,
            nome: "Saia Amarela",
            foto: "../imagem/saia1.jpg",
            estoque: 2,
            valor: 180.99
        },
        {
            id: 5,
            nome: "Short Beje",
            foto: "../imagem/short2.jpg",
            estoque: 2,
            valor: 74.99
        },
        {
            id: 6,
            nome: "Calça",
            foto: "../imagem/calça1.jpg",
            estoque: 2,
            valor: 297.99
        },
        {
            id: 7,
            nome: "Camiseta",
            foto: "../imagem/blusa3.jpg",
            estoque: 2,
            valor: 86.99
        },
        {
            id: 8,
            nome: "Bermuda Listrada",
            foto: "../imagem/bermuda1.jpg",
            estoque: 2,
            valor: 225.99
        },
        {
            id: 9,
            nome: "Jaqueta",
            foto: "../imagem/blusa4.jpg",
            estoque: 2,
            valor: 320.99
        },
        {
            id: 10,
            nome: "Saia Verde",
            foto: "../imagem/saia2.jpg",
            estoque: 2,
            valor: 160.99
        },
        {
            id: 11,
            nome: "Camiseta",
            foto: "../imagem/blusa5.jpg",
            estoque: 2,
            valor: 85.99
        },
        {
            id: 12,
            nome: "Vestido",
            foto: "../imagem/vestido1.jpg",
            estoque: 2,
            valor: 215.99
        },
        {
            id: 13,
            nome: "Camiseta",
            foto: "../imagem/blusa6.jpg",
            estoque: 2,
            valor:98.99
        },
        {
            id: 14,
            nome: "Vestido",
            foto: "../imagem/vestido2.jpg",
            estoque: 2,
            valor: 207.99
        },
        {
            id: 15,
            nome: "Bermuda",
            foto: "../imagem/bermuda2.jpg",
            estoque: 2,
            valor: 197.99
        },
        {
            id: 16,
            nome: "Jaqueta",
            foto: "../imagem/blusa7.jpg",
            estoque: 2,
            valor:246.99
        }
    ]
};

//localStorage.setItem("contaTeste", JSON.stringify(contaex));
//localStorage.setItem("compras", JSON.stringify(dbCompras));
localStorage.setItem("dbProdutos", JSON.stringify(dbProdutos));