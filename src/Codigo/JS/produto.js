function leDados () {
    let strDados = localStorage.getItem('db');
    let objDados = {};

    if (strDados) {
        objDados = JSON.parse (strDados);
    }
    else {
        objDados = { cadastro: [ 
                        {id: "001", produto: [
                            {codigo: "001", nome: "cerveja IPA", categoria:"bebidas", marca: "Krug", preco: "5,00", estoque: "1000", img: "https://www.cervejastore.com.br/cerveja_krug_bier_ipa_600ml_1.jpg", detalhes: " A Krug Bier IPA é uma cerveja de alta fermentação, com 6,5% de teor alcoólico e 60 IBU. Apresenta coloração acobreada, espuma de boa formação e persistência, com aroma e sabor marcantes de lúpulo, com notas cítricas e florais. É uma cerveja de corpo médio, com amargor pronunciado e final seco."},
                            {codigo: "002", nome: "cerveja PILSEN", categoria:"bebidas", marca: "Krug", preco: "4,00", estoque: "1000", img: "https://www.cervejastore.com.br/cerveja_krug_bier_pilsen_600ml_1.jpg", detalhes: "A Krug Bier Pilsen é uma cerveja de baixa fermentação, com 4,8% de teor alcoólico e 15 IBU. Apresenta coloração dourada, espuma de boa formação e persistência, com aroma e sabor suaves de malte e lúpulo. É uma cerveja de corpo leve, com amargor sutil e final refrescante."},
                            {codigo: "003", nome: "cerveja WEISS", categoria:"bebidas", marca: "Krug", preco: "5,00", estoque: "1000", img: "https://www.cervejastore.com.br/cerveja_krug_bier_weiss_600ml_1.jpg", detalhes: "A Krug Bier Weiss é uma cerveja de alta fermentação, com 5,5% de teor alcoólico e 15 IBU. Apresenta coloração amarelo palha, espuma de boa formação e persistência, com aroma e sabor marcantes de trigo, com notas de banana e cravo. É uma cerveja de corpo médio, com amargor sutil e final refrescante."},
                            {codigo: "004", nome: "cerveja RED ALE", categoria:"bebidas", marca: "Krug", preco: "5,00", estoque: "1000", img: "https://www.cervejastore.com.br/cerveja_krug_bier_red_ale_600ml_1.jpg", detalhes: "A Krug Bier Red Ale é uma cerveja de alta fermentação, com 5,5% de teor alcoólico e 25 IBU. Apresenta coloração acobreada, espuma de boa formação e persistência, com aroma e sabor marcantes de malte, com notas de caramelo e toffee. É uma cerveja de corpo médio, com amargor sutil e final levemente adocicado."}
                            ]},
                        {id: "002", produto: [
                            {codigo: "001",nome: "refrigerante COCA COLA", categoria:"bebidas", marca: "Coca-Cola", preco: "4,00", estoque: "1000", img: "https://static.carrefour.com.br/medias/sys_master/images/images/hb2/hb7/h00/h00/158/911/5/1589115.jpg", detalhes: "Refrigerante Coca-Cola 2L"}
                            ]}
                    ]}
    }

    return objDados;
}

function salvaDados (dados) {
    localStorage.setItem ('db', JSON.stringify (dados));
}

function incluirproduto (){
    // Ler os dados do localStorage
    let objDados = leDados();

    // Incluir um novo contato
    let strCodigo = document.getElementById ('codigo').value;
    let strProduto = document.getElementById ('produto').value;
    let strCategoria = document.getElementById ('categoria').value;
    let strMarca = document.getElementById ('marca').value;
    let strPreco = document.getElementById ('preco').value;
    let strEstoque = document.getElementById ('estoque').value;
    let strImg = document.getElementById ('img').value;
    let strDetalhes = document.getElementById ('detalhes').value;
    let strID = document.getElementById ('id').textContent;

    let novoProduto = {

        id: strID,
        produto: [{
            codigo: strCodigo,
            nome: strProduto,
            categoria: strCategoria,
            marca: strMarca,
            preco: strPreco,
            estoque: strEstoque,
            img: strImg,
            detalhes: strDetalhes
        }]
    };
    objDados.cadastro.push (novoProduto);

    // Salvar os dados no localStorage novamente
    salvaDados (objDados);

    // Atualiza os dados da tela
    imprimeDados ();
}

function imprimeDados () {
    let tela = document.getElementById('tela');
    let strHtml = '';
    let objDados = leDados ();
    objDados = objDados.cadastro;
    for (let i = 0; i < objDados.length; i++) {
        strHtml += `<p>${objDados[i].id}</p>`
        for (let j = 0; j < objDados[i].produto.length; j++){
            strHtml += `<p>${objDados[i].produto[j].codigo} - ${objDados[i].produto[j].nome} - ${objDados[i].produto[j].categoria} - ${objDados[i].produto[j].marca}</p>
                        <p>${objDados[i].produto[j].preco} - ${objDados[i].produto[j].estoque}</p><br><img src="${objDados[i].produto[j].img}" alt="Imagem do produto" width="200" height="200">
                        <p>${objDados[i].produto[j].detalhes}</p><br><br>`
        }
    }

    tela.innerHTML = strHtml;
}

// Configura os botões
document.getElementById ('buscar').addEventListener ('click', imprimeDados);
document.getElementById ('cadastrar').addEventListener ('click', incluirproduto);

