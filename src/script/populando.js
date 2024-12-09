var Data = [
    {
        cargo: "user",
        email: "user",
        id: 1,
        name: "user",
        password: "123"
    },
    {
        cargo: "admin",
        email: "admin",
        id: 2,
        name: "admin",
        password: "123"
    }
];
var carrinho = [];
var dbCompras = {dados:[]};
var dbTrocas = {dados:[]};
var idAcompanhamento;
var idUser;
var logado = false;
var populado = true;

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

if (!localStorage.getItem("populado")) {
    localStorage.clear();

    localStorage.setItem("dbProdutos", JSON.stringify(dbProdutos));
    localStorage.setItem("dbTrocas", JSON.stringify(dbTrocas));
    localStorage.setItem("dbCompras", JSON.stringify(dbCompras));
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    localStorage.setItem("Data", JSON.stringify(Data));
    localStorage.setItem("idUser", []);
    localStorage.setItem("idAcompanhamento", []);
    localStorage.setItem("logado", logado);
    localStorage.setItem("populado", populado);
}