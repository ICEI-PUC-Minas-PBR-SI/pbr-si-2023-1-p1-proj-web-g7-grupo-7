function leDados() {
    let strDados = localStorage.getItem('db');
    let objDados = {};

    if (strDados) {
        objDados = JSON.parse(strDados);
    }
    else {
        objDados = {
            cadastro: [
                {
                    id: "001", produto: [
                        { codigo: "001", nome: "cerveja IPA", categoria: "bebidas", marca: "Krug", preco: "5,00", estoque: "1000", img: "https://giassi.vtexassets.com/arquivos/ids/581381/Cerveja-IPA-Lagunitas-Garrafa-355ml.png?v=638137981168400000", detalhes: " A Krug Bier IPA é uma cerveja de alta fermentação, com 6,5% de teor alcoólico e 60 IBU. Apresenta coloração acobreada, espuma de boa formação e persistência, com aroma e sabor marcantes de lúpulo, com notas cítricas e florais. É uma cerveja de corpo médio, com amargor pronunciado e final seco." },
                        { codigo: "002", nome: "cerveja PILSEN", categoria: "bebidas", marca: "Krug", preco: "4,00", estoque: "1000", img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/103/462/products/986731_cerveja-pilsen-uruguaia-960ml_z1_636849733904265598-d25ccbc5501cb3b5da15852647528615-640-0.webp", detalhes: "A Krug Bier Pilsen é uma cerveja de baixa fermentação, com 4,8% de teor alcoólico e 15 IBU. Apresenta coloração dourada, espuma de boa formação e persistência, com aroma e sabor suaves de malte e lúpulo. É uma cerveja de corpo leve, com amargor sutil e final refrescante." },
                        { codigo: "003", nome: "cerveja WEISS", categoria: "bebidas", marca: "Krug", preco: "5,00", estoque: "1000", img: "https://images.tcdn.com.br/img/img_prod/736175/cerveja_weiss_fuder_pilsen_600ml_95_1_c4d42f58d0626271cb94906807d873a7.jpg", detalhes: "A Krug Bier Weiss é uma cerveja de alta fermentação, com 5,5% de teor alcoólico e 15 IBU. Apresenta coloração amarelo palha, espuma de boa formação e persistência, com aroma e sabor marcantes de trigo, com notas de banana e cravo. É uma cerveja de corpo médio, com amargor sutil e final refrescante." },
                        { codigo: "004", nome: "cerveja RED ALE", categoria: "bebidas", marca: "Krug", preco: "5,00", estoque: "1000", img: "https://famigliavalduga.vteximg.com.br/arquivos/ids/159809-900-1200/BL_Prancheta-1-copia-40.jpg?v=637867428082300000", detalhes: "A Krug Bier Red Ale é uma cerveja de alta fermentação, com 5,5% de teor alcoólico e 25 IBU. Apresenta coloração acobreada, espuma de boa formação e persistência, com aroma e sabor marcantes de malte, com notas de caramelo e toffee. É uma cerveja de corpo médio, com amargor sutil e final levemente adocicado." }
                    ]
                },
                {
                    id: "002", produto: [
                        { codigo: "001", nome: "refrigerante COCA COLA", categoria: "bebidas", marca: "Coca-Cola", preco: "4,00", estoque: "1000", img: "https://ibassets.com.br/ib.item.image.big/b-e312343c15c643a58fde0cd9806ffa19.png", detalhes: "Refrigerante Coca-Cola 2L" }
                    ]
                }
            ]
        }
    }

    return objDados;
}

function salvaDados(dados) {
    localStorage.setItem('db', JSON.stringify(dados));
}

function incluirproduto() {
    // Ler os dados do localStorage
    let objDados = leDados();
    let cadastro = objDados.cadastro;

    // Incluir um novo contato
    let strCodigo = 1;
    let strProduto = document.getElementById('produto').value;
    let strCategoria = document.getElementById('categoria').value;
    let strMarca = document.getElementById('marca').value;
    let strPreco = document.getElementById('preco').value;
    let strEstoque = document.getElementById('estoque').value;
    let strImg = document.getElementById('img').value;
    let strDetalhes = document.getElementById('detalhes').value;
    let strID = document.getElementById('Usuario').textContent;
    if (strProduto == "" || strCategoria == "" || strMarca == "" || strPreco == "" || strEstoque == "" || strImg == "" || strDetalhes == "") {
        alert("Preencha todos os campos");
        return;
    }
    else {

        let novoProduto;
        let novoId;
        let cont = 0;

        // Cadastra usuario no banco de dados
        for (let i = 0; i < cadastro.length; i++) {

            if (strID == cadastro[i].id) {
                cont++;
            }
        }

        if (cont == 0) {
            novoId = {
                id: strID,
                produto: []
            };
            objDados.cadastro.push(novoId);
            salvaDados(objDados);
        }


        objDados = leDados();
        let cadastro1 = objDados.cadastro;

        for (let i = 0; i < cadastro1.length; i++) {

            if (strID == cadastro1[i].id) {
                if (cadastro1[i].length != 0)
                    strCodigo = cadastro1[i].produto.length + 1;
                novoProduto = {
                    codigo: strCodigo,
                    nome: strProduto,
                    categoria: strCategoria,
                    marca: strMarca,
                    preco: strPreco,
                    estoque: strEstoque,
                    img: strImg,
                    detalhes: strDetalhes
                };
                objDados.cadastro[i].produto.push(novoProduto);
                //objDados.cadastro.i.push (novoProduto);
            }
        }

        // Salvar os dados no localStorage novamente
        salvaDados(objDados);

        // Atualiza os dados da tela
        imprimeDados ();
    }
}

function imprimeDados() {
    $("#table").html("");
    let strID = document.getElementById('Usuario').textContent;
    //let tela = document.getElementById('tela');
    let strHtml = '';
    let objDados = leDados();
    objDados = objDados.cadastro;
    for (let i = 0; i < objDados.length; i++) {
        if (strID == objDados[i].id) {
            strHtml += `<p>${objDados[i].id}</p>`
            for (let j = 0; j < objDados[i].produto.length; j++) {
                $("#table").append(`<tr><td scope="row"></td>
                                                <td>${objDados[i].produto[j].codigo}</td>
                                                <td>${objDados[i].produto[j].nome}</td>
                                                <td>${objDados[i].produto[j].categoria}</td>
                                                <td>${objDados[i].produto[j].marca}</td>
                                                <td>${objDados[i].produto[j].preco}</td>
                                                <td>${objDados[i].produto[j].estoque}</td>
                                                <td>${objDados[i].produto[j].img}</td>
                                                <td>${objDados[i].produto[j].detalhes}</td>
                                            </tr>`);
            }
        }
    }
}

// Configura os botões
document.getElementById ('buscar').addEventListener ('click', imprimeDados);
document.getElementById('cadastrar').addEventListener('click', incluirproduto);

function updateContato(id, produto) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    //let index = db.data.map(obj => obj.id).indexOf(id);
    let strID = document.getElementById('Usuario').textContent;
    let objDados = leDados();
    let cadastro = objDados.cadastro;

    // Altera os dados do objeto no array
    /*db.data[index].nome = produto.nome,
    db.data[index].email = produto.email,
    db.data[index].telefone = produto.telefone,
    db.data[index].cidade = produto.cidade,
    db.data[index].categoria = produto.categoria,
    db.data[index].website = produto.website*/
    for (let i = 0; i < cadastro.length; i++) {
        if (strID == cadastro[i].id) {
            for (let j = 0; j < cadastro[i].produto.length; j++) {
                if (id == cadastro[i].produto[j].codigo) {
                    cadastro[i].produto[j].nome = produto.nome,
                        cadastro[i].produto[j].categoria = produto.categoria,
                        cadastro[i].produto[j].marca = produto.marca,
                        cadastro[i].produto[j].preco = produto.preco,
                        cadastro[i].produto[j].estoque = produto.estoque,
                        cadastro[i].produto[j].img = produto.img,
                        cadastro[i].produto[j].detalhes = produto.detalhes
                }
            }
        }
    }

    //displayMessage("Contato alterado com sucesso");

    // Atualiza os dados no Local Storage
    salvaDados(objDados);
}

function deleteContato(id) {    
    
    let strID = document.getElementById('Usuario').textContent;
    let objDados = leDados();
    let cadastro = objDados.cadastro;
    let index = 0;
    let index2 = 0;
    for (let i = 0; i < cadastro.length; i++) {
        if (strID == cadastro[i].id) {
            index2 = i;
            for (let j = 0; j < cadastro[i].produto.length; j++) {
                if (id == cadastro[i].produto[j].codigo) {
                    index = j;
                    }
                }
            }
        }
    cadastro[index2].produto.splice(index, 1);

    //function (element) { return element.codigo != id }
    // Filtra o array removendo o elemento com o id passado
    //cadastro = cadastro.filter(function (element) { return element.codigo != id });

    //displayMessage("Contato removido com sucesso");

    // Atualiza os dados no Local Storage
    salvaDados(objDados);
}
